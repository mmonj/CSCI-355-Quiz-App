/** @typedef {import('express').RequestHandler} RequestHandler */

import { getQuestions } from "../util/index.js";

/** @type {RequestHandler} */
export const index = (req, res) => {
  res.render("index");
};

/** @type {AsyncRequestHandler} */
export const quiz = async (req, res) => {
  const questions = await getQuestions(10);

  res.render("quiz", { questions });
};
