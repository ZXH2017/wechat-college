// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import { AlertPlugin, ToastPlugin } from 'vux'
Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
FastClick.attach(document.body)

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')