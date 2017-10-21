<template>
    <div class="amend_two_class">
        <el-form :model="ruleForm1" :rules="rules1" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
            <h3>修改二级类名</h3>
                <el-form-item label="中文类名" prop="cn">
                    <el-input type="text" v-model="ruleForm1.cnname_two" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="英文类名" prop="en">
                    <el-input v-model.number="ruleForm1.enname_two"></el-input>
                </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm1')">提交</el-button>
                <el-button @click="resetForm('ruleForm1')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "amend_two_class",
        data() {
            var en = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入英文标识'));
                } else {
                    if (/^[A-Za-z]+$/.test(this.ruleForm1.enname_one)) {
                        callback();
                    } else {
                        callback(new Error('请输入英文'));
                    }

                }
            }
            return {
                ruleForm1: {
                    oldenname_two: '',
                    enname_two: '',
                    cnname_two: ''
                },
                rules1: {
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
            this.ruleForm1.oldenname_two = this.$route.params.enname;
            this.ruleForm1.cnname_two = this.$route.params.cnname
            this.ruleForm1.enname_two = this.$route.params.enname
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.axios.post('/api/back_class/amend_class_two', this.ruleForm1).then(function(data) {
                            console.log(data)
                            if (data.data.code == '1062') {
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