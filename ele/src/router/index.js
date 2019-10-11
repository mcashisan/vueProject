import Vue from 'vue'
import Router from 'vue-router'
//引入组件配置路由
import Home from "../components/Home/Home"
import Login from "../components/Login"
import Reset from "../components/Lyf/ResetPassword"
import Address from "../components/Lyf/Address"
import AddAddress from "../components/Lyf/AddAddress"

Vue.use(Router)

export default new Router({
  routes: [
    {path: "/", redirect: "/home"},
    {path:"/home", component:Home},
    {path: "/login", component: Login},
    {path:"/reset",component:Reset},
    {path:"/address",component:Address,
      children:[{path:"address1",component:AddAddress}]}
  ]
})
