// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.min.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor/ueditor.parse.min.js'

import axios from "axios"
import VueAxios from "vue-axios"
Vue.use(VueAxios, axios);

import Vuex from "vuex"
Vue.use(Vuex);



import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)

Vue.config.productionTip = false

router.beforeEach(function(to, from, next) {
    console.log()
    if (to.name == "login") {
        next()
    } else {
        if (sessionStorage.getItem("userId")) {
            next()
        } else {
            next(false)
        }
    }

})


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})