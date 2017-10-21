import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import main from '@/components/main'
import detail from '@/components/page/detail'
import error from '@/components/error'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: index
        }, {
            path: '/main',
            name: 'main',
            component: main
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail
        }, {
            path: '/error',
            name: 'error',
            component: error
        }
    ]
})