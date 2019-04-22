# 渲染模板

### 安装模板依赖

npm install --save egg-view-nunjucks

### 配置插件

修改文件config/plugin.js

``` js
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  }
};
```

修改文件config/config.default.js

``` js
//添加下面的选项
config.view = {
defaultViewEngine: 'nunjucks'
}

```

### 创建模板目录

在app目录下创建view文件夹，并创建一个index.html文件

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>我是一个模板</h1>
</body>
</html>
```

### 修改controller/home文件

``` js
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("index.html")  //渲染view中的index.html页面
  }
}

module.exports = HomeController;
```

### 访问首页可以看到模板内容
