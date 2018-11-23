<template>
  <div class="login-container">
    <el-card class="box-card login-scope" v-show="showLogin">
      <el-row>
        <el-col class="tip">
          <div class="grid-content">后台管理系统</div>
        </el-col>
      </el-row>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="80px">
        <el-form-item prop="username" label="用户名：">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码：">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="custom-btn" type="primary" :loading="logining" @click="onSubmit('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [{
            required: true,
            message: '请输入用户名',
            trigger: blur
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: blur
          }]
        },
        logining: false,
        showLogin: false
      }
    },
    watch: {

    },
    mounted() {
      this.showLogin = true
    },
    computed: {
      ...mapState(['user'])
    },
    methods: {
      ...mapActions(['login']),
      async onSubmit(loginForm) {
        this.$refs[loginForm].validate(async (valid) => {
          if (valid) {
            this.logining = true;
            let user = {
              user_name: this.loginForm.username,
              password: this.loginForm.password
            }
            this.$axios.post('http://elm.cangdu.org/admin/login', user).then(result => {
              if (result.data.status === 1) {
                this.login(user)
                this.$message({
                  type: 'success',
                  message: '登录成功'
                })
                sessionStorage.setItem('user', JSON.stringify(user));
                this.$router.push('home')
              } else {
                this.$message({
                  type: 'error',
                  message: result.data.message
                })
              }
            }).catch(error => {
              console.log(error);
            });
          } else {
            this.$message({
              type: 'error',
              message: '请输入正确的用户名密码',
              offset: 100
            });
            return false;
          }
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

  .l-h(@size) {
    height: @size;
    line-height: @size;
  }
</style>