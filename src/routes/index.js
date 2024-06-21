import { Router } from 'express';
import { AuthRouter } from './auth.js';
import { UserRouter } from './user.js';

export default class ApiRouter {
  constructor() {
    this.router = Router();
  }

  initializeRoutes() {
    this.router.use('/auth', new AuthRouter().getRouter());
    this.router.use('/user', new UserRouter().getRouter());
  }
}
