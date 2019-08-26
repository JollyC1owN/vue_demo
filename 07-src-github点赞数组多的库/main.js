// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
// 声明使用插件
Vue.use(VueResource) // 内部给Vue.prototype.$http = 能发ajax请求的对象（.get/.post）
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
