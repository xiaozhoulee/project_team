'use strict';
  
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.clazz.index); 
  router.get('/getclazz', controller.clazz.get); 
};