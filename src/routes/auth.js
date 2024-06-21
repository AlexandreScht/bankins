import { Router } from 'express';
import AuthController from '../controllers/auth.js';
import validator from '../middlewares/validator.js';
import { LoginValidateSchema } from '../utils/validateShema.js';

export class AuthRouter {
  constructor() {
    this.router = Router();
    this.authController = new AuthController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post('/login', validator({ body: LoginValidateSchema }), this.authController.login);
  }

  getRouter() {
    return this.router;
  }
}

export default AuthRouter;
