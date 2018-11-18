import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], ()=> r(require('@/pages/login')), 'login');
const manage = r => require.ensure([], ()=> r(require('@/pages/manage')), 'manage');
const home = r => require.ensure([], ()=> r(require('@/pages/home')), 'home');
const userList = r => require.ensure([], ()=> r(require('@/pages/user/list')), 'userList')
const merchantList = r => require.ensure([], ()=> r(require('@/pages/merchant/list')), 'merchantList')

const routes = [
  {
    path: '/',
    component: login
  },
  {
    path: '/manage',
    component: manage,
    name: '',
    children: [
      {
        path: '',
        component: home,
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
