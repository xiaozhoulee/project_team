# sequelize

## 学习任务

1. 安装和配置egg-sequelize
2. 在controller中使用sequelize创建班级表
3. 在controller中使用sequelize创建学生表
4. 在页面中查询班级数据
5. 在页面中查询学生数据，联查所在班级
6. 创建用户表，完成登录验证
7. 了解cookie和session
8. 使用中间件判断登录状态

## sequelize文档

[中文文档](https://github.com/demopark/sequelize-docs-Zh-CN)

### 安装egg-sequelize

``` bash
# 下载依赖，安装egg-sequelize和mysql2
npm install --save egg-sequelize mysql2
```

### 在egg项目中配置egg-sequelize

``` js
// config/plugin.js
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize'
}
```

``` js
// config/config.default.js
  config.sequelize = {
    dialect: 'mysql', 
    database: 'army',  //数据库名
    host: 'localhost',
    port: '3306',
    username: 'root',  //用户名
    password: '',      //密码
    operatorsAliases: false,
  }
```

``` js
// 根目录 app.js
module.exports = app => {
    app.beforeStart(async function () {
        // await app.model.sync({ force: true }); // 开发环境使用，会删除数据表
        await app.model.sync({});
    });
};
```

### 编写数据模型

``` js
// app/model/clazz.js
module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Clazz = app.model.define('clazz', {  //sequelize会自动创建主键
        name: STRING,
    })

    return Clazz;
}
```

``` js
// app/model/students.js
module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Students = app.model.define('students', {
        name: STRING,
    })

    Students.associate = function () {
        app.model.Students.belongsTo(app.model.Clazz, {  //设置外键
            foreignKey: 'clazz_id',
            as: 'clazz'
        })
    }

    return Students;
}
```

### controller获取数据
``` js
// app/controller/clazz.js
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

```
``` js
// app/controller/students.js
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

```

### 设置session

``` js
if(user.username="admin" && user.password == "123456"){
   this.ctx.session.user = user;  //设置session
   this.ctx.redirect("/")
}else{
   this.ctx.body = "用户名或密码错误！"
}
```

### 清除session

``` js
delete this.ctx.session.user  //删除session中的用户，取消用户登录状态
```

### 中间件

``` js
// app/middleware/checklogin.js
module.exports = () => {
    return async function (ctx, next) {
        if (ctx.session.user) { //如果session.user有用户信息，继续访问，如果没有，跳转至登录页
            await next();
        } else {
            await ctx.redirect("/login")
        }
    }
}
```

### 使用中间件拦截路由

``` js
// app/router.js
module.exports = app => {
  const { router, controller } = app;
  //需要登录的页面，路由添加中间件拦截，如果未登录，中间件会跳转至登录页。
  router.get('/', app.middleware.checklogin() ,controller.home.index); 
  router.get('/login', controller.user.index);
  router.post('/login', controller.user.login);
  router.post('/logout', app.middleware.checklogin(), controller.user.logout);
};

```