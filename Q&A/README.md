1. 编写一个函数，计算1至参数m之间（包括m）所有正整数加和，示例代码如下所示
``` js
function count(m){
    //实现功能
}

var result = count(5);
console.log(result);  //输出1+2+3+4+5的结果
```

2. 编写一个函数，实现两个数字的四则运算，第一个参数m是第一个数字，第二个参数o是操作符，第三个数n是第二个数字，示例代码如下所示
``` js
function count(m,s,n){
    //实现功能
}

var result = count(5,"+",6);
console.log(result);  //输出11
var result = count(5,"*",6);
console.log(result);  //输出30
```

3. 编写一个函数，计算1至参数m之间（包括m）所有奇数加和，示例代码如下所示
``` js
function count(m){
    //实现功能
}

var result = count(10);
console.log(result);  //输出1+3+5+7+9的结果
```

4. 图片切换效果:点击数字列表的时候，上面的图片切换成不同的图片

![img](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCADcAYcDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKA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)

<style>
    .item{
        float:left;
        list-style:none;
        width:30px;
        height:30px;
        border:1px solid red;
        line-height:30px;
        text-align:center;
    } 
    .del{
        color:red;
    }
</style>
<ul class="list">
    <li class="item">1</li>
    <li class="item">2</li>
    <li class="item">3</li>
    <li class="item">4</li>
    <li class="item">5</li>
</ul>
<div style="clear:both"></div>
<br>
5. 实现水果列表的添加添加和删除功能

<div>
<input placeholder="添加水果名字">
<button>添加</button>
</div>
<ul>
    <li>香蕉 <span class="del">删除</span></li>
    <li>苹果 <span class="del">删除</span></li>
    <li>鸭梨 <span class="del">删除</span></li>
</ul>

6. 数组[5,10,6,11,18,22,31,52,19]，找到里面所有的偶数，并将其组成一个新的数组。
7. 在网页中显示当前时间
8. 在网页中实现一个倒计时功能，显示距离目标时间（2019年6月6日）还有天，多少小时，多少分钟，多少秒
9. 编写一个函数，随机获取1-7七个数字的任意一个。
10. 实现一个表单邮箱验证功能，此表单如果填写错误的邮箱格式会有提示。
11. 去掉数组中的重复元素[5,10,6,11,18,22,11,31,6,52,19]
12. 将数组连接成字符串["This","is","JavaScript","and","jQuery"];
13. 将字符串拆分成数组"This is JavaScript and jQuery";
14. 实现一个学员随机点名的功能
15. 使用冒泡排序升序排列此数组[5,50,6,11,18,62,31,52,19]
16. 实现一个计数器，点击左右的加减号会改变中间的数字。
<button>+</button> 99 <button>-</button>

17. 使用vue.js实现一个列表的添加和删除功能（效果与之前做的列表添加删除功能相同）
18. 使用vue.js实现一个图片切换效果（效果与之前的图片效果相同）
19. 使用vue.js在网页中显示当前时间
20. 使用vue.js实现一个倒计时的功能
21. 使用vue.js实现一个学院随机点名的功能
22. 使用vue.js实现一个学生列表功能：字段【姓名】【性别】【年龄】【成绩】，可以添加和删除，可以修改成绩。（使用bootstrap的UI样式）

