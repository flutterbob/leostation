<template>
  <div class="container">
    <div class="inner">inner</div>
  </div>
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
.caontainer {
  width: 300px;
  height: 200px;
  background: pink;
  position: relative;
}

.inner {
  width: 100px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -50px;
  background: #fff;
  text-align: center;
}
/* .ant-layout {
  text-align: center;
} */

/* .ant-layout-sider {
  padding: 5px;
  background: #fff;
  color: #fff;
  line-height: 120px;
  height: 100%;
  border: 1px solid #000;
} */

/* .ant-layout-content {
  background: #fff;
  color: #fff;
  min-height: 120px;
  line-height: 120px;
  margin: 0;
  height: 100%;
  border: 1px solid #000;
} */
</style>
