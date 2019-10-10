import Vue from 'vue'
import Router from 'vue-router'
//引入组件配置路由
import Child1 from "../components/Home/Child1"
import Child2 from "../components/Home/Child2"
import Child3 from "../components/Home/Child3"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/", component:Child1},
    {path:"/child2", component:Child2},
    {path:"/child3", component:Child3}
  ]
})
