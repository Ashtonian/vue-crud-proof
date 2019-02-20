import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Axios from './axios'
import VueAxios from 'vue-axios'
import MockAdapter from './mock-adapter'

Vue.config.productionTip = false

Vue.use(VueAxios, Axios)
MockAdapter(Axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
