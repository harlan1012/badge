import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/index/index.vue'
import Good from '../pages/good/index.vue'
Vue.use(VueRouter)
const routes = [
  { path: '', component: Index },
  { path: '/good', component: Good },
]
const router = new VueRouter({
  mode: 'history',
  // base: '/',
  base: `/${import.meta.env.VITE_APP_PROJECT_NAME}/`,
  routes,
})
export default router
