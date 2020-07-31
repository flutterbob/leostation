<template>
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
.ant-carousel {
  margin: 10px 0px;
  border-radius: 15px;
}

.ant-carousel .slick-slide {
  text-align: center;
  height: 240px;
  line-height: 240px;
  background: #928e09;
  overflow: hidden;
}

.ant-carousel .slick-slide h3 {
  color: #fff;
}
</style>
