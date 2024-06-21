import { AxiosError } from "axios";
import routes from "../routes/index.js";

export const loginService =
  ({ axios }) =>
  async (values) => {
    try {
      const data = await axios.post(routes.api.login(), values);

      return [null, data];
    } catch (err) {
      const error = (err instanceof AxiosError ? err.response?.data?.error : err.message) ?? "Une erreur s'est produite";
      return Array.isArray(error) ? error : [error];
    }
  };