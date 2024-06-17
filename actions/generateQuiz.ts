"use server";

import "dotenv/config";
import { google } from "@ai-sdk/google";
// import { openai } from '@ai-sdk/openai';
import { generateObject } from "ai";
import { z } from "zod";
import { prompt } from "@/constants/prompt";

export async function generateQuiz(videoTitle: string, transcription: string) {
  "use server";

  const OptionSchema = z.object({
    id: z.string(),
    title: z.string(),
    optionLetter: z.enum(["A", "B", "C", "D"]),
    isCorrect: z.boolean(),
  });

  const QuestionSchema = z.object({
    questionId: z.string(),
    questionNum: z.string().regex(/^\d+$/),
    questionText: z.string(),
    options: z.array(OptionSchema),
  });

  const QuizSchema = z.object({
    quizTitle: z.string(),
    quizDescription: z.string(),
    quizQuestions: z.array(QuestionSchema),
  });

  try {
    const res = await generateObject({
      model: google("models/gemini-1.5-flash-latest"),
      prompt: `${prompt} ${videoTitle} ${transcription}`,
      schema: QuizSchema,
    });

    return res.object;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error generating quiz:", error.message);
      return "Unable to create quiz";
    } else {
      console.error("Unknown error:", error);
      return "Unknown error occurred";
    }
  }
}
