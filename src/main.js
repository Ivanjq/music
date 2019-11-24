import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick-vue'
import VueLazyLoad from 'vue-lazyload'
import './registerServiceWorker'
import './assets/stylus/index.styl'

Vue.use(VueLazyLoad, {
  loading: require('assets/image/default.png')
})
Vue.config.productionTip = false
fastclick.attach(document.body) // fastclick调用

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
