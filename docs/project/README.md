# 学生管理系统开发流程

### 《学生管理系统开发文档》（不断完善）

1. 功能介绍：例如：班级管理：班级增删改，学生管理：学生增删改，学生成绩管理，设置分数，千分制管理，加分和扣分。学校管理：校区增删改；上传考试题库，上传技术博客等功能，技术问答。
2. 业务流程：例如角色：管理员和普通用户，管理员添加用户，普通用户登录后可以添加学校或学生；只有管理员可以添加学校（或其他功能只有管理员可以操作）
3. 功能补充说明：例如：后台删除的班级不能存在学生，删除的学校不能存在班级，修改学生成绩不能超过100分。前端报错的时候要给与用户正确的错误提示。
4. 完善原型图（设计稿）
5. 前后台数据交互接口文档
   1. {code:0,data:[],message:"success"}
   2. {code:1,data:null,message:"密码错误！"}
   3. 文档示例：http://doc.hoomuu.net/apidoc/knowledge.html
6. 数据库模型图（user:id,username,password;class:id,name;student:id,name,class_id;school）
   
### 技术选型

* 前端vue + vue-router + element-ui + axios
* 后台node + egg + sequelize + mysql

### 工具

* 编辑器：vscode
* 原型图：axure
* 设计稿：photoshop
* 文档统一使用markdown格式
* 制作思维导图：xmind
* 流程图：visio
* 代码管理：github
* 任务管理：teambition，按小组划分，组长创建任务
* 文档：gitbook
* http接口测试：postman

### 每周至少一次工作进度汇报

* 按teambition的任务分配汇报
* 展示项目成果

### 6月13日第一次汇报

1. 任务分配情况
2. 开发文档中的功能描述、业务流程
3. 设计稿
4. 接口文档
5. 数据库模型

虽然不比全部完成，但是要看到工作进度。

### 项目目标

12月底每组完成一个独立的，可以使用的学生管理系统。