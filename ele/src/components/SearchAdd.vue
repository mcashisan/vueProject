<template>
    <div class="searchAdd">
      <div class="head">
<i class="iconfont icon-iconnormaljiantou_baise_" style="color: white" @click="goBack"></i>
      <span>搜索地址</span>
      </div>
      <div class="input1">
        <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="inputV">
     <button  @click="ask">确定</button>
      </div>
      <div class="warn">
        <van-notice-bar
          text="为了满足商家送餐要求，建议您从列表中选择地址"
        />
      </div>
      <ul>
        <li v-for="(v,k) in addRes":key="k">
          <div class="qqq" @click="dianji1(v)">
            <!--<router-link :to="{path:'/address',query:{akl:v.name}}">-->
          <p>{{v.name}}</p>
        <p>{{v.address}}</p>
            <hr>
            <!--</router-link>-->
          </div>
        </li>
      </ul>
      <div class="notfind" v-if="show">
        <p>找不到地址？</p>
        <p>请尝试输入小区、写字楼或学校名</p>
        <p>详细地址（如门牌号）可稍候输入哦。</p>
      </div>

    </div>
</template>

<script>
    export default {
        name: "SearchAdd",
      data(){
          return{
            inputV:"",
            addRes:[],
            show:true,
            akl1:""
          }
      },
      methods:{
          ask(){


            this.myHttp.get("/v1/pois?city_id=1&keyword="+this.inputV+"&type=search",(res=>{
              console.log(res.data)
              this.addRes=res.data;
              // console.log(this.addRes);
            }))
            this.show=false
          },
        dianji1(b){
            console.log(b)
          localStorage.setItem("dizhi",b.address );
          localStorage.setItem("mingzi",b.name );
          this.$router.go(-1)
        },
     goBack(){
       this.$router.go(-1)
     }
      }
    }
</script>

<style scoped>
@import "//at.alicdn.com/t/font_1454015_r6tc05jekw.css";
  span{
    /*margin-left: 1rem;*/
    color: white;
    font-weight: bold;
    margin-top: 1rem;
    font-size: .8rem;
    line-height: 2rem;
  }
  .head{
    text-align: center;
    background-color: #3190e8;
    height: 2rem;
font-weight: bold;
  }
 .iconfont{
   position: absolute;
   left: 1rem;
   top:0.6rem;
 }
  .input1{
    background-color: white;
    height: 2.5rem;
  }
  input{
    background-color:rgb(242,242,242) ;
    border-radius: 0.2rem;
    height: 1.5rem;
    margin-top: 0.5rem;
    margin-left: 0.8rem;
    width: 11rem;
   border: none;
    padding: 0.4rem;
  }
  button{
    width: 3rem;
    height: 1.5rem;
    background-color: rgb(49,153,232);
    border-radius: 0.2rem;
    border: none;
    color: white;
  }
  .warn{
    font-size: 1rem;
  }
  .notfind>p{
    text-align: center;
    font-size: .6rem;
    color: #969696;
    margin-bottom: .5rem;
  }
  .notfind{
    margin-top:4rem;
  }
  .qqq{
    color: #333;
    /*padding: .4rem;*/
    margin: 1rem;

  }
</style>
