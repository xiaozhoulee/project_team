# MySQL

## 学习任务

1. 安装mysql数据库 ok
2. 开启和关闭mysql服务 ok
3. 配置环境变量 ok
4. 添加、删除、查找数据库
5. 添加、删除、查看、修改表
6. 主键和外键的基本概念
7. 多表联查
8. 安装和配置egg-sequelize
9. 使用sequelize创建数据模型
10. 使用sequelize操作数据
11. 使用sequelize完成用户登录功能
12. 使用sequelize完成学生列表增删改查功能
13. 了解cookie和session
14. 使用中间件判断登录状态
15. 用户登录加密



## 安装数据库

* zip压缩包安装
* 安装包安装

* 下载zip文件
* 解压文件
* 环境变量：MYSQL_HOME:"mysql根目录"
* 生成data文件：mysqld --initialize-insecure --user=mysql
* 安装服务：mysqld -install
* 启动服务： net start mysql
* 链接数据库：mysql -u root -p
* 修改数据库密码：update mysql.user set authentication_string=password("123456") where user="root";
* 退出：quit

## 常用命令



### 创建数据库

``` bash
# 可以不适用反引号
CREATE DATABASE `db_name` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci; 
```

### 命令

1. 显示所有数据库：show databases;
2. 切换数据库：use database_name;
3. 显示数据库所有表:show tables;
4. 删除表：drop table table_name;

### 操作表：添加，删除，修改

### 操作数据：添加、删除、修改

### 条件查询

### 模糊查询

### 关联查询

### 数据备份与恢复

1. 导出数据库：mysqldump -u root -p army > d:/database_dump.txt
2. 导入数据库：mysql -u root -p armytest < d:/database_dump.txt
