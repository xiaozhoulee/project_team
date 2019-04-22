const Controller = require('egg').Controller;

class ParamController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("param.html")
    }

    async param(){
        const id = this.ctx.params.id;
        await this.ctx.render("param_page.html",{id:id})
    }
}

module.exports = ParamController;
