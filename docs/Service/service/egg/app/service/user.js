const Service = require('egg').Service;

class UserService extends Service {
  async getclazz() {
    const user = {id:1,name:"小明"};
    return { user };
  }
}

module.exports = UserService;