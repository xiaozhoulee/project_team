'use strict';

const Controller = require('egg').Controller;

class StudentsController extends Controller {
    // 联查学生信息
    async index() {
        const studentList = await this.app.model.Students.findAll({
            include:[{  //联查班级的数据
                model:this.app.model.Clazz,
                as:'clazz'
            }]
        });
        await this.ctx.render('student_list.html', {
            studentList: studentList
        })
    }

    //添加学生的页面
    async insertStudent() {
        const clazzList = await this.app.model.Clazz.findAll();
        await this.ctx.render('create_student.html', {
            clazzList
        })
    }

    // 在数据库中添加学生
    async create(){
        const body = this.ctx.request.body;
        const student = {
            name:body.name,
            clazz_id:body.clazz_id
        }
        await this.app.model.Students.create(student);
        this.ctx.redirect("/students")
    }

    // 通过id删除学生信息
    async destroy(){
        const id = this.ctx.request.body.student_id;
        const student = await this.app.model.Students.findOne({
            where:{
                id:id
            }
        });
        student.destroy();
        this.ctx.redirect("/students")
    }
}

module.exports = StudentsController;
