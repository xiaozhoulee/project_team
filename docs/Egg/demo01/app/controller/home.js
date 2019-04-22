'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async students() {
    this.ctx.body = "hi, students"
  }
}

module.exports = HomeController;
