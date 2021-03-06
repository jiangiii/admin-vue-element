import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const login = r => require.ensure([], ()=> r(require('@/pages/login')), 'login');
const home = r => require.ensure([], ()=> r(require('@/pages/home/main')), 'home');
const index = r => require.ensure([], ()=> r(require('@/pages/home/index')), 'index');
const userList = r => require.ensure([], ()=> r(require('@/pages/user/list')), 'userList')
const merchantList = r => require.ensure([], ()=> r(require('@/pages/merchant/list')), 'merchantList')

const routes = [
  {
    path: '/',
    component: login
  },
  {
    path: '/home',
    component: home,
    name: '',
    beforeEnter: (to, from, next) => {
      if (store.state.user) {
        next()
      } else {
        next({path: '/'})
      }
    },
    children: [
      {
        path: '',
        component: index,
        meta: []
      },
      {
        path: '/userList',
        component: userList,
        meta: ['数据管理', '用户列表']
      },
      {
        path: '/merchantList',
        component: merchantList,
        meta: ['数据管理', '商家列表']
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  routes
})
