<template>
    <div class="index">
        <header>
            <div class="log">
                <h2>个人博客</h2>
            </div>
            <div class="welcome">
                当前登录账户：{{username}}
                <el-button :plain="true" class="goout" @click='goOut'>退出</el-button>
            </div>
        </header>
        <main class="main">
            <pageleft class="pageLeft"></pageleft>
            <div class="pageright">
                  <router-view ></router-view> 
            </div>
        </main>
    </div>
</template>

<script>
    import pageleft from "./child/pageleft"
    export default {
        name: 'index',
        data() {
            return {
                username: "",
            }
        },
        methods: {
            goOut() {
                alert(1);
            }
        },
        components: {
            pageleft,
        },
        mounted() {
            this.username = sessionStorage.getItem("username")
        }
    }
</script>
<style scoped>
    .index {
        width: 100%;
        height: 100%;
        display: -webkit-flex;
        flex-direction: column;
        /* background: url('../../static/images/bg.jpg') no-repeat; */
        background-size: 100% 100%;
        color: #fff;
    }
    
    .index header {
        width: 100%;
        height: 80px;
        line-height: 80px;
        padding: 0 10px;
        box-sizing: border-box;
        background: #353535;
        color: #fff;
        font-size: 16px;
        display: -webkit-flex;
        padding: 0 50px 0 20px;
        box-sizing: border-box;
    }
    
    .index header div {
        text-align: center;
        -webkit-flex: 1;
    }
    
    .index header .log {
        text-align: left;
    }
    
    .index header .welcome {
        text-align: right
    }
    
    .goout {
        padding: 5px 10px;
        margin-left: 10px;
    }
    
    .main {
        -webkit-flex: 1;
        overflow-y: auto;
        width: 100%;
        height: 100%;
        display: -webkit-flex;
    }
    
    .main .pageright {
        -webkit-flex: 1;
    }
    .main .pageleft{
        height:100%;
    }
    .main .pageright{
        height:100%;
    }
</style>