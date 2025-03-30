/** @typedef {import('express').RequestHandler} RequestHandler */

/** @type {RequestHandler} */
export const index = (req, res) => {
  res.render("index");
};

/** @type {RequestHandler} */
export const quiz = (req, res) => {
  res.send("Hello there");
};
