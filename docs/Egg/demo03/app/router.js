'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/bind', controller.bind.index);
  router.get('/list', controller.list.index);
  router.get('/if', controller.if.index);
  router.get('/students', controller.students.index);
  router.get('/query', controller.query.index);
  router.get('/data', controller.query.query);
  router.get('/body', controller.body.index);
  router.post('/data', controller.body.body);
  router.get('/param', controller.param.index);
  router.get('/param/:id', controller.param.param);
  router.get('/redirect', controller.redirect.index);
  router.post('/login', controller.redirect.login);
  router.get('/fail', controller.redirect.fail);
  router.get('/success', controller.redirect.success);
};
