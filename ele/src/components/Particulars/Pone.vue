<template>
    <div id="title">
      <!--导航条-->
      <div id="left">
        <nav id="headers">
          <div class="headers_msg">
            <div class="header_left">
              <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;" @click="blackshop"></i>
            </div>
            <div class="header_con">商家详情</div>
            <div class="header_left"></div>
          </div>
        </nav>
      </div>
      <!--活动属性-->
      <div id="andcenter">
        <p style="font-size: 0.8rem">活动与属性</p>
        <ul>
          <li><span id="s1">减</span><span>满30减5，满60减8(APP专享)</span></li>
          <li><span id="s2">保</span><span>已加入"外卖保"计划,食品安全有保障(APP专享)</span></li>
          <li><span id="s3">准</span><span>准时必达,超时秒陪(APP专享)</span></li>
          <li><span id="s4">票</span><span>该商家支持开发票,请在下单时填写好发票抬头(APP专享)</span></li>
        </ul>
      </div>
      <!--食品监督安全公示-->
      <div id="kuery">
        <div id="aq">
          <p id="gs1">食品监督安全公示</p>
          <p id="xq" @click="Enterprisecertification">企业认证详情<img src="../img/big.png" style="width: 0.68rem;" /></p>
          <div style="clear:both;"></div>
        </div>
        <div id="laugh">
          <img src="../img/not.png" id="img1"/>
          <div id="llright">
            <p><span>监督检查结果</span><span style="color: orangered; padding-left:1rem">差</span></p>
            <p>检查日期</p>
          </div>
          <div style="clear: both;"></div>
        </div>
      </div>
      <!--商家信息-->
        <div id="foot">
          <p>商家信息</p>
          <ul id="ulli">
            <li>北京烤鸭</li>
            <li>地址:北京市顺义区前风波村一街36号水单费</li>
            <li>营业时间:[06:30/09:00]</li>
          </ul>

      </div>
    </div>
</template>

<script>
    export default {
        name: "Pone",
      props:{
          rex:[]//声明传递过来的数据类型
      },
      data(){
        return{
          asf:[]//定义一个变量接收值
        }
      },
      methods:{
        //  企业认证详情
        Enterprisecertification(){
          this.$router.push({path:"/enterpzhl"})
        },
        bbbbb(){
          this.asf=this.rex;
        },
        blackshop(){
          // this.$router.push({path:"/shop",query:conName});
         // this.conName=this.$router.query.conName;
          this.$router.go(-1);
        }
      },
      watch:{
        rex(){
          this.newListData();//实时监听从父级传来的数据
        }
      },
      created(){
          // this.myHttp.get("/shopping/restaurant/1",(res)=>{
        //   console.log(res);
        //   let aa=res.data;
        //   let a=aa.supports;
        //   console.log(a);
        //   let b=aa.activities;
        //   console.log(b);
        // })
        // let a=JSON.parse(this.$route.query.newListData);
        // console.log(a);
        // let data = JSON.parse(this.$route.query.newListData);
        // console.log(data);
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_492sa80v98i.css";
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
  /*活动属性*/
  #andcenter{
    margin-top: 0.6rem;
    background-color: white;
    padding: 0.45rem 0.7rem;
  }
  li{
    padding: 0.3rem;
  }
  #s1{
    background-color: indianred;
    padding: 0.15rem 0.1rem;
    color:white;
    margin-right: 0.38rem;
  }
  #s2{
    background-color: rgba(0,0,0,0.45);
    padding: 0.15rem 0.1rem;
    color:white;
    margin-right: 0.38rem;
  }
  #s3{
    background-color: deepskyblue;
    padding: 0.15rem 0.1rem;
    color:white;
    margin-right: 0.38rem;
  }
  #s4{
    background-color: rgba(0,0,0,0.45);
    padding: 0.15rem 0.1rem;
    color:white;
    margin-right: 0.38rem;
  }
  /*安全公示*/
  #kuery{
    width: 100%;
    background-color: white;
    margin-top: 0.5rem;
  }
  #laugh{
    padding-left: 0.5rem;
  }
  #aq{
    width: 100%;
    padding: 0.5rem;
  }
  #gs1{
    float: left;
    font-size: 0.8rem;
  }
  #xq{
    float: right;
    font-size: 0.6rem;
  }
  #img1{
    width: 2rem;
    float: left;
  }
  #llright{
    float: left;
    padding-left: 0.5rem;
    padding-top: 0.5rem;
  }
  /*商家信息*/
  #foot{
    margin-top: 0.5rem;
    background-color: white;
    padding: 0.5rem;
  }
  #ulli>li{
    padding: 0.6rem 0;
  }
</style>
