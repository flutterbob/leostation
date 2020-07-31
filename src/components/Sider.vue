<template>
  <div id="side-wrapper">
    <div id="side-avatar">
      <a-avatar icon="user" :size="100"></a-avatar>
      <h1>Leo</h1>
    </div>
    <h3>Leo的个人小站</h3>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
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
#side-wrapper {
  border-radius: 5px;
  border: 1px solid green;
}

#side-avatar {
  height: 150px;
}

#side-avatar .ant-avatar {
  margin-top: 10px;
}

#side-avatar h1 {
  margin-top: 3px;
  font-size: 1.125rem;
  margin-bottom: 0px;
}

#side-wrapper h3 {
  margin: 0;
  font-size: 0.75rem;
  color: #999;
}
</style>
