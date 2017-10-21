<template>
    <div class="login">
        <div class="box">
            <h2>Welcome to login</h2>
            <div>
                <ul>
                    <li  v-focus:test="loginname">
                        <label for="name">
                            <span>用户名：</span>
                            <input type="text" class="inp" v-model="loginname.val">
                            <p>请输入正确的用户名</p>
                        </label>
                    </li>
                    <li  v-focus:required="loginpwd">
                        <label for="name">
                            <span>用户名：</span>
                            <input type="password" class="inp"  v-model="loginpwd.val">
                            <p>请输入正确的密码</p>
                        </label>
                    </li>
                </ul>
                <el-button @click='login'>登陆</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                loginname: {
                    val: "",
                    msgread: "您输入的用户名格式不正确",
                    msg: "您输入的用户名格式不正确",
                    test: /^[a-zA-z]{1,8}$/,
                    state: false
                },
                loginpwd: {
                    val: "",
                    msgread: "您输入的密码格式不正确",
                    blur: false,
                    msg: "您输入的密码格式不正确",
                    test: /[a-zA-Z\d_]{4,}/,
                    state: false
                }
            }
        },
        methods: {
            login() {
                var _this = this
                if (!this.loginpwd.state && !this.loginname.state && this.loginpwd.val != "" && this.loginname.val != "") {
                    this.axios.post("/api/back_class", {
                        params: {
                            loginname: this.loginname.val,
                            loginpwd: this.loginpwd.val
                        }
                    }).then(function(data) {
                        console.log(data);
                        if (data.data.code == "1001") {
                            sessionStorage.setItem("userId", data.data.userid);
                            sessionStorage.setItem("username", _this.loginname.val);
                            _this.$router.push("/index")
                        } else {
                            alert(data.data.msg);
                        }
                    })
                } else {
                    alert("请正确填写用户名密码");
                }

            }
        },
        directives: {
            focus: {
                componentUpdated(el, option, vnode, oldVnode) {
                    var p = el.getElementsByTagName("p")[0];
                    var state = option.value.test.test(option.value.val);
                    if (option.value.val != "") {
                        if (state) {
                            p.style.display = "none"
                        } else {
                            p.style.display = "block"
                        }
                        option.value.msg = option.oldValue.msgread
                    } else {
                        if (option.arg == "required" && option.value.blur) {
                            p.style.display = "block"
                            option.value.msg = "不能为空"
                        } else {
                            p.style.display = "none"
                        }
                    }
                }
            }
        }
    }
</script>
<style>
    .login {
        width: 100%;
        height: 100%;
        background: #cbd;
        position: relative;
        text-align: center;
        background: url("../../static/images/bg2.jpg") no-repeat;
        background-size: 100% 100%;
        color: #fff;
    }
    
    .box {
        width: 300px;
        height: 220px;
        position: absolute;
        left: 10%;
        bottom: 10%;
        border: 1px solid #ccc;
    }
    
    ul>li {
        height: 60px;
    }
    
    p {
        line-height: 35px;
        font-weight: 900;
        display: none;
    }
    
    .el-button {
        padding: 8px 35px;
    }
    
    input {
        height: 20px;
        border: none;
        background: #fff;
        padding: 0 5px;
    }
    
    h2 {
        line-height: 50px;
    }
</style>