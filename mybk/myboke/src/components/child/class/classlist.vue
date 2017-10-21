<template>
    <el-table  :data="tableData5" style="width: 100%">
        <el-table-column type="expand">
            <template scope="props">
                <el-table :data="props.row.twodata" border style="width: 100%" scope='scope'>
                    <el-table-column label="二级类名"  width="274">
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.cnname }}</span>
                        </template>
</el-table-column>
<el-table-column label="二级标识" width="274">
    <template scope="scope">
                                    <span style="margin-left: 10px">{{ scope.row.enname }}</span> 
                                </template>
</el-table-column>
<el-table-column label="操作">
    <template scope="scope">
                            <el-button size="small"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row, props.row.onedata )">删除</el-button>
                        </template>
</el-table-column>
</el-table>
</template>
</el-table-column>
<el-table-column label="一级类名" prop="onedata.cnname">
</el-table-column>
<el-table-column label="一级标识" prop="onedata.enname">
</el-table-column>
<el-table-column label="操作" prop='onedata.time'>
    <template scope="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
</el-table-column>
</el-table>
</template>

<script>
    export default {
        name: "classlist",
        data() {
            return {
                tableData5: [],
            }
        },
        created() {
            this.axios.get('/api/back_class/class_list').then(function(data) {
                this.tableData5 = data.data.data;
            }.bind(this))
        },
        methods: {
            handleEdit(index, row) {
                if (row.onedata) {
                    this.$router.push({
                        name: "amend_one_class",
                        params: row.onedata
                    })
                } else {
                    this.$router.push({
                        name: "amend_two_class",
                        params: row
                    })
                }
            },
            handleDelete(index, row, onedata) {
                if (row.onedata) {
                    var obj = {
                        id: row.onedata.id,
                        enname_one: row.onedata.enname
                    }
                    this.axios.post('/api/back_class/delete_one', obj).then(function(data) {
                        if (data.data.code == '1071') {
                            this.$message({
                                message: data.data.msg,
                                type: "success"
                            });
                            this.$router.go(0);
                        } else {
                            this.$message({
                                message: data.data.msg,
                                type: "error"
                            });
                        }
                    }.bind(this))
                } else {
                    var obj = {
                        oneId: row.parent_id,
                        twoId: row.id,
                        enname_one: onedata.enname
                    }
                    this.axios.post('/api/back_class/delete_two', obj).then(function(data) {
                        if (data.data.code == '1071') {
                            this.$message({
                                message: data.data.msg,
                                type: "success"
                            });
                            this.$router.go(0);
                        } else {
                            this.$message({
                                message: data.data.msg,
                                type: "error"
                            });
                        }
                    }.bind(this))
                }
            }
        }
    }
</script>
<style>
    .classlist {
        color: #000;
    }
    
    .demo-table-expand {
        font-size: 0;
    }
    
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>