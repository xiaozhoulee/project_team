'use strict';

const Controller = require('egg').Controller;

let list = ["小明","小红","小亮"]

class StudentsController extends Controller {
    async index() {
        console.log(list);
        this.ctx.body = list
    }
    async create(){
        let name = this.ctx.request.body.name;
        list.push(name);
        this.ctx.body = list;
    }
    async destroy(){
        let id = this.ctx.params.id;
        list.splice(id,1); //删除数据
        this.ctx.body = list;
    }
}

module.exports = StudentsController;
