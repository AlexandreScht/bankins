import { AxiosError } from "axios";
import routes from "../routes/index.js";

export const getAllUsersService =
  ({ axios }) =>
  async () => {
    try {
      const data = await axios.get(routes.api.allUsers());

      return [null, data];
    } catch (err) {
      const error = (err instanceof AxiosError ? err.response?.data?.error : err.message) ?? "Une erreur s'est produite";
      return Array.isArray(error) ? error : [error];
    }
  };