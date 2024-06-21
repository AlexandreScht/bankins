import AxiosInstance from "../api/axios.js";
import { loginService } from "./auth.js";
import { getAllUsersService } from "./user.js";

export default function PrepareServices() {
  const axios = AxiosInstance();
  return {
    // * authenticate
    login: loginService({ axios }),
    // * users
    getAllUsers: getAllUsersService({ axios }),
    // * subscribe
  };
};