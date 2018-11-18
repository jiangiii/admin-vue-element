<template>
  <div>
    <Header></Header>
    <div class="list-container">
      <section class="search-from">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
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
        </el-form>
      </section>
      <el-table class="listing" :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
      <section class="pagination-bar">
        <el-pagination background layout="prev, pager, next" :page-size="1" :total="3">
        </el-pagination>
      </section>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  export default {
    created() {},
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        count: 0
      }
    },
    components: {
      Header
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      async initCount() {

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