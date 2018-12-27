import Vue from 'vue'
import JsonExcel from 'vue-json-excel'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.component('downloadExcel', JsonExcel)

new Vue({
  render: h => h(App),
}).$mount('#app')
