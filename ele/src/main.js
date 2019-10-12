

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// 引入axios
import myHttp from "./axios/http"
// 设置原型上的方法
Vue.prototype.myHttp = myHttp;
// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
// 引入Vant组件
// import { Swipe, SwipeItem } from 'vant';
// Vue.use(Swipe).use(SwipeItem);

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  data: {
    fullWidth: "",
    maxWidth: ""
  },
  created() {
    this.fullWidth = document.documentElement.clientWidth;
    this.maxWidth = document.documentElement;
    this.maxWidth.style.fontSize = 48*(this.fullWidth/768) + 'px';
  }
});
window.onresize = function () {
  this.fullWidth = document.documentElement.clientWidth;
  this.maxWidth = document.documentElement;
  this.maxWidth.style.fontSize = 48*(this.fullWidth/768) + 'px';
}
