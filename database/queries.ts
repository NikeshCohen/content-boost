"use server";

import { eq } from "drizzle-orm";
import { db } from "./db";
import { Quiz, quizzes } from "./schemas/schema";

export const createQuiz = async (data: Quiz) => {
  const res = await db
    .insert(quizzes)
    .values(data)
    .returning({ id: quizzes.id });

  return res;
};

export async function getQuizById(id: number): Promise<Quiz | null> {
  const quiz = await db
    .select()
    .from(quizzes)
    .where(eq(quizzes.id, id))
    .then((rows) => rows[0]);

  if (!quiz) {
    return null;
  }

  return quiz;
}
