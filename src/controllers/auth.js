import AuthService from '../services/auth.js';

export default class AuthController {
  constructor() {
    this.authService = new AuthService();
    this.login = this.login.bind(this);
  }

  async login(req, res, next) {
    try {
      const { body: credentials } = req;
      const token = await this.authService.loginService(credentials);
      res.cookie('access_token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
      res.send({ success: true });
    } catch (error) {
      next(error);
    }
  }
}
