'use strict';

const Controller = require('egg').Controller;

class ClazzController extends Controller {
    //查询班级列表
    async index() {  
        const clazzList = await this.app.model.Clazz.findAll();
        await this.ctx.render('clazz_list', {
            clazzList: clazzList
        })
    }

    //添加班级的页面
    async insertClazz(){  
        await this.ctx.render('create_clazz.html')
    }

    //在数据库中添加班级
    async create() {
        const body = this.ctx.request.body;
        const clazz = {
            name:body.name
        }
        await this.app.model.Clazz.create(clazz);
        this.ctx.redirect("/clazz")
    }

    //通过id在数据库中删除班级
    async destroy() {
        const id = this.ctx.request.body.clazz_id;
        const student = await this.app.model.Clazz.findOne({
            where: {
                id: id
            }
        });
        student.destroy();
        this.ctx.redirect("/clazz")
    }
}

module.exports = ClazzController;
