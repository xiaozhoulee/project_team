const Controller = require('egg').Controller;

class ListContrller extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("list.html",{
            fruits:["香蕉","苹果","鸭梨"],
            sports:[] //空数组
        })
    }
}

module.exports = ListContrller;
