<template>
    <div class="addtwo">
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <h3>一级类名</h3>
                <el-form-item label="一级类名" :rules="rules">
                    <el-select v-model="form.region" placeholder="请选择" @change='change'>
                        <el-option v-for='i in classOnelist' :label="i.cnname" :value="i.id"></el-option>
                    </el-select>
                </el-form-item>
            <h3>二级类名设置</h3>
                <el-form-item label="中文类名" prop="cn">
                    <el-input type="text" v-model="ruleForm2.cnname_two" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="英文类名" prop="entwo">
                    <el-input v-model.number="ruleForm2.enname_two"></el-input>
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
        name: "addtwo",
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
            };
            var entwo = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入英文标识'));
                } else {
                    if (/^[A-Za-z]+$/.test(this.ruleForm2.enname_two)) {

                        callback();
                    } else {
                        callback(new Error('请输入英文'));
                    }

                }
            };
            return {
                classOnelist: [],
                form: {
                    region: '',
                },
                rules: {
                    region: [{
                        required: true,
                        message: '请选择活动区域',
                        trigger: 'change'
                    }]
                },
                ruleForm2: {
                    oneId: null,
                    enname_two: '',
                    cnname_two: ''
                },
                rules2: {
                    cn: [{
                        validator: "",
                        trigger: 'blur'
                    }],
                    en: [{
                        validator: en,
                        trigger: 'blur'
                    }],
                    entwo: [{
                        validator: entwo,
                        trigger: 'blur'
                    }]
                }
            };
        },
        created() {
            this.axios.get('/api/back_class/select_one_class').then(function(data) {
                this.classOnelist = data.data.data;
            }.bind(this))
        },
        methods: {
            change() {
                this.ruleForm2.oneId = this.form.region;
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.axios.post('/api/back_class/add_two_class', this.ruleForm2).then(function(data) {
                            if (data.data.code == '1032') {
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
<style scoped>
    form {
        width: 400px;
    }
    
    h3 {
        margin: 20px 0 20px 40px;
        color: #000;
        font-size: 24px;
    }
</style>