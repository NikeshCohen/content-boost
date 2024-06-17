export const prompt = `
  Based on the provided text, generate a quiz with the following specifications:

  1. If the title contains a number (e.g., "{x} lessons I've learnt"), generate {x} questions. Otherwise, generate a standard of 5 questions.
  2. Ensure that all the answer options are mixed up randomly and do not follow an order, THIS IS EXTREMELY IMPORTANT.
  3. Each question should have 4 answer options.
  4. Each option should have a unique UUID, a title, an option letter (A, B, C, D), and a property indicating if it is the correct answer.

  The quiz should be generated in JSON format with the following fields:

  - quizTitle: The title of the quiz.
  - quizDescription: A description for the quiz.
  - quizQuestions: An array of objects, each containing:
    - questionId: A unique UUID for the question.
    - questionNum: The number of the question (e.g., 1, 2, 3, etc.).
    - questionText: The text of the question.
    - options: An array of objects, each containing:
      - id: A unique UUID for the option.
      - title: The text for the option.
      - optionLetter: The letter representing the option (e.g., "A", "B", "C", "D").
      - isCorrect: A boolean indicating if the option is the correct answer.

  Your output should be in the following format:

  {
    "quizTitle": "The quiz title",
    "quizDescription": "A short but informative description of the quiz topic",
    "quizQuestions": [
      {
        "questionId": "a random UUID",
        "questionNum": "1, 2, 3, etc.",
        "questionText": "A question text",
        "options": [
          {
            "id": "a unique UUID",
            "title": "The text for the option",
            "optionLetter": "A, B, C, D",
            "isCorrect": true or false
          }
        ]
      }
    ]
  }

  Please ensure that the JSON follows these types and includes appropriate quiz questions and answer options.
  If the title has a number in it, such as "{x} lessons I've learnt", generate {x} questions; otherwise, generate a standard of 5 questions.
  Below is the transcript and the video title, based on these create a quiz.
`;
