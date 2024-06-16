import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const quizzes = pgTable("quizzes", {
  id: serial("id").primaryKey(),
  quizId: text("quizId").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  quizContent: text("quizContent").notNull(),
  videoUrl: text("video_url").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Quiz = typeof quizzes.$inferInsert;
export type SelectQuiz = typeof quizzes.$inferSelect;
