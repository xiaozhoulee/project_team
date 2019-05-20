'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', app.middleware.checklogin() ,controller.home.index);
  router.get('/login', controller.user.index);
  router.post('/login', controller.user.login);
  router.post('/logout', app.middleware.checklogin(), controller.user.logout);
};
