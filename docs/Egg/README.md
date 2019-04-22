# Egg

### http协议
1. 浏览器发送请求，服务器响应数据。
2. 常用的请求方法：get（查询）、post（添加）、put（修改）、delete（删除）
3. 在chrome调试工具中查看请求与响应的数据。

### 创建Egg项目
1. 创建egg项目：npm init egg --type=simple
2. 安装项目依赖：npm install
3. 访问项目 

### 使用模板字符串显示html页面
1. 只显示一个标题
2. 绑定数据
``` js
async index() {
 const { ctx } = this;
 let title = "我的网页"
 let msg = "我要学好前端开发"
 ctx.body = `<!DOCTYPE html>
             <html lang="en">
             <head>
                 <meta charset="UTF-8">
                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
                 <meta http-equiv="X-UA-Compatible" content="ie=edge">
                 <title>${title}</title>
             </head>
             <body>
                 <h1>${msg}</h1>
             </body>
             </html>`;
}
```

### 使用模板显示页面
1. 下载模板：npm install --save egg-view-nunjucks
2. 配置插件
``` js
//plugin
nunjucks: {
 enable: true,
 package: 'egg-view-nunjucks',
}
//config
config.view = {
 defaultViewEngine:'nunjucks'
}
```
3. 在app中创建view目录
4. 编写html文件
5. 渲染页面：await this.ctx.render('index')
6. [文档地址](https://nunjucks.bootcss.com/templating.html)

### 模板语法
1. 绑定数据
2. 循环
3. 分支
4. 模板继承
5. 引入js文件和css文件

### 使用模板完成保险箱的项目

