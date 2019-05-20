# MySQL

## 学习任务

1. 安装数据库
1. 创建数据库
2. 创建班级表：主键id
3. 创建学生表：外键clazz_id
4. 添加班级，查询班级，修改班级，删除班级
5. 添加学生，查询班级，修改学生，删除学生
6. 班级与学生联查

### 安装数据库
* 下载zip文件
* 解压文件
* 环境变量：MYSQL_HOME:"mysql根目录"
* 生成data文件：mysqld --initialize-insecure --user=mysql
* 安装服务：mysqld -install
* 启动服务： net start mysql
* 链接数据库：mysql -u root -p
* 修改数据库密码：update mysql.user set authentication_string=password("123456") where user="root";
* 退出：quit

### 创建数据库

``` bash
# 可以不适用反引号
CREATE DATABASE db_name DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci; 
```

### 创建班级表

``` bash
# 创建一个有自增主键的表
create table clazz (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    PRIMARY KEY (id)
);

# 创建一个有组件和外键的表
create table students (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    clazz_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (clazz_id) REFERENCES clazz(id)
);
```

### 添加表数据

``` bash
# 添加班级
insert into clazz (name) values ("计算机1班");
insert into clazz (name) values ("计算机2班");
# 添加学生
insert into students (name,clazz_id) values ("小明",1);
insert into students (name,clazz_id) values ("小强",1);
insert into students (name,clazz_id) values ("小亮",2);
insert into students (name,clazz_id) values ("小张",2);
insert into students (name,clazz_id) values ("小王",2);
```

### 数据联查
* inner join:只返回有匹配的行数
* left join:左表返回所有行，右边返回匹配行
* right join:右表返回所有航，左边返回匹配行

``` bash
# 联查所有班级和学生
select * from students left join clazz on students.clazz_id = clazz.id;
```

### 修改数据
``` bash
# 修改数据
update clazz set name = "test" where id = 3;
```

### 删除数据

``` bash
# 删除数据
delete from clazz where id = 3;
```

### 其他常用命令

``` bash
# 显示所有数据库：
show databases;
# 切换数据库：
use database_name;
# 显示数据库所有表:
show tables;
# 删除表：
drop table table_name;
```


### 数据备份与恢复

``` bash
# 导出数据库：
mysqldump -u root -p army > d:/database_dump.txt
# 导入数据库：
mysql -u root -p armytest < d:/database_dump.txt
```

