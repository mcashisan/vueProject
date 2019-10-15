<template>
  <div id="title">
    <!--导航条-->
    <div>
    <nav id="headers">
      <div class="headers_msg">
        <div class="header_left">
          <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;" @click="blackrepage"><</i>
        </div>
        <div class="header_con">历史红包</div>
        <div class="header_left"></div>
      </div>
    </nav>
    </div>
    <ul>
      <li v-for="(v,index) in mayte" :key="index">
        <img src="../../img/hong2.png" id="img1"/>
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
        <div id="s"><img src="../../img/hong1.png"id="img2"/></div>
        <div id="asd" style="clear: both"></div>
        <p style="background: rgba(0,0,0,0.07);padding: 0.5rem">{{}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Canhistory",
      data(){
        return {
          //接收总体数据
          mayte:[],
          //接收循环过的数据
          maa:{}
        }
      },
      created(){
          this.myHttp.get("/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0",(res)=>{
            console.log(res);
            this.mayte=res.data;
            console.log(this.mayte);
            this.maa=this.mayte.limit_map;
            console.log(this.maa);
            // for (let i=0;i<this.mayte.length;i++){
            //   this.maa+=this.mayte[i];
            //   console.log(this.maa);
            // }
          })
      },
      methods:{
        blackrepage(){
          this.$router.push({path:"/pagered"})
        }
      }
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
  #img1{
    width: 100%;
    margin-top: 0;
    padding-top: 0;
  }
  #img2{
    width: 2rem;
    height: 2rem;
    padding-top: 0;
    margin-top: 0;
    border-radius: 50%;
  }
</style>
