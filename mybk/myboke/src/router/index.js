import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'



import addone from '@/components/child/class/addone'
import addtwo from '@/components/child/class/addtwo'
import classlist from '@/components/child/class/classlist'

import addcontent from '@/components/child/class/addcontent'
import contentlist from '@/components/child/class/contentlist'


// 接口文档
import add_api from '@/components/child/api/api_insert'
import api_list_font from '@/components/child/api/api_list_font'
import api_list_back from '@/components/child/api/api_list_back'
import api_detail from '@/components/child/api/api_detail'
import api_amend from '@/components/child/api/api_amend'

import amend_one_class from '@/components/child/class/amend_one_class'
import amend_two_class from '@/components/child/class/amend_two_class'

import amend_article from '@/components/child/class/amend_article'



Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/index',
            name: 'index',
            component: index,
            children: [{
                path: 'addone',
                name: 'addone',
                component: addone
            }, {
                path: 'addtwo',
                name: 'addtwo',
                component: addtwo
            }, {
                path: 'classlist',
                name: 'classlist',
                component: classlist
            }, {
                path: 'addcontent',
                name: 'addcontent',
                component: addcontent
            }, {
                path: 'contentlist',
                name: 'contentlist',
                component: contentlist
            }, {
                path: 'add_api',
                name: 'add_api',
                component: add_api
            }, {
                path: 'api_list_font',
                name: 'api_list_font',
                component: api_list_font
            }, {
                path: 'api_list_back',
                name: 'api_list_back',
                component: api_list_back
            }, {
                path: 'api_detail',
                name: 'api_detail',
                component: api_detail
            }, {
                path: 'api_amend',
                name: 'api_amend',
                component: api_amend
            }, {
                path: 'amend_one_class',
                name: 'amend_one_class',
                component: amend_one_class
            }, {
                path: 'amend_two_class',
                name: 'amend_two_class',
                component: amend_two_class
            }, {
                path: 'amend_article',
                name: 'amend_article',
                component: amend_article
            }]
        }
    ]
})