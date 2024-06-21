import { Router } from 'express';
import UserController from '../controllers/user.js';
import isAuth from '../middlewares/isAuth.js';


export class UserRouter {
  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/get-all', isAuth, this.userController.getAllUsers);
  }

  getRouter() {
    return this.router;
  }
}

export default UserRouter;
