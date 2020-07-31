<template>
  <div id="app">
    <a-layout id="app-layout">
      <router-view name="header"></router-view>
      <a-layout id="app-content-layout">
        <a-layout-content>
          <router-view name="content"></router-view>
        </a-layout-content>
        <a-layout-sider>
          <router-view name="sider"></router-view>
        </a-layout-sider>
      </a-layout>
      <a-layout-footer>Ant Design ©2020 Created by Yi Zheng</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      start: '',
      ok: ''
    }
  }
}
</script>

<style scope lang="less">
#app-layout {
  background: #fff;
}

#app-content-layout {
  padding: 20px 60px 20px 60px;
  margin-top: 64px;
  text-align: center;
  .ant-layout-content {
    background: #fff;
    color: #fff;
    min-height: 500px;
    line-height: 120px;
    margin: 0;
    height: 100%;
    border: 1px solid #000;
  }

  .ant-layout-sider {
    padding: 0px 5px 0px 5px;
    background: none;
    height: 100%;
  }
}

.ant-layout-footer {
  background: #fff;
  text-align: center;
}
</style>
