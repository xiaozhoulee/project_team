'use strict';

const Controller = require('egg').Controller;

class ClazzController extends Controller {
    //查询班级列表
    async index() {  
        this.ctx.body = "hi,egg"
    }
        async get() {
            const clazzList = await this.ctx.service.user.getclazz();
            this.ctx.body = clazzList;    
          }
}

module.exports = ClazzController;
