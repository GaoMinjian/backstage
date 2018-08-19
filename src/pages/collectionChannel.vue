<template>
    <div id="collectionChannel">
      <el-row>
        <div class="page-title">舆情监控平台</div>
      </el-row>
      <el-row class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/Home/homaepage' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>渠道管理</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <div class="table-container">
        <el-row>
          <div class="form-title"><i class="el-icon-edit"></i>渠道管理</div>
        </el-row>
        <div class="form-container">
          <el-row>
            <div class="btn-container">
              <el-button type="warning" size="small" @click="handleAdd">增加<i class="el-icon-plus"></i></el-button>
              <el-button type="danger" size="small" @click="checkedDelete">删除<i class="el-icon-delete"></i></el-button>
              <el-button type="success" size="small">探测<i class="el-icon-sort"></i></el-button>
              <el-input class="search-input" v-model="input" placeholder="请输入搜索内容"size="small"></el-input>
              <el-button type="success" size="small" @click="handleSearch"><i class="el-icon-search"></i>搜索</el-button>
            </div>
          </el-row>
          <br/>
          <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" border stripe
                    @selection-change="selectionChange">
            <el-table-column align="center" type="selection" width="50"></el-table-column>
            <el-table-column align="center" prop="siteName" label="网站名">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" v-if="isPopover">
                  <p>最近采集时间：{{scope.row.latestTime}}</p>
                  <p>本次采集时间：{{scope.row.thisTime}}</p>
                  <div v-if="!showEdit[scope.$index]" slot="reference" class="name-wrapper">{{ scope.row.siteName }}</div>
                </el-popover>
                <el-input v-if="showEdit[scope.$index]" v-model="scope.row.siteName" size="small" placeholder="请输入内容"></el-input>
                <span v-if="!showEdit[scope.$index] && !isPopover">{{scope.row.siteName}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="url" label="网址">
              <template slot-scope="scope">
                <el-input v-if="showEdit[scope.$index]" v-model="scope.row.url" size="small" placeholder="请输入内容"></el-input>
                <span v-if="!showEdit[scope.$index]">{{scope.row.url}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="type" label="类型" >
              <template slot-scope="scope">
                <el-input v-if="showEdit[scope.$index]" v-model="scope.row.type" size="small" placeholder="请输入内容"></el-input>
                <span v-if="!showEdit[scope.$index]">{{scope.row.type}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="state" label="状态">
              <template slot-scope="scope">
                <el-input v-if="showEdit[scope.$index]" v-model="scope.row.state" size="small" placeholder="请输入内容"></el-input>
                <span v-if="!showEdit[scope.$index]">{{scope.row.state}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="latestTime" label="最近采集时间" v-if="!isPopover">
              <template slot-scope="scope">
                <el-input v-if="showEdit[scope.$index]" v-model="scope.row.latestTime" size="small" placeholder="请输入内容"></el-input>
                <span v-if="!showEdit[scope.$index]">{{scope.row.latestTime}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="thisTime" label="本次采集时间" v-if="!isPopover">
              <template slot-scope="scope">
                <el-input v-if="showEdit[scope.$index]" v-model="scope.row.thisTime" size="small" placeholder="请输入内容"></el-input>
                <span v-if="!showEdit[scope.$index]">{{scope.row.thisTime}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="rate" label="频率">
              <template slot-scope="scope">
                <el-input v-if="showEdit[scope.$index]" v-model="scope.row.rate" size="small" placeholder="请输入内容"></el-input>
                <span v-if="!showEdit[scope.$index]">{{scope.row.rate}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="操作" width="150%">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"><span  class="edit-btn">编辑</span></el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="block">
            <el-pagination layout="prev,pager,next" :total="10" @current-change="currentChange"></el-pagination>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "collectionChannel",
  data(){
      return{
        input:'',
        isPopover:false,
        tableData:[],//渲染数据
        allTableData:[{//全部数据
          siteName:'百度贴吧',
          url:'http://tieba.baidu.com',
          type:'论坛',
          state:'运行中',
          latestTime:'2018-08-06 22:23',
          thisTime:'2018-08-06 22:24',
          rate:'一小时'
        }],
        checked:[],//表格行是否勾选
        showEdit:[false]
      }
  },
  methods:{
      currentChange(currentPage){

      },
    checkedDelete (){
        this.checked.forEach(function (value) {
          this.tableData.splice(this.tableData.indexOf(value),1);
        },this)
    },
    handleAdd (){
        this.tableData.push({});
    },
    handleSearch () {
      if(this.input == '')
        this.tableData = this.allTableData;
      else {
        this.tableData = [];
        this.allTableData.forEach(function (dataItem,index) {
          if(dataItem.siteName.indexOf(this.input) != -1){
            this.tableData.push(this.allTableData[index]);
          }
        },this)
      }
    },
    handleDelete(index,row){
        this.tableData.splice(index,1);
    },
    handleEdit(index,row){
        var editBtn = document.getElementsByClassName('edit-btn')[index];
        if (editBtn.innerHTML == '编辑'){
          editBtn.innerHTML = '确定'
          this.$set(this.showEdit,index,true)
        }
        else {
          editBtn.innerHTML = '编辑';
          this.$set(this.showEdit,index,false)
        }
    },
    selectionChange(selection){
        this.checked=selection;
    }
  },
  mounted () {
    this.tableData = this.allTableData;
    if (document.documentElement.clientWidth < 1490) {
      this.$set(this,'isPopover',true);
    }
      window.onresize = ()=> {
        var clientWidth = document.documentElement.clientWidth;
        if (clientWidth < 1490) {
          this.$set(this,'isPopover',true);
        }
        else
          this.$set(this,'isPopover',false)
      }
  },
  watch:{
      'input':function inputChange() {
        if (this.input == '')
          this.tableData = this.allTableData;
        else{
          this.tableData = [];
          this.allTableData.forEach(function (dataItem,index) {
            if(dataItem.siteName.indexOf(this.input) != -1){
              this.tableData.push(this.allTableData[index]);
            }
          },this)
        }
      }
  }
}
</script>

<style scoped lang="less">
.page-title{
  font-size: 32px;
  text-align: left;
  font-weight: bold;
  margin-bottom: 10px;
}
.breadcrumb{
  background-color: white;
  padding: 0.5rem;
  margin-bottom: 25px;
}
  .table-container{
    border: 1px solid blue;
  }
  .form-container{
    padding: 10px;
  }
  .form-title{
    background-color: blue;
    color: white;
    padding: 0.5rem;
    text-align: left;
    margin-bottom: 5px;
  }
  .btn-container{
    overflow: hidden;
    .el-button{
      float: left;
    }
  }
  .search-input{
    width: 300px;
    float: left;
    margin-left: 10px;
    margin-right: 5px;
  }
</style>
