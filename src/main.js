import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.filter('to-lowercase');
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
