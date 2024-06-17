"use server";

import { eq } from "drizzle-orm";
import { db } from "./db";
import { Quiz, quizzes } from "./schemas/schema";

export const createQuiz = async (data: Quiz) => {
  'use server'
  const res = await db
    .insert(quizzes)
    .values(data)
    .returning({ quizId: quizzes.quizId });

  return res;
};

export async function getQuizById(quizId: string): Promise<Quiz | null> {
  const quiz = await db
    .select()
    .from(quizzes)
    .where(eq(quizzes.quizId, quizId))
    .then((rows) => rows[0]);

  if (!quiz) {
    return null;
  }

  return quiz;
}
