import axios from 'axios';
import config from '../config/index.js';
import { ServerException } from '../exceptions/index.js';

export default class UserService {
  async getAllUsersService(token) {
   try {
      const {data: { resources }} = await axios.get(`${config.API_URL}/accounts`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
      return { resources };
   } catch (error) {
     console.log(error);
      throw new ServerException();
    }
  }
}
