import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Header from '../components/Header.vue'
import Carousel from '../components/Carousel.vue'
import Sider from '../components/Sider.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    components: {
      header: Header,
      carousel: Carousel,
      content: Home,
      sider: Sider
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      header: Header,
      carousel: Carousel,
      content: () =>
        import(/* webpackChunkName: "about" */ '../components/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
