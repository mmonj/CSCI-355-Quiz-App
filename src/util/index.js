import { readFile } from "node:fs/promises";

/** returns a random number between [min, max] inclusive
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function randNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @param {number} limit
 * @returns {Promise<TQuestion[]>}
 */
export async function getRandomQuestions(limit) {
  const text = await readFile("src/data/questions.json", "utf-8");

  /**@type {TQuestion[]} */
  // @ts-ignore
  const allQuestions = JSON.parse(text).map((question, idx) => {
    return { ...question, id: idx };
  });

  if (limit > allQuestions.length) limit = allQuestions.length;

  const indexes = new Set();
  while (indexes.size != limit) {
    indexes.add(randNum(0, allQuestions.length - 1));
  }

  const questions = allQuestions.filter((_, idx) => indexes.has(idx));

  return questions;
}

/**
 * @returns {Promise<TQuestion[]>}
 */
export async function getAllQuestions() {
  const text = await readFile("src/data/questions.json", "utf-8");
  /**@type {TQuestionOriginal[]} */
  const allQuestions = JSON.parse(text);
  return allQuestions.map((question, idx) => {
    return { ...question, id: idx };
  });
}
