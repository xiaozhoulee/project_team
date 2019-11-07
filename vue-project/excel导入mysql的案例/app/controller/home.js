'use strict';
const XLSXtoMYSQL = require('xlsx-mysql');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    var optionsZ = {
      mysql: {
        host: '127.0.0.1',
        user: 'root',
        database: 'eggtest',
        password: '123456',
        port: '3306'
      },
      csv: {
        delimiter: '+'
      }
    }
    var locationZ = __dirname + '/stu.xlsx';
    var waitT = 1000;


    XLSXtoMYSQL(locationZ, optionsZ, waitT);
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
