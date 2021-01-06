<template>
    <div id="home">
      <div class="aside-col">
        <el-menu class="menu" :default-active="$route.path" router :collapse="isCollapse" background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
          <el-menu-item @click="changeCollapse">
            <i><img src="../assets/icons/catalog.png" width="15px" height="15px" /></i>
          </el-menu-item>
          <el-menu-item index="/Home/homepage">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/Home/article">
            <i class="el-icon-tickets"></i>
            <span slot="title">文章</span>
          </el-menu-item>
          <!-- <el-menu-item index="/Home">
            <i class="el-icon-view"></i>
            <span slot="title">我的监听</span>
          </el-menu-item>
          <el-menu-item index="/Home">
            <i class="el-icon-news"></i>
            <span slot="title">舆情事件</span>
          </el-menu-item>
          <el-menu-item index="/Home">
            <i class="el-icon-document"></i>
            <span slot="title">舆情报告</span>
          </el-menu-item>
          <el-menu-item index="/Home">
            <i class="el-icon-message"></i>
            <span slot="title">导控任务</span>
          </el-menu-item>
          <el-menu-item index="/Home">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">知识库管理</span>
          </el-menu-item>
          <el-menu-item index="/Home">
            <i class="el-icon-setting"></i>
            <span slot="title">系统管理</span>
          </el-menu-item>
          <el-menu-item index="/Home/collectionChannel">
            <i class="el-icon-edit"></i>
            <span slot="title">系统渠道管理</span>
          </el-menu-item>
          <el-menu-item index="/Home">
            <i class="el-icon-search"></i>
            <span slot="title">全文检索</span>
          </el-menu-item> -->
        </el-menu>
      </div>
        <div class="main-col">
          <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
  data () {
      return{
        isCollapse:false
      }
  },
  methods:{
      changeCollapse () {
        var mainCol = document.getElementsByClassName('main-col')[0];
        this.isCollapse = !this.isCollapse
        if(this.isCollapse) {
          mainCol.style.left = '90px';
          mainCol.style.width='calc(100% - 110px)'
        }
        else {
          mainCol.style.left = '220px';
          mainCol.style.width = 'calc(100% - 240px)'
        }
      }
  }
}
</script>

<style scoped lang="less">
  .menu{
    height: 100vh;
  }
.el-menu-item{
  text-align: left;
  border-bottom: 1px solid gray;
}
.aside-col{
  display: inline-block;
  float: left;
  width: 200px;
}
.main-col{
  position: fixed;
  left: 220px;
  display: inline-block;
  width: calc(100% - 240px);
}
</style>
