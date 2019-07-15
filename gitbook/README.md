# gitbook使用方法

### 项目初始化

``` bash
#安装gitbook
npm install -g gitbook-cli
#常见项目:会等待一会
gitbook init
```

### 编辑项目文件

SUMMARY.md  目录文件

``` md
# 目录

* [前言](README.md)
* [第一章](Chapter1/README.md)
  * [第1节：衣](Chapter1/衣.md)
  * [第2节：食](Chapter1/食.md)
  * [第3节：住](Chapter1/住.md)
  * [第4节：行](Chapter1/行.md)
* [第二章](Chapter2/README.md)
* [第三章](Chapter3/README.md)
* [第四章](Chapter4/README.md)
```

### 常用命令

``` bash
gitbook build [书籍路径] [输出路径]
gitbook serve --port 2333
gitbook pdf ./ ./mybook.pdf
```

### 任务

1. 根据内容生成目录
2. 源码资料链接放在首页README.md
3. 每个页面结尾添加公众号二维码
4. 去掉【教学指导】的内容，以学习为主
5. 重写vue相关的内容