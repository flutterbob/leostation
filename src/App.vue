<template>
  <div id="app">
    <a-layout id="components-layout-demo-fixed">
      <a-layout-header>
        <div class="logo" />
        <a-menu theme="dark" mode="horizontal" :default-selected-keys="['2']">
          <a-menu-item key="1">nav 1</a-menu-item>
          <a-menu-item key="2">nav 2</a-menu-item>
          <a-menu-item key="3">nav 3</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content>
        <a-breadcrumb>
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <div id="content">Content</div>
      </a-layout-content>
      <a-layout-footer>Ant Design ©2020 Created by Yi Zheng</a-layout-footer>
    </a-layout>
  </div>
</template>

<style lang="less" scope>
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
  // background-color: rgba(255, 255, 255, 0.2);
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

.ant-breadcrumb {
  margin: 16px 0;
}
</style>
