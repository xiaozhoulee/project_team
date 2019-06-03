'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/students', controller.students.index);
  router.delete('/students/:id', controller.students.destroy);
  router.post('/students', controller.students.create);
};
