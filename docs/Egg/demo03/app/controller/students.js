const Controller = require('egg').Controller;

class StudentsController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("students.html",{
            studentsData:[
                {name:"小明",age:10},
                {name:"小亮",age:12},
                {name:"小红",age:31},
                {name:"小蓝",age:14},
                {name:"小绿",age:25},
            ]
        })
    }
}

module.exports = StudentsController;
