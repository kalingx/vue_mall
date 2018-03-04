// 路由配置
import Vue from 'vue'
import VueRouter from 'vue-router' // 这是基于vue的一个插件

import Login from '../component/login/Login.vue'
import Register from '../component/register/Register.vue'

//vue-router 插件启用
Vue.use(VueRouter)

// 导出路由实例 (ES6导出语法)
export default new VueRouter({
    routes: [
        { name: 'login', path: '/login', component: Login },
        { name: 'register', path: '/register', component: Register }
    ]
})