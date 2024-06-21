import * as yup from 'yup';
import { InvalidArgumentError,ServerException } from '../exceptions/index.js';

export default function validator({ body, params, query }) {
  const schema = yup.object().shape({
    ...(body ? { body: yup.object().shape(body) } : {}),
    ...(query ? { query: yup.object().shape(query) } : {}),
    ...(params ? { params: yup.object().shape(params) } : {}),
  });

  return async (req, res, next) => {
    try {
      const validatedData = await schema.validate(
        {
          body: req.body,
          params: req.params,
          query: req.query,
        },
        { abortEarly: false },
      );

      req.locals = {
        body: validatedData.body,
        params: validatedData.params,
        query: validatedData.query,
      };
      next();
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        next(new InvalidArgumentError(err.errors));
      } else {
        next(new ServerException());
      }
    }
  };
}
