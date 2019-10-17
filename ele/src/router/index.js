import Vue from 'vue'
import Router from 'vue-router'
//引入组件配置路由
import Home from "../components/Home/Home"
import Login from "../components/Login"
import search from "../components/Lyf/Search" // 搜索页面
import OrderList from "../components/Order/OrderList"
//
//重置密码
import Reset from "../components/Lyf/ResetPassword"
//添加地址
import Address from "../components/Lyf/Address"
//添加地址1
import AddAddress from "../components/Lyf/AddAddress"
//账户信息
import AccountInfo from "../components/AccountInfoLyf"
//支付倒计时
import PayTime from  "../components/Particularszhl/PayTime"
//修改用户名
import changeU from "../components/ChangeUsername"

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
// 商品页下拉框
// import ShopClassify from "../components/Home/ShopCar/ShopClassify"
//筛选
import foodSort from "../components/Home/ShopCar/SortData"

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

//红包说明
import Ab from '../components/Particularszhl/Redandmerc/Thatred'
//过期红包
import fouasd from '../components/Particularszhl/Redandmerc/Canhistory'

//搜索页面
import Search from '../components/Lyf/Search'
//会员中心
import VipCard from '../components/Lyf/VipCard'
//我的优惠
import VipDes from '../components/Lyf/VipDes'
//兑换会员
import VipCon from '../components/Lyf/VipCon'
//开发票
import VipInv from '../components/Lyf/VipInv'
//积分商城
import VipShop from '../components/Lyf/VipShop'
//确认订单
import OrderCon from '../components/Lyf/OrderCon'
//订单备注
import OrderNote from '../components/Lyf/OrderNote'

//兑换红包
import Dhredpage from '../components/Particularszhl/Redandmerc/Fourredpage'
//推荐有奖
import Rc from '../components/Particularszhl/Redandmerc/Recommendcourteous'
//商家代金券
import  Shopdjq from '../components/Particularszhl/Redandmerc/Redpagespeek'

Vue.use(Router)

export default new Router({
  routes: [
    {path: "/", redirect: "/home"},  // 重定向
    {path:"/home", component:Home},  // 首页
    {path: "/login", component: Login},   // 登录
    {path: "/search", component:search},// 搜索页面
    {path: "/order", component: OrderList}, // 订单页面
    //重置密码
    {path:"/reset",component:Reset},
    //添加地址
    {path:"/saveAddress",component:Address},
    //添加地址1
    {path:"/address",component:AddAddress},
    // 城市搜索
    {path: "/city", component: City},
    //商品展示页面
    {path:"/msite", component: Msite},
    //
    {path:"/shoplist", component: ShopList},

    //  个人账户信息
    {path:"/account",component:AccountInfo},
    // 添加地址内搜索地址
    {path:"/searchAdd",component:SearchAdd},
    //搜索页面
    {path:"/search",component:Search},
    //填写成功
    // {path:"/shoplist", component: ShopList},
    // 商品页下拉框
    // {path: "/shopClassify", component: ShopClassify},
    //筛选
    {path: "/sort", component: foodSort},
    // 商品筛选
    {path: "/food", component: Food},
    // 商品页
    {path: "/shop", component: Shop},


    //从我的(Mine)跳到服务中心
    {path:"/ServeAdd", component:server1},
    //服务中心的子页
    {path:"/ServeChild",component:Vip},
    //Mine页 我的余额
    {path:"/myname",component:MyMoney},
    //到积分页
    {path:"/integral",component:Jf},
    //下载
    {path:"/redd",component:Inter},
    {path:"/ServeAdd", component:server1},
  //  支付倒计时
    {path:"/paytime",component:PayTime},
  //  修改用户名
    {path:"/ChangeUsername",component:changeU},
    //底部的(我的)跳到Mine
    {path:"/footmine",component:Mine},
    //兑换说明
    {path:"/linkpath",component:Zhl},
    //余额说明
    {path:"/zhlmoney",component:Zhlmon},
    //优惠
    {path:"/discounte",component:Youhui},
//积分商城
    {path:"/mycallasd",component:Myshop},
    //红包说明redpagesd
    {path:"/redpagesd",component:Ab},
    //过期红包
    {path:"/chistory",component:fouasd},
  //  会员中心
    {path:"/vipcard",component:VipCard},
  //  我的优惠
    {path:"/vipdes",component:VipDes},
  //  兑换会员
    {path:"/vipcon",component: VipCon},
  //  开发票
    {path:"/vipinv",component:VipInv},
  //  积分商城
    {path:"/vipshop",component:VipShop},
  //  确认订单
    {path:"/ordercon",component:OrderCon},
  //  订单备注
    {path:"/ordernote",component:OrderNote},
    //兑换红包
    {path:"/blueread",component:Dhredpage},
    //返回
    {path:"/pagered",component:Youhui},
    //推荐有奖
    {path:"/recomd",component:Rc},
     //商家代金券
    {path:"/shopdjq",component:Shopdjq},

  ]
})
