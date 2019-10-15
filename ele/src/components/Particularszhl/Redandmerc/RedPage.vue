<template>
    <div id="title">
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
</template>
<script>
    export default {
        name: "RedPage",
      data(){
          return {
            //接收请求到的值
            aa:[],
            active: 0,
          }
      },
      created(){
          this.myHttp.get("/promotion/v2/users/1/hongbaos?limit=20&offset=0",(res)=>{
            this.aa=res.data;
          })},
      methods:{
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
        }
      }
    }
</script>

<style scoped>
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
