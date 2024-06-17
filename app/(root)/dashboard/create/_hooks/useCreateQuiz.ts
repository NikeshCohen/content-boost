import { useEffect, useState } from "react";
import { generateQuiz } from "@/actions/generateQuiz";
import { getVideoTitle } from "@/actions/getVideoTitle";
import { transcribeVideo } from "@/actions/transcribeVideo";
import { createQuiz } from "@/database/queries";
import { CreateQuizInput, CreateQuizRes } from "@/types";
import { randomId } from "@/lib/utils";

export const useCreateQuiz = () => {
  const [error, setError] = useState<string | null>(null);
  const [generating, setGenerating] = useState<boolean>(false);

  const handleErrors = (error: any) => {
    if (error instanceof Error) {
      console.error("Error occurred:", error.message);
      setError(error.message);
    } else {
      console.error("Unknown error occurred");
      setError("An unknown error occurred");
    }
  };

  const handleCreateQuiz = async (data: CreateQuizInput) => {
    setError(null);
    setGenerating(true);

    try {
      const videoId = new URL(data.videoUrl).searchParams.get("v");
      if (!videoId) {
        setError("Invalid YouTube URL");
        return;
      }

      const { videoTitle } = await getVideoTitle(videoId);
      const { transcript } = await transcribeVideo(videoId);

      if (transcript) {
        const quizData = await generateQuiz(videoTitle, transcript);
        const { quizTitle, quizDescription, quizQuestions } =
          quizData as CreateQuizRes;
        const createQuizInDb = await createQuiz({
          title: quizTitle,
          description: quizDescription,
          quizContent: JSON.stringify(quizQuestions),
          videoUrl: data.videoUrl,
          quizId: randomId(),
        });

        if (createQuizInDb[0].quizId) {
          return createQuizInDb[0].quizId;
        } else {
          throw new Error("DB Error: Unable to create new quiz");
        }
      }
    } catch (error) {
      handleErrors(error);
    } finally {
      setGenerating(false);
    }
  };

  return { generating, error, handleCreateQuiz };
};
