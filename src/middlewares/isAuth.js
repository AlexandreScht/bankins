import { InvalidAccessError } from "../exceptions/index.js";

export default function isAuth(req, res, next) {
  const {access_token} = req.cookies;
  if (!access_token) {
    throw new InvalidAccessError();
  }
 req.token = access_token;
  next();
}
