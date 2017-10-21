<template>
    <div class="wrap" >
         <div class="header">
            <h1>赵静的个人博客</h1>
            <ul class="right">
                 <li><router-link to='/'>首页</router-link></li>
                <li v-for='item in fenleilist'>
                    <router-link to='/'>{{ item.cnname}}</router-link>
                </li>
                <li><router-link to='/'>留言板</router-link></li> 
            </ul>
        </div>
        <div class="section">        
             <div class="main">
                <div class="left">
                   <h3>{{list.article_name}}</h3>
                   <p><span>{{list.editer}}</span><span>{{list.time}}</span><span>{{list.LIST}}</span></p>
                   <div class="content" v-html='list.content'>
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
                            <li v-for='item in articlelist'><router-link to='/'>{{item.article_name}}</router-link></li>
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
                fenleilist: [],
                articlelist: [],
                list: []
            }
        },
        created() {
            this.axios.get('/api/back_class/select_one_class').then(function(data) {
                this.fenleilist = data.data.data;
            }.bind(this))
            this.axios.get('/api/back_article/getArticle').then(function(data) {
                this.articlelist = data.data.data
            }.bind(this))
            this.list = this.$route.params
        },
        methods: {}
    }
</script>
<style scoped>
    .content {
        line-height: 20px;
        color: #fff;
    }
    
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
    
    .main .left h3 {
        line-height: 50px;
        font-size: 20px;
        text-align: center;
    }
    
    .left p span {
        margin-right: 20px;
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
</style>