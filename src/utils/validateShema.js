import { emailValidator,stringValidator } from "../libs/validateType.js";

export const LoginValidateSchema = {
  email: emailValidator.required(),
  password: stringValidator.required(),
}