'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        await this.ctx.render("login.html")
    }
    async login(){
        const user = this.ctx.request.body;
        if(user.username="admin" && user.password == "123456"){
            this.ctx.session.user = user;
            this.ctx.redirect("/")
        }else{
            this.ctx.body = "用户名或密码错误！"
        }
    }

    async logout(){
        delete this.ctx.session.user  //删除session中的用户，取消用户登录状态
        this.ctx.redirect("/")
    }
}

module.exports = UserController;
