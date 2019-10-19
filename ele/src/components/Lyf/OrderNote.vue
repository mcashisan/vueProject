<template>
  <div>
    <nav id="headers">
      <div class="headers_msg">
        <div class="header_left" @click="goback">
          <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
        </div>
        <div class="header_con">订单备注</div>
        <div class="header_left"></div>
      </div>
    </nav>
    <!--<div class="msg">-->
        <!--<ul>-->
          <!--<li>-->
            <!--<span style="float:left;">快速备注</span>-->
          <!--<span v-for="(v,inde) in arr" :key="inde" >-->
            <!--<span  v-for="(va,a) in v" :key="a" :class="akl1[a][0] == inde?{cans:true}:{cans:false}" @click="Chooset(a,inde)" style="float: right; margin-right: 0.5rem;border: 1px solid rgba(0,0,0,0.06); padding: 0.2rem">{{va}}>-->
             <!--<div style="clear: both;"></div>-->
            <!--</span>-->
          <!--</span>-->

          <!--</li>-->
          <!--&lt;!&ndash;<li v-for="(va,a) in v" :key="a" :class="akl1[a][0] == inde?{cans:true}:{cans:false}" @click="Chooset(a,inde)">{{va}}</li>&ndash;&gt;-->
        <!--</ul>-->
    <!--</div>-->
    <div class="header-style">快速备注</div>
    <ul class="remark_arr_list_ul">
      <li v-for="(v,inde) in arr" :key="inde">
        <span  class="first last" v-for="(va,a) in v" :key="a" :class="akl1[inde][0] == a?{cans:true}:{cans:false}" @click="Chooset(inde,a)" >{{va}}</span>
      </li>
    </ul>
    <div class="last">
      <p>其他备注</p>
      <textarea  placeholder="请输入备注内容(可不填)" v-model="ak3"></textarea>
    </div>
    <button class="btn" @click="gobackpanduan">确定</button>
  </div>
</template>

<script>
  export default {
    name: "OrderNotes",
    data(){
      return{
        arr:[],
        bgc:false,
        akl1:[[100],[100],[100],[100],[100],[100]],
        akl2:[],
        ak3:[],
      }
    },
    methods:{
      goback(){
        this.$router.go(-1);
  },
      Chooset(a,b){
        this.akl1[a][0]=b;
        console.log(this.akl1[a][0]);
        this.akl1=[...this.akl1];
        console.log(this.akl1);
      },
      gobackpanduan(){
        for (let i = 0; i < this.arr.length ; i++) {
          if (this.arr[i][this.akl1[i]]==undefined){
            continue;
          }
          this.akl2.push(this.arr[i][this.akl1[i]]);
          console.log(this.akl2);
        };
        this.$router.push({
          name:"ordercon",
          params:{
            cas: JSON.stringify(this.akl2),
            cans:this.ak3
          }
        })
      }
    },
    created(){
      this.myHttp.get("/v1/carts/1/remarks",(res)=>{
        this.arr=res.data.remarks;
      })
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
  .msg{
    background-color: white;
    padding: 1rem;
    margin-top: 0.8rem;
  }
  .msg>p{
    margin-bottom: 0.5rem;
  }
  .s{
    /*background-color:#3190e8;*/
    margin-left: 1rem;
    display: block;
    float: left;
    color: #333333;
    margin-bottom: 1rem;
    /*border-top: .05rem solid #3190e8;*/
    border: 0.05rem solid #3190e8;
    border-radius: 0.2rem;
  }
  .s1{
    display: block;
    float: left;
    /*padding: 0.2rem 0.4rem ;*/
    /*background-color:#3190e8;*/
    /*border-left: 0.05rem solid #3190e8;*/
    border: 0.05rem solid #3190e8;
    /*padding: 0 0.5rem;*/
    font-size: 1rem;
  }

  .many{
    overflow: hidden;
  }
  .last{
    background-color: white;
    margin-top: 1rem;
    padding: 1rem;
  }
  .last>p{
    margin-bottom: 1rem;
  }
  textarea{
    width: 100%;
    background-color: #f9f9f9;
    border: .05rem solid #eee;
    resize: none;
    min-height: 7rem;
    border-radius: .2rem;
    box-sizing: border-box;
    color: #666;
    padding: .5rem;
  }
  .btn{
    background-color: #4cd964;
    color: #fff;
    text-align: center;
    margin-left: 1.5rem;
    line-height: 1.8rem;
    border-radius: .4rem;
    /*padding: 0.6rem 9rem;*/
    border: none;
    margin-top: 0;
   padding: 0 6rem;
  }
  .dian{
    background-color:#3190e8;
    color: white;
  }
ul{
  background-color: white;
  width: 100%;
}
  .cans{
    background-color: #3190e8;
    color:#fff;
  }
  .remark_arr_list_ul{
    display: flex;
    flex-wrap: wrap;
  }
  .remark_arr_list_ul li{
    margin-right: .7rem;
    margin-bottom: .9rem;
  }
  .remark_arr_list_ul li span{
    font-size: .7rem;
    padding: .4rem .7rem;
    border: .025rem solid #3190e8;
  }
  .header-style{
    font-size: .75rem;
    color: #333;
    line-height: 2rem;
  }
</style>
