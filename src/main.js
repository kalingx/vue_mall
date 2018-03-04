import Vue from 'vue'

import App from './component/App.vue'

import vueRouter from './router'  // 自动导入该目录下的index.js

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import 'normalize.css'

//不是vue插件,导入之后只能在当前模块使用
import axios from 'axios'
import api, { domain } from './js/api.js'

//配置默认域名,这样请求就不用在url里加域名了
axios.defaults.baseURL = domain;

//因为我们调用的借口跨域了,默认情况下后台给我们设置的cookie无效,为了让它有效,我们必须添加此配置
axios.defaults.withCredentials = true;

//如果想所有模块都可以用,可以在vue的原型上添加,将来vue组件可以直接使用,原型的方法...通常命名为$..
Vue.peototype.$http = axios;
Vue.prototype.$api = api;


 


new Vue({
    el: '#app',
    // 下面使用的箭头函数也是es6语法
    render: createElement => createElement(App),
    router: vueRouter
})