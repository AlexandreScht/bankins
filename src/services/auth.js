import axios from 'axios';
import config from '../config/index.js';
import { InvalidCredentialsError } from '../exceptions/index.js';
export default class AuthService {
  async loginService(credentials) {
    try {
      const { email, password } = credentials;
      const { data: {access_token} } = await axios.post(`${config.API_URL}/authenticate`,
        {
          email,
          password
        },
        {
          headers: {
            'bankin-version': config.API_CREDENTIALS.BANKIN_VERSION,
            'bankin-device': config.API_CREDENTIALS.BANKIN_DEVICE
          }
        });
      return access_token;
    } catch (error) {
      console.log(error);
      throw new InvalidCredentialsError();
    }
  }
}
