export interface CreateQuizInput {
  videoUrl: string;
  quizSize: number;
  difficulty: "Easy" | "Medium" | "Hard";
  quizName?: string | undefined;
}

export interface Option {
  id: string;
  title: string;
  optionLetter: "A" | "B" | "C" | "D";
  isCorrect: boolean;
}

export interface Question {
  questionId: string;
  questionNum: string;
  questionText: string;
  options: Option[];
}

export interface CreateQuizRes {
  quizTitle: string;
  quizDescription: string;
  quizQuestions: Question[];
}
