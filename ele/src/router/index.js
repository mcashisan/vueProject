import Vue from 'vue'
import Router from 'vue-router'
//引入组件配置路由
import Home from "../components/Home/Home"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/", component:Home}
  ]
})
