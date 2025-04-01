/** 
 * @typedef {{
 * question: string;
 * A: string;
 * B: string;
 * C: string;
 * D: string;
 * answer: string;
}} TQuestionOriginal */

/** 
 * @typedef {{
 * id: number;
 * question: string;
 * A: string;
 * B: string;
 * C: string;
 * D: string;
 * answer: string;
}} TQuestion */

/** 
 * @typedef {{
* question: string;
* A: string;
* B: string;
* C: string;
* D: string;
* answer: string;
* answerGiven: string;
* isCorrect: boolean;
}} TQuestionResult */

/**
 * @callback RequestHandler
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns {any}
 */

/**
 * @callback AsyncRequestHandler
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns {Promise<any>}
 */
