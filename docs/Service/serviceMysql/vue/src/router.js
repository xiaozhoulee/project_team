import Vue from 'vue'
import Router from 'vue-router'
import Clazz from './views/Clazz.vue'
import Student from './views/Student.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'clazz',
      component: Clazz
    },
    {
      path: '/student',
      name: 'student',
      component: Student
    },
  ]
})
