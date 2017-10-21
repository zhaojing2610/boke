<template>
    <div class="amend">
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <h3>修改一级类名</h3>
                <el-form-item label="中文类名" prop="cn">
                    <el-input type="text" v-model="ruleForm2.cnname_one" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="英文类名" prop="en">
                    <el-input v-model.number="ruleForm2.enname_one"></el-input>
                </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "amend",
        data() {
            var en = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入英文标识'));
                } else {
                    if (/^[A-Za-z]+$/.test(this.ruleForm2.enname_one)) {
                        callback();
                    } else {
                        callback(new Error('请输入英文'));
                    }

                }
            }

            return {
                ruleForm2: {
                    oldenname_one: '',
                    cnname_one: "",
                    enname_one: "",
                },
                rules2: {
                    cn: [{
                        validator: "",
                        trigger: 'blur'
                    }],
                    en: [{
                        validator: en,
                        trigger: 'blur'
                    }]
                }
            }
        },
        created() {
            this.ruleForm2.oldenname_one = this.$route.params.enname;
            this.ruleForm2.cnname_one = this.$route.params.cnname
            this.ruleForm2.enname_one = this.$route.params.enname
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.axios.post('/api/back_class/amend_class_one', this.ruleForm2).then(function(data) {
                            console.log(data)
                            if (data.data.code == '1052') {
                                this.$message({
                                    message: data.data.msg,
                                    type: "success"
                                });
                            } else {
                                this.$message({
                                    message: data.data.msg,
                                    type: "error"
                                });
                            }
                        }.bind(this))
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style>
    form {
        width: 400px;
    }
    
    h3 {
        margin: 20px 0 20px 40px;
        color: #000;
        font-size: 24px;
    }
</style>