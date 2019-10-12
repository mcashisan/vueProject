import Vue from 'vue'
import Router from 'vue-router'
//引入组件配置路由
import Home from "../components/Home/Home"
import Login from "../components/Login"
//
//重置密码
import Reset from "../components/Lyf/ResetPassword"
//添加地址
import Address from "../components/Lyf/Address"
//添加地址1
import AddAddress from "../components/Lyf/AddAddress"
//账户信息
import AccountInfo from "../components/AccountInfoLyf"

//城市搜索: city
import City from "../components/Home/City"
//商品展示页面: msite
import Msite from "../components/Home/Msite"
// 商品列表
import ShopList from "../components/ShopList"
//添加地址内的搜索
import SearchAdd from '../components/SearchAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {path: "/", redirect: "/home"},
    {path:"/home", component:Home},
    {path: "/login", component: Login},
    //重置密码
    {path:"/reset",component:Reset},
    //添加地址
    {path:"/address",component:Address},
    //添加地址1
    {path:"/address1",component:AddAddress},
    // 城市搜索
    {path: "/city", component: City},
    //商品展示页面
    {path:"/msite", component: Msite},
    //
    {path:"/shoplist", component: ShopList},

  //  个人账户信息
    {path:"/account",component:AccountInfo},
  //  添加地址内搜索地址
    {path:"/searchAdd",component:SearchAdd}
  ]
})
