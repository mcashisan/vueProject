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
import ShopList from "../components/ShopList"
//添加地址内的搜索
import SearchAdd from '../components/SearchAdd'
// import ShopList from "../components/ShopList"
// 轮播--> 筛选页面
import Food from "../components/Home/ShopCar/Food"
// 商品--> 商品介绍(购物车)
import Shop from "../components/Home/Shop/Shop"

//mine 我的页面
import Mine from '../components/Particularszhl/Mine'
//Serve 服务中心
import server1 from "../components/Particularszhl/Serve"
//Vip
import Vip from '../components/Particularszhl/Vip'
//
import MyMoney from '../components/Particularszhl/Myyuan'
//积分
import Jf from '../components/Particularszhl/Integral'
//订单
import Ins from '../components/Particularszhl/Indent'
//下载
import Inter from '../components/Particularszhl/Download'
//兑换说明
import Zhl from '../components/Particularszhl/Linkzhl'
//余额说明
import Zhlmon from '../components/Particularszhl/Moneyzhl'
//优惠
import Youhui from '../components/Particularszhl/Redandmerc/Discounts'
//积分商城
import Myshop from '../components/Particularszhl/Mymall'
//红包
import Pr from '../components/Particularszhl/Redandmerc/RedPage'
//红包说明
import Ab from '../components/Particularszhl/Redandmerc/Thatred'
//过期红包
import fouasd from '../components/Particularszhl/Redandmerc/Canhistory'
Vue.use(Router)

export default new Router({
  routes: [
    {path: "/", redirect: "/home"},  // 重定向
    {path:"/home", component:Home},  // 首页
    {path: "/login", component: Login},   // 登录
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
    {path:"/searchAdd",component:SearchAdd},
    //填写成功
    // {path:"/shoplist", component: ShopList},
    // 商品筛选
    {path: "/food", component: Food},
    // 商品页
    {path: "/shop", component: Shop},

    //从我的(Mine)跳到服务中心
    {path:"/ServeAdd", component:server1},
    //返回我的
    {path:"/Server",component:Mine},
    //服务中心的子页
    {path:"/ServeChild",component:Vip},
    //返回服务中心
    {path:"/vip",component:server1},
    //Mine页 我的余额
    {path:"/myname",component:MyMoney},

    //到积分页
    {path:"/integral",component:Jf},
    //订单页
    {path:"/indents",component:Ins},
    //我的到订单页
    {path:"/myindext",component:Ins},

    //从Myyuan返回我的
    {path:"/Jumpto",component:Mine},
    {path:"/redd",component:Inter},


    //底部的(我的)跳到Mine
    {path:"/footmine",component:Mine},
    // {path:"/footmine",component:Mine,children:[
    //   {path:"",redirect:"footmine"},
    //     {path:"redd",component:Inter}
    //   ]},
    //兑换说明
    {path:"/linkpath",component:Zhl},
    //余额说明
    {path:"/zhlmoney",component:Zhlmon},
//兑换返回
    {path:"/Jumpto1",component:Jf},
    //余额返回
    {path:"/Jumpto2",component:MyMoney},
//优惠
    {path:"/discounte",component:Youhui},
    //优惠返回我的
    {path:"/blackmine",component:Mine},
//积分商城
    {path:"/mycallasd",component:Myshop},
//     {path:"/pagered",component:Youhui ,children:[
//   {path:"/",redirect:"asd"},
//   {path:"asd",component:Pr}
// ]},
    //红包
    {path:"/pagered",component:Pr},
    //红包说明
    {path:"/redpagesd",component:Ab},
    //过期红包
    {path:"/chistory",component:fouasd}
  ]
})
