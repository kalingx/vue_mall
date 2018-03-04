<template>
    <div class="login">
        <section>
            <!-- :model用来设置表单所有字段,rules用来设置表单校验规则 -->
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">

                <!-- prop用来指定当前表单代表的字段名称 -->
                <el-form-item label="账号" prop="uname">
                    <el-input type="text" v-model="ruleForm2.uname" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="upwd">
                    <el-input type="password" v-model="ruleForm2.upwd" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>

            </el-form>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    //校验函数,rule可以拿到校验字段的信息与校验规则,value可以拿到字段的值,如果校验通过调用callback,不通过则不调用callback
    /* var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    }; */
    return {
      ruleForm2: {
        uname: "",
        upwd: ""
      },
      //这里添加的校验规则,每个字段可以加多个,所以是个数组
      rules2: {
        uname: [{ required: true,message:'请输入用户名', trigger: "blur" }],
        upwd: [{ required: true,message:'请输入密码', trigger: "blur" }],
      }
    };
  },
  methods: {
      login() {
          this.$http.post(this.$api.login,this.ruleForm2).then((res)=>{
              if(res.data.status==0){
                  this.$alert("登陆成功",'提示',{
                      callback: ()=>{
                      //保存用户名
                      localStorage.setItem('uname',res.data.message.uname);
                      //使用了router插件,组件实例就拥有了该对象,该对象有一个push方法可以实现路由跳转
                      this.$router.push({ name: 'admin'});
                        }
                  });
              }else{
                  this.$alert(res.data.message);
              }
          })
      },
      //登录按钮
      //this.$refs用来获取页面中的元素或组件
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login();
        } else {
          this.$alert("账号或密码错误");
        }
      });
    },
    //重置按钮
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped lang="less">
.login {
  background-color: aquamarine;
  height: 100%;
  section {
    width: 300px;
    height: 150px;
    margin: 0 auto;
    padding:30px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid #000;
    border-radius: 10px;
  }
}
</style>