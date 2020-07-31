<template>
  <div>Content</div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      start: '',
      ok: ''
    }
  }
}
</script>

<style scoped>
.ant-layout {
  text-align: center;
}

.ant-layout-sider {
  padding: 5px;
  background: #fff;
  color: #fff;
  line-height: 120px;
  height: 100%;
  border: 1px solid #000;
}

.ant-layout-content {
  background: #fff;
  color: #fff;
  min-height: 120px;
  line-height: 120px;
  margin: 0;
  height: 100%;
  border: 1px solid #000;
}
</style>
