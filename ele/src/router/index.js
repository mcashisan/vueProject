import Vue from 'vue'
import Router from 'vue-router'
//引入组件配置路由
import Child1 from "../components/Home/Child1"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/", component:Child1}
  ]
})
