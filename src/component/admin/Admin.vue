<template>
    <div class="admin">
        <el-container>
            <!-- 公共头部 -->
            <el-header>
              <app-header></app-header>
            </el-header>
            <el-container class="admin_content">
                <!-- 公共左侧 -->
                <el-aside width="200px">
                  <app-aside></app-aside>
                </el-aside>
                <!-- 变化子页面 -->
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Header from "./subcom/Header.vue";
import Aside from "./subcom/Aside.vue";
export default {
  //注册子组件
  components: {
    appHeader: Header,
    appAside: Aside
  }
};
</script>

<style scoped lang="less">
.admin {
  height: 100%;
  color: #333;
  .el-container {
    height: 100%;
    .el-header {
      line-height: 60px;
    }
  }
  //less 语法: &对上级选择器的引用
  &_content {
    background-color: blueviolet;
    .el-aside {
      background-color: yellowgreen;
    }
  }
}
</style>