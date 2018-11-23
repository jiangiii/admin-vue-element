<template>
  <div>
    <Header></Header>
    <div class="list-container">
      <section class="search-from">
        <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="姓名">
            <el-input v-model="formInline.user" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-select v-model="formInline.region" placeholder="地址">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form> -->
      </section>
      <el-table class="listing" :data="userList" stripe style="width: 100%">
        <el-table-column prop="username" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="registe_time" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="city" label="地址">
        </el-table-column>
      </el-table>
      <section class="pagination-bar">
        <el-pagination background layout="total, prev, pager, next" 
        :page-size="limit" 
        :total="userCount"
        :current-page="currentPage"
        @current-change="handleCurrentChange">
        </el-pagination>
      </section>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  export default {
    created() {
      this.initData();
    },
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        userCount: 0,
        userList: [],
        limit: 12,
        currentPage: 1,
        offset: 0
      }
    },
    components: {
      Header
    },
    methods: {
      initData() {
        this.$axios.get('http://elm.cangdu.org/v1/users/count').then(response => {
          if (response.data.status === 1) {
            this.userCount = response.data.count
          }
        }).catch(error => {
          console.log(error)
        });
        this.userData();
      },
      handleCurrentChange(page) {
        this.currentPage = page;
        this.offset = (page - 1)*this.limit;
        this.userData()
      },
      userData() {
        this.$axios.get('http://elm.cangdu.org/v1/users/list', {params: {offset: this.offset, limit: this.limit}}).then(response => {
          if (response.status === 200) {
            this.userList = response.data
          }
        }).catch(error => {
          console.log(error)
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  .list-container {
    .listing {
      border: 1px solid #ebebeb;
      border-radius: 3px;
      transition: .2s;
    }

    .pagination-bar {
      padding: 20px;
      text-align: center;
    }

    .search-from {
      padding: 0 20px;
      border-radius: 3px;
      transition: .2s;
    }
  }
</style>