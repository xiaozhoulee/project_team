# egg路由

### 路由文件 

``` js
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index); 
  router.get('/students', controller.home.students); 
  router.get('/orders', controller.orders.index); 
};
```

### 路由文件注释

``` js
//app/router.js
module.exports = app => {
  const { router, controller } = app;
  //访问http://127.0.0.1:7001
  router.get('/', controller.home.index); //get方法，跳转至controller/home.js 文件中的index方法
  //访问http://127.0.0.1:7001/students
  router.get('/students', controller.home.index); //get方法，跳转至controller/home.js 文件中的students方法
  //访问http://127.0.0.1:7001/orders
  router.get('/orders', controller.order.index); //get方法，跳转至controller/home.js 文件中的students方法
};

```
