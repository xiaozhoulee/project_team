'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/students',controller.students.index);
  router.get('/insertstudent',controller.students.insertStudent);
  router.post('/students',controller.students.create);
  router.post('/deletestudent',controller.students.destroy);
  
  router.get('/clazz',controller.clazz.index);
  router.get('/insertclazz',controller.clazz.insertClazz);
  router.post('/clazz', controller.clazz.create);
  router.post('/deleteclazz', controller.clazz.destroy);
};
