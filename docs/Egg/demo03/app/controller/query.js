const Controller = require('egg').Controller;

class QueryController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("query.html")
    }

    async query(){
        const username = this.ctx.request.query.username;
        const password = this.ctx.request.query.password;
        await this.ctx.render("query_page.html",{
            username:username,
            password:password
        })
    }
}

module.exports = QueryController;
