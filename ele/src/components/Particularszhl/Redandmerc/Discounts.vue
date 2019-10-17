<template>
  <div id="title">
  <!--导航条-->
    <div>
  <nav id="headers">
    <div class="headers_msg">
      <div class="header_left">
        <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;" @click="blackdiscounts"><</i>
      </div>
      <div class="header_con">我的优惠</div>
      <div class="header_left"></div>
    </div>
  </nav>
  </div>
<div id="andDiv">
    <span  class="activeClass" v-for="(vs,ab) in itemList" :class="{'red-link':ab}===isActivea" @click="getItem(vs, ab)">{{vs}}</span>
</div>
    <!--红包-->
    <div id="redpage" v-if="ShowData">
    <div>
      <div id="title_tou">
        <p id="p1">有<span id="s1">3</span>个红包即将到期</p>
        <p id="p2" @click="redpagespeakmrint"><span id="s2">?</span>红包说明</p>
        <div id="enpty" style="clear: both"></div>
      </div>
      <ul>
        <li v-for="(v,indes) in aa" :key="indes">
          <div id="reads">
            <span id="a">￥</span>
            <span id="b">{{v.amount}}</span>
            <span id="c">.0</span>
            <p id="d">{{v.description_map.sum_condition}}</p>
          </div>
          <div id="centerand">
            <h4>{{v.name}}</h4>
            <span>{{v.description_map.validity_periods}}</span><br>
            <span>{{v.description_map.phone}}</span>
          </div>
          <div id="s">{{v.description_map.validity_delta}}</div>
          <div id="asd" style="clear: both"></div>
        </li>
      </ul>
      <p id="vis">限品类:快餐便当、特色菜系、小吃夜宵、甜品饮食、异国料理</p>
      <p style="text-align: center;margin-top: 1.5rem" @click="canhistory">查看历史&nbsp;></p>
    </div>
    <div id="footers">
      <van-tabbar v-model="active">
        <van-tabbar-item @click="duihuanhongbao">兑换红包</van-tabbar-item>
        <van-tabbar-item @click="recommend">推荐有奖</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
    <!--代金券-->
    <div v-if="ShowTwo">
      <router-link :to="{path:'/shopdjq'}" id="speekm"><span id="sp">?</span><span style="color: royalblue">商家代金券说明</span></router-link>
      <div id="imgandp">
      <img src="../../img/shopddd.png" id="andimg"/>
      <p id="pi">无法使用代金券</p>
      <p id="pm">非客户端或客户端版本多低</p>
      <router-link :to="{path:'/redd'}" id="pg">下载或升级客户端</router-link>
    </div></div>
  </div>
</template>

<script>
    export default {
        name: "Discounts",
      data(){
          return{
            //数据库的值
            aa:[],
            active: 0,
            //
            isActivea:0,
            //标题
            itemList: ['红包', '商家代金券'],
            ShowData:true,
            ShowTwo:false,
            p:"",
            hasdp:[],
          }
      },
      methods:{
        blackdiscounts(){
          this.$router.push({path:"/footmine"})
        },
        redpagespeakmrint(){
          this.$router.push({path:"/redpagesd"})
        },
        //查看历史
        canhistory(){
          this.$router.push({path:"/chistory"})
        },
        //兑换红包
        duihuanhongbao(){
          this.$router.push({path:"/blueread"})
        },
        //推荐有奖
        recommend(){
          this.$router.push({path:"/recomd"})
        },
        getItem(data,index){
          this.isActivea=index;//把当前点击元素给index
          let asd=this.itemList;
          for (let i=0;i<asd.length;i++){
            if (data==asd[i]){
              this.ShowData=false;
              this.ShowTwo=true;
            }else{
              this.ShowData=true;
              this.ShowTwo=false;
            }
          }
        }
      },
      created(){
        this.myHttp.get("/promotion/v2/users/1/hongbaos?limit=20&offset=0",(res)=>{
          this.aa=res.data;
        })},
    }
</script>

<style scoped>
  /*导航条*/
  #headers {
    height: 2rem;
    padding: 0 0.5rem;
    color: white;
    line-height: 2rem;
    background: #3190e8;
  }
  .headers_msg {
    display:flex;
    justify-content: space-between;
    text-align: center;
  }
  .header_left {
    width: 10%;
  }
  .header_con {
    width: 60%;
    font-size: 1rem;
    font-weight: bold;
  }
  .login_header, .login_bottom {
    padding: 0.5rem;
  }
  .login_header > div {
    width: 55%;
  }
  .login_header > div > input {
    width: 100%;
    font-size: 0.75rem;
    border: none;
    outline: none;
  }


  /*红包and代金券*/
  #andDiv{
  width: 100%;
  height: 2rem;
  background-color: white;
    font-size: 0.69rem;
    padding-top: 0.7rem;
}
  .activeClass{
margin:0 2.5rem;
  }

  /*代金券*/

#speekm{
  display: inline-block;
  margin-left: 65%;
  margin-top: 0.5rem;
}
  #sp{
    border: 1px solid royalblue;
    border-radius: 50%;
    background-color: royalblue;
    color: white;
margin-right: 0.3rem;
    padding: 0 0.2rem;
  }
  #imgandp{
    margin-top: 3rem;
    text-align: center;
  }
  #andimg{
    margin-bottom: 0.65rem;
  }
  #pi{
    font-size: 0.78rem;
    margin: 0;
  }
  #pm{
    margin-top: 0.3rem;
  }
  #pg{
    background-color: #56d176;
    font-size: 0.68rem;
    text-decoration: none;
    color:white;
    padding: 0.5rem;
    margin-top: 0.3rem;
  }


  /*红包*/

  #title_tou{
    padding-top: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
    padding-bottom: 0.3rem;
  }
  #p1{
    float: left;
  }
  #p2{
    float: right;
    color:cornflowerblue;
  }
  #s1{
    color: orangered;
  }
  #s2{
    color: white;
    background-color: cornflowerblue;
    border-radius: 50%;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    margin-right: 0.3rem;
  }
  ul{
    padding-top: 0.1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 0.5rem;
  }
  li{
    background-color: white;
    width: 100%;
    margin-bottom: 0.5rem;
  }
  #reads{
    width: 23%;
    border-right: 1px solid rgba(0,0,0,0.08);
    float: left;
    margin-left: 0.5rem;
    margin-right: 0.7rem;
    margin-top: 1rem;
    padding-right: 0.25rem;
  }
  #a{
    color: orangered;
    /*float: left;*/
  }
  #b{
    color: orangered;
    /*float: left;*/
    font-size: 1rem;
  }
  #c{
    color: orangered;
    /*float: left;*/
  }
  #centerand{
    float: left;
    margin-top: 0.5rem;
    padding-bottom: 1rem;
  }
  h4{
    margin-bottom: 0;
    padding-bottom: 0.1rem;
  }
  #s{
    float: right;
    color: orangered;
    margin-top: 1rem;
    font-size: 0.67rem;
    margin-right: 0.5rem;
  }
  #vis{
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.37rem;
    padding-bottom: 0.5rem;
    background-color: rgba(0,0,0,0.01);
  }
</style>
