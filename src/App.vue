<template>
  <div id="app">
    <a-layout id="components-layout-demo-fixed">
      <a-layout-header>
        <div class="logo" />
        <a-menu theme="light" mode="horizontal" :default-selected-keys="['1']">
          <a-menu-item key="1">
            <router-link to="/">首页</router-link>
          </a-menu-item>
          <a-menu-item key="2" disabled>服务</a-menu-item>
          <a-menu-item key="3" disabled>娱乐</a-menu-item>
          <a-menu-item key="4">
            <router-link to="/about">关于</router-link>
          </a-menu-item>
          <a-menu-item key="5" disabled>留言板</a-menu-item>
          <a-menu-item key="6" disabled>用户中心</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content>
        <a-carousel autoplay>
          <div>
            <h3>不听🙉</h3>
          </div>
          <div>
            <h3>不看🙈</h3>
          </div>
          <div>
            <h3>不说🙊</h3>
          </div>
        </a-carousel>
        <div id="content">
          <router-view />
        </div>
      </a-layout-content>
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
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255);
  margin: 16px 24px 16px 0;
  float: left;
}

#content {
  background: #fff;
  padding: 24px;
  min-height: 380px;
}

.ant-layout-header {
  position: fixed;
  z-index: 1;
  width: 100%;
  background: #ffff;
}

.ant-layout-content {
  padding: 0 50px;
  margin-top: 64px;
}

.ant-menu {
  line-height: 64px;
  float: right;
}

.ant-layout-footer {
  text-align: center;
}

.ant-carousel {
  margin: 10px 0px;
  border-radius: 15px;
  .slick-slide {
    text-align: center;
    height: 240px;
    line-height: 240px;
    background: #928e09;
    overflow: hidden;
  }
}

.ant-carousel {
  .slick-slide h3 {
    color: #fff;
  }
}
</style>
