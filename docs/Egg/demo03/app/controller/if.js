const Controller = require('egg').Controller;

class IfController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("if.html",{
            user:{
                isLogin:true,  //改成false,则页面显示请登录
                name:"小明"
            }
        })
    }
}

module.exports = IfController;
