<template>
    <div id="title">
      <!--导航条-->
      <div id="left">
        <nav id="headers">
          <div class="headers_msg">
            <div class="header_left">
              <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;" @click="clickxianqing"></i>
            </div>
            <div class="header_con">商家详情</div>
            <div class="header_left"></div>
          </div>
        </nav>
      </div>
      <!--食品监督安全公示-->
      <div id="kuery">
        <div id="aq">
          <p id="gs1">食品监督安全公示</p>
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
      <!--工商登记信息-->
      <div class="andcenter">
        <p style="font-size: 0.8rem">工商登记信息</p>
        <ul>
          <li>企业名称</li>
          <li>工商执照注册号</li>
          <li>注册资本</li>
          <li>注册地址</li>
          <li>属地监督所</li>
          <li>法定代表人</li>
          <li>经营范围</li>
        </ul>
      </div>
      <!--餐饮许可证-->
      <div class="andcenter">
        <p style="font-size: 0.8rem">餐饮许可证</p>
        <ul>
          <li>营业范围</li>
          <li>许可证有效期</li>
          <li>许可证号</li>
          <li>发证时间</li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Onetwo",
      methods:{
          //返回详情
        clickxianqing(){
          this.$router.push({path:"/aaazhi"})
        }
      }
    }
</script>

<style scoped>
  /*导航条*/
  @import "//at.alicdn.com/t/font_1084936_492sa80v98i.css";
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
    font-size: 0.8rem;
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
  /*工商登记信息*/
  .andcenter{
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
</style>
