'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
//app/router.js
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index); //get方法，跳转至controller/home.js 文件中的index方法
  router.get('/students', controller.home.students); //get方法，跳转至controller/home.js 文件中的students方法
  router.get('/orders', controller.orders.index); //get方法，跳转至controller/home.js 文件中的students方法
};