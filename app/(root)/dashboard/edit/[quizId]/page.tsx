/* eslint-disable react/no-unescaped-entities */

"use client";

import { Quiz } from "@/database/schemas/schema";
import React, { useEffect, useState } from "react";
import { useFetchQuiz } from "../_hooks/useFetchQuiz";
import Loader from "@/components/ui/loader";
import { Question } from "@/types";

function Page({ params }: { params: { quizId: string } }) {
  const [quizData, setQuizData] = useState<Quiz | null>();
  const [quizQuestions, setQuizQuestions] = useState<Question[] | null>(null);
  const { isFetching, error, fetchQuiz } = useFetchQuiz();

  useEffect(() => {
    const fetchData = async () => {
      const data = (await fetchQuiz(params.quizId)) as Quiz;
      if (!data) return;
      const parsedQuestions = JSON.parse(data.quizContent);
      setQuizQuestions(parsedQuestions);
      setQuizData(data);
    };

    fetchData();
  }, []);

  if (isFetching) {
    return (
      <div className="flex h-[85vh] w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[85vh] w-full items-center justify-center">
        Error: {error}
      </div>
    );
  }

  if (!quizData) {
    return (
      <div className="flex h-[85vh] w-full items-center justify-center">
        <h1 className="text-2xl font-extrabold">
          Whoops! We can't seem to find that :(
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-extrabold">{quizData.title}</h1>
      <p>{quizData.description}</p>

      <div className="mt-4 w-full max-w-3xl">
        {quizQuestions?.map((question, qIndex) => (
          <div key={question.questionId} className="mb-8">
            <h2 className="mb-2 text-xl font-bold">{`Q${qIndex + 1}: ${question.questionText}`}</h2>
            <ul className="grid grid-cols-2 gap-4">
              {question.options.map((option) => (
                <li
                  key={option.id}
                  className="flex h-full w-full items-center rounded-md bg-slate-600 p-2"
                >
                  <span>{option.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
