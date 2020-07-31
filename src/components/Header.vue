<template>
  <a-layout-header>
    <div class="logo">
      <img src="@/assets/images/brand.png" alt />
    </div>
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
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {},
  components: {}
}
</script>

<style scoped>
.logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255);
  margin: 16px 24px 16px 0;
  float: left;
  line-height: 31px;
  /* background-image: url(./public/Pic/Brand.png); */
}

.logo img {
  margin-left: 30 px;
  width: 120%;
  height: 120%;
}

.ant-layout-header {
  height: 64px;
  position: fixed;
  z-index: 1;
  width: 100%;
  background: #ffff;
  border-bottom: 1px solid #e8e8e8;
  padding: 0px 60px;
}

.ant-menu {
  line-height: 62px;
  float: right;
}
</style>
