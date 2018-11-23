<template>
  <div class="header-container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">
        {{item}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang="less" scoped>
.header-container{
		background-color: #EFF2F7;
		height: 45px;
		display: flex;
		justify-content: space-between;
		align-items: center;
    padding: 0 20px;
    margin-bottom: 20px;
	}
</style>
