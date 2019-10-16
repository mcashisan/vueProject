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
    <div class="msg">
      <p>快速备注</p>
      <div class="many">
          <span v-for="(x,y) in arr" :key="y" class="s">
            <span v-for="(v,i) in x" :key="i" class="s1" @click="dians(v,i,y)" >
              <span :class="{dian:bgc}" >{{v}}</span>
            </span>
          </span>
      </div>
    </div>
    <div class="last">
      <p>其他备注</p>
      <textarea  placeholder="请输入备注内容(可不填)"></textarea>
    </div>
    <button class="btn">确定</button>
  </div>
</template>

<script>
  export default {
    name: "OrderNotes",
    data(){
      return{
        arr:[],
        bgc:false,
        akl1:"",
        akl2:""
      }
    },
    methods:{
      goback(){
        this.$router.go(-1)
      },
      order(){
    this.myHttp.get("/v1/carts/1/remarks",(res)=>{
      this.arr=res.data.remarks
    })
      },
      dians(v,i,y){
        // this.bgc = !this.bgc;
        console.log(v,i,y)
        // if ()
        // this.akl1 = i
        // this.akl2 = y
        if(this.akl1==i&&this.akl2==y){
this.bgc=true
        }
      }
    },
    created(){
      this. order()
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
</style>
