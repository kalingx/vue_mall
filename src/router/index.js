// 路由配置
import Vue from 'vue'
import VueRouter from 'vue-router' // 这是基于vue的一个插件

import Login from '../component/login/Login.vue'
import Admin from '../component/admin/Admin.vue'

import Shopcart from '../component/admin/shopcart/Shopcart.vue'

//vue-router 插件启用
Vue.use(VueRouter)

//购物车页面路由配置(子路由)
const shopcart = [
    {name: 'shopcart',path: 'shopcart',component: Admin}
]

// 导出路由实例 (ES6导出语法)
export default new VueRouter({
    routes: [
        //登录
        { name: 'login',path:'/login',component:Login},
        //后台管理
        { name: 'amdin',path:'/admin',component: Admin,children: [...shopcart]}
    ]
})