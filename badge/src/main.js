import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import CompositionApi from '@vue/composition-api'
import OIButton from '@guanghe-pub/onion-ui/lib/button/index'
import '@guanghe-pub/onion-ui/lib/button/style.css'
import '@guanghe-pub/onion-ui/lib/toast/style.css'
import '@/service/axios.interceptor'
import App from './App.vue'
import '@/styles/index.less'

import router from './routers/index'
const pinia = createPinia()
Vue.use(CompositionApi)
Vue.use(PiniaVuePlugin)
Vue.use(OIButton)

new Vue({
  router,
  render: (h) => h(App),
  pinia,
}).$mount('#app')
