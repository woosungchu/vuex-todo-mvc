import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
