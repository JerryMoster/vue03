import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 注册全局过滤器
Vue.filter('globalMoney', (val) => {
  return '￥' + Number(val).toFixed(2)
})

new Vue({
  render: h => h(App)
}).$mount('#app')
