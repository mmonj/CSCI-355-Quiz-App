import { getAllQuestions, getRandomQuestions } from "../util/index.js";

/** @type {RequestHandler} */
export const index = (_req, res) => {
  res.render("index");
};

/** @type {AsyncRequestHandler} */
export const quiz = async (req, res) => {
  const numQuestions = /**@type {string} */ (req.query["num-questions"]);
  const questions = await getRandomQuestions(Number.parseInt(numQuestions));

  res.render("quiz", { questions });
};

/**@type {AsyncRequestHandler} */
export const quizResult = async (req, res) => {
  /**@type {Record<string, string>} */
  const questionIdToAnswer = req.body.quiz;
  const originalQuestions = await getAllQuestions();

  /**@type {TQuestionResult[]} */
  let questionResults = [];
  let numQuestionsCorrect = 0;

  Object.entries(questionIdToAnswer).forEach(([questionId, answerGiven]) => {
    const originalQuestion = originalQuestions[Number.parseInt(questionId)];
    const isAnswerCorrect = originalQuestion.answer === answerGiven;
    if (isAnswerCorrect) {
      numQuestionsCorrect += 1;
    }

    questionResults.push({
      ...originalQuestion,
      answerGiven: answerGiven,
      isCorrect: isAnswerCorrect,
    });
  });

  res.render("quizResult", {
    questionResults,
    numQuestionsCorrect,
    percentageScore: ((numQuestionsCorrect * 100) / questionResults.length).toFixed(2),
  });
};
