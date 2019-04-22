const Controller = require('egg').Controller;

class BindController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("bind.html",{
            title:"我的网页",
            name:"小明"
        })
    }
}

module.exports = BindController;
