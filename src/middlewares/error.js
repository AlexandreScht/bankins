import { logger } from '../utils/logger.js';

export default function ErrorMiddleware(error, req, res, next) {
  try {
    const status = error.status || 500;
    const message = error.message || 'An error occurred. Please try again later.';
    logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
    res.status(status).send({ error: message });
  } catch (error) {
    next(error);
  }
};
