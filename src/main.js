import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.filter('to-lowercase',function(value){
	return value.toLowerCase();
});
Vue.mixin({
	created(){
		console.log('This is global mixins');
	}
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
