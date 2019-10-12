import Vue from 'vue'
import Router from 'vue-router'
//引入组件配置路由
import Home from "../components/Home/Home"
import Login from "../components/Login"
//
import Reset from "../components/Lyf/ResetPassword"
import Address from "../components/Lyf/Address"
import AddAddress from "../components/Lyf/AddAddress"
//

//城市搜索: city
import City from "../components/Home/City"
//商品展示页面: msite
import Msite from "../components/Home/Msite"
// 商品列表
import ShopList from "../components/ShopList"

Vue.use(Router)

export default new Router({
  routes: [
    {path: "/", redirect: "/home"},
    {path:"/home", component:Home},
    {path: "/login", component: Login},
    {path:"/reset",component:Reset},
    {path:"/address",component:Address,
      children:[{path:"address1",component:AddAddress}]},
    // 城市搜索
    {path: "/city", component: City},
    //商品展示页面
    {path:"/msite", component: Msite},
    //
    {path:"/shoplist", component: ShopList}
  ]
})
