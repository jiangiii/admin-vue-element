<template>
  <el-container>
    <el-header class="header-container">
      <span>ADMIN</span>
      <el-dropdown class="user-info" trigger="click" @command="handleCommand">
        <span class="el-dropdown-link" v-if="this.$store.state.user">{{this.$store.state.user.user_name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item command="singout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-aside class="side-container">
        <el-row>
          <el-col>
            <el-menu :default-active="defaultActive" @open="handleOpen" @close="handleClose"
              background-color="#545c64" text-color="#fff" active-text-color="#20a0ff" router>
              <el-menu-item index="home">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>数据管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="userList">用户列表</el-menu-item>
                  <el-menu-item index="merchantList">商家列表</el-menu-item>
                  <el-menu-item index="2-3">视频列表</el-menu-item>
                  <el-menu-item index="2-4">订单列表</el-menu-item>
                  <el-menu-item index="2-5">管理员列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-plus"></i>
                  <span>添加数据</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">添加商铺</el-menu-item>
                  <el-menu-item index="3-2">添加商品</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-star-on"></i>
                  <span>图表</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">用户分布</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>编辑</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="5-1">文本编辑</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>设置</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="6-1">管理员设置</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="7">
                <template slot="title">
                  <i class="el-icon-warning"></i>
                  <span>说明</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="7-1">说明</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    computed: {
      defaultActive: function () {
        return this.$route.path.replace('/', '');
      }
    },
    methods: {
        ...mapActions(['logout']),
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleCommand(command) {
        if (command === 'singout') {
          this.$axios.get('http://elm.cangdu.org/admin/singout')
            .then(response => {
              if (response.data.status === 1) {
                this.$message({
                  type: 'success',
                  message: '退出登录'
                })
                this.logout()
                sessionStorage.removeItem('user')
                this.$router.push('/')
              } else {
                this.$message({
                  type: 'error',
                  message: '退出登录失败'
                })
              }
            }).catch(error => {
              console.log(error);
            })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .header-container {
    padding: 0 20px;
    background: #409EFF;
    line-height: 60px;
    color: white;
  }

  .side-container {
    width: 220px !important;
  }

  .user-info {
    position: absolute;
    right: 20px;
    color: white;
  }
</style>