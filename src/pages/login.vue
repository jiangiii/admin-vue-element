<template>
  <div class="login-container">
    <el-card class="box-card login-scope">
      <el-row>
        <el-col class="tip">
          <div class="grid-content">后台管理系统</div>
        </el-col>
      </el-row>
      <el-form ref="loginForm" :model="loginForm" :rules="rules" label-width="80px">
        <el-form-item label="用户名：">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="custom-btn" type="primary" @click="onSubmit('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {
              required: true,
              message: '请输入用户名',
              trigger: blur
            }
          ],
          password: [
            {
              required: true,
              message: '请输入密码',
              trigger: blur
            }
          ]
        }
      }
    },
    methods: {
      async onSubmit(fromName) {
        this.$refs[fromName].validate(async(valid)=> {
          this.$router.push('/manage');
        })
      }
    }
  }
</script>

<style lang="less">
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .tip {
      text-align: center;
      background: #909399;
      color: white;
      .l-h(45px);
      margin-bottom: 15px;
      border-radius: 5px;
    }
    .login-scope {
      width: 380px;
    }
    .custom-btn {
      width: 75%;
    }
  }

  .l-h(@size){
    height: @size;
    line-height: @size;
  }
</style>