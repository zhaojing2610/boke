<template>
    <div class="wrap" >
         <div class="header">
            <h1>赵静的个人博客</h1>
            <ul class="right">
                 <li><router-link to='/'>首页</router-link></li>
                <li v-for='item in fenleilist'>
                    <router-link to='/'>{{item.onedata.cnname}}</router-link>
                </li>
                <li><router-link to='/'>留言板</router-link></li> 
            </ul>
        </div>
        <div class="section">        
             <div class="main">
                <div class="left">
                    <div class="article1" v-for='key in articlelist'>
                        <h3>{{key.article_name}} <a @click='allarticle(key)'>阅读全文>>></a></h3>
                        <p>
                            <span>作者：{{key.editer}}</span>
                            <span>时间：{{key.time}}</span>
                            <span>类型：{{key.LIST}}</span>
                        </p>
                        <div>
                            文章导读：<p>
                                {{key.daodu}}
                            </p>
                        </div>
                    </div>
                    <div class="bot">
                        
                    </div>
                </div>
                <div class="right">
                    <div class="list">
                        <h3>文章推荐</h3>
                        <ul>
                            <li v-for='item in articlelist' v-if='item.recommend'><router-link to='/'>{{item.article_name}}</router-link></li>
                        </ul>
                    </div>
                    <div class="list">
                        <h3>文章列表</h3>
                        <ul>
                            <li v-for='item in articlelist' v-if='item.art_show'><router-link to='/'>{{item.article_name}}</router-link></li>
                        </ul>
                    </div>
                    <div class="list">
                        <h3>友情链接</h3>
                        <ul>
                            <li><a href='https://weibo.com/'>个人微博</a></li>
                            <li><a href="">个人简介</a></li>
                            <li><a href="https://github.com/zhaojing2610">github</a></li>
                            <li><a href="http://www.lianpula.net/">facebook</a></li>
                        </ul>
                    </div>
                </div> 
            </div> 
        </div> 
    </div>
</template>
<script>
    export default {
        name: "wrap",
        data() {
            return {
                currentPage1: 5,
                fenleilist: [],
                articlelist: [],
            }
        },
        created() {
            console.log(this.$route.params)
                // this.axios.get('/api/front_article/getNav').then(function(data) {
                //     this.fenleilist = data.data.data;
                // }.bind(this))
                // this.axios.get('/api/front_article/getArticleAll').then(function(data) {
                //     this.articlelist = data.data.data
                // }.bind(this))
        },
        methods: {
            allarticle(data) {
                this.$router.push({
                    name: "detail",
                    params: data
                })
            }
        }
    }
</script>
<style scoped>
    a {
        color: #fff;
    }
    
    .wrap {
        width: 100%;
        height: 100%;
        position: relative;
        color: #fff;
        margin: 0 auto;
        display: -webkit-flex;
        flex-direction: column;
    }
    
    .header {
        height: 80px;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: -webkit-flex;
        line-height: 80px;
        padding: 0 50px;
        box-sizing: border-box;
    }
    
    .header a {
        font-size: 16px;
    }
    
    .header a:hover {
        color: #f00;
    }
    
    .header h1,
    .header ul {
        -webkit-flex: 1;
    }
    
    .header ul {
        display: -webkit-flex;
    }
    
    .header ul li {
        padding: 0 15px;
        margin-right: 10px;
        line-height: 80px;
    }
    
    .section {
        -webkit-flex: 1;
        overflow-y: auto;
        background: rgba(0, 0, 0, 0.8);
        padding: 0 20px;
        box-sizing: border-box;
    }
    
    .main {
        width: 100%;
        margin: 0 auto;
        display: -webkit-flex;
        padding-top: 10px;
        box-sizing: border-box;
    }
    
    .main .left {
        -webkit-flex: 2;
        margin-right: 10px;
        padding: 10px;
        box-sizing: border-box;
    }
    
    .main .right {
        -webkit-flex: 1;
        padding: 10px;
        box-sizing: border-box;
    }
    
    .main .right .list {
        width: 98%;
        height: auto;
        border: 3px solid #ccc;
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 10px;
    }
    
    .main .right .list h3 {
        font-size: 20px;
        text-align: center;
        width: 100%;
        line-height: 40px;
        background: #3d434f;
    }
    
    .main .right .list ul li {
        line-height: 35px;
        text-indent: 24px;
    }
    
    .article1 {
        width: 100%;
        height: 150px;
        border: 3px solid #fff;
        border-radius: 8px;
        margin-bottom: 20px;
    }
    
    .article1 h3 {
        width: 100%;
        text-align: center;
        line-height: 45px;
        font-size: 20px;
    }
    
    .article1 h3 a {
        font-size: 14px;
        float: right;
        margin-right: 20px;
    }
    
    .article1 p {
        width: 100%;
        padding-left: 20px;
        box-sizing: border-box;
    }
    
    .article1 p span {
        margin-right: 20px;
    }
    
    .article1 div {
        padding: 10px 20px;
        box-sizing: border-box;
        font-size: 16px;
    }
    
    .article1 div p {
        padding: 0;
        text-indent: 24px;
        font-size: 14px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
</style>