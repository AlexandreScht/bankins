import UserService from '../services/user.js';

export default class UserController {
  constructor() {
    this.userService = new UserService();
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  async getAllUsers(req, res, next) {
    try {
      const { token } = req;
      const { resources } = await this.userService.getAllUsersService(token);
      const totalBalance = resources.reduce((sum, account) => sum + account.balance, 0);
      const rounded_sum = Math.ceil(totalBalance / 100) * 100;
      const filteredResources = resources.map(resource => ({ name: resource.name, balance: resource.balance }))
      res.send({ rounded_sum, accounts: filteredResources });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
