<template>
    <div class="index">
       <div class="message">
           <div class="top">
               <div class="img">
                   <img src="../../static/images/zj.jpg" alt="">
               </div>
                <div class="msg">
                    <h2>赵静的个人网站</h2>
                    <p>
                         Zhao Jing's Personal Website
                    </p>
                    <p>
                        好困.好困.好困.好困.好困.好困
                    </p>
                </div>
           </div>
            <div class="bot">
               <button @click='fn'>点击进入</button>
            </div>
       </div>
    </div>
</template>
<script>
    export default {
        name: "index",
        data() {
            return {
                fenleilist: [],
                articlelist: [],
            }
        },
        created() {
            this.axios.get('/api/front_article/getNav').then(function(data) {
                this.fenleilist = data.data.data;
            }.bind(this))
            this.axios.get('/api/front_article/getArticleAll').then(function(data) {
                this.articlelist = data.data.data
            }.bind(this))
        },
        methods: {
            fn() {
                var that = this;
                this.$router.push({
                    path: "/main",
                    params: {
                        fenleilist: that.$data.fenleilist,
                        articlelist: that.$data.articlelist
                    }
                })
            }
        }
    }
</script>
<style>
    .index {
        width: 100%;
        height: 100%;
        margin: 0px auto;
        position: relative;
        padding-top: 35px;
        box-sizing: border-box;
        background: url('../../static/images/ban.jpg') no-repeat;
        background-size: 100% 100%;
    }
    
    .message {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 500px;
        height: 300px;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 20px;
        color: #fff;
        padding: 20px;
        box-sizing: border-box;
    }
    
    .message .top {
        width: 100%;
        height: 70%;
        display: -webkit-flex;
    }
    
    .message .top .img {
        -webkit-flex: 1;
    }
    
    .msg {
        -webkit-flex: 2;
        padding-left: 20px;
        line-height: 40px;
        box-sizing: border-box;
    }
    
    .msg h2 {
        font-size: 26px;
        line-height: 100px;
        font-weight: 100;
    }
    
    .msg p {
        font-size: 18px;
    }
    
    img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }
    
    .bot {
        width: 100%;
        height: 30%;
        padding-top: 20px;
        box-sizing: border-box;
    }
    
    .bot button {
        width: 100%;
        height: 100%;
        border: none;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 10px;
        font-size: 22px;
    }
</style>