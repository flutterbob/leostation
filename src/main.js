import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Button from 'ant-design-vue/lib/button'
// import 'ant-design-vue/dist/antd.css'
import { Layout, Breadcrumb, Menu } from 'ant-design-vue'
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Breadcrumb)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
