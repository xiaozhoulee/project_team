'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("home.html")
    }
    async students() {
        await this.ctx.render("students", {
            students: ["小明", "小红", "小亮"]
        })
    }
    async teachers() {
        await this.ctx.render("teachers", {
            teachers: ["张三", "李四", "王五"]
        })
    }
}

module.exports = HomeController;