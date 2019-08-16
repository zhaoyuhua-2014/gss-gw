// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import Vant from 'vant'
import 'vant/lib/index.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "babel-polyfill"

Vue.config.productionTip = false
Vue.prototype.$Origin = 'https://brp.hhu.edu.cn'

Vue.use(Vant)

router.afterEach((to,from,next) => {
  // window.scrollTo(0,0)
  window.scrollTo({top:0})
}); // 路由跳转 滚动条保持在顶部

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  $,
  components: { App },
  template: '<App/>'
})
