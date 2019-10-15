<template>
  <div class="res">
    <nav id="headers">
      <div class="headers_msg">
        <div class="header_left" @click="goback">
          <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
        </div>
        <div class="header_con">编辑地址</div>
        <div class="header_left"></div>
      </div>
    </nav>
    <div class="get1">
<p>{{input1}}</p>
      <p>{{input2}}</p>
    </div>
    <router-link :to="{path:'/address'}"><div class="add">点击新增地址</div></router-link>
  </div>


</template>

<script>
    export default {
        name: "Address",
      data(){
          return{
            input1:"",

            input2:""
          }

      },
      methods:{
          goback(){
            this.$router.go(-1)
          }
      },
      created(){
          this.input1=this.$route.query.int1;
          this.input2 =this.$route.query.int2
        console.log(this.$route.query.int2)
      }


    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_89o5dxhawbk.css";
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
.add{
  width: 16rem;
  height: 2rem;
  background-color: white;
  padding: 0.5rem;
  margin-top: 0.21rem;
  font-size: 0.6rem;
  color: black;

}
  a{
    color: white;
    font-size: .6rem;
    text-decoration: none;
  }
 .get1{
   /*height: 2rem;*/
   background-color: pink;
 }
  .get1>p{
    margin-left: 1rem;
    font-size: 0.7rem;

  }

</style>

