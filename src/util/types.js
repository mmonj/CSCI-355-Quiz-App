/** @typedef {{
 * id: number;
 * question: string;
 * A: string;
 * B: string;
 * C: string;
 * D: string;
 * answer: string;
}} TQuestion */

/**
 * @callback AsyncRequestHandler
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns {Promise<any>}
 */
