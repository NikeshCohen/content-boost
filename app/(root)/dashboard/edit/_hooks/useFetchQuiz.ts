import { getQuizById } from "@/database/queries";
import { useState } from "react";

export const useFetchQuiz = () => {
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleErrors = (error: any) => {
    if (error instanceof Error) {
      console.error("Error occurred:", error.message);
      setError(error.message);
    } else {
      console.error("Unknown error occurred");
      setError("An unknown error occurred");
    }
  };

  const fetchQuiz = async (quizId: string) => {
    setError(null);
    setIsFetching(true);

    try {
      const quizData = await getQuizById(quizId);

      if (quizData) {
        return quizData;
      } else {
        return null;
      }
    } catch (error) {
      handleErrors(error);
    } finally {
      setIsFetching(false);
    }
  };

  return { isFetching, error, fetchQuiz };
};
