<template>
  <div id="title">
    <div>
      <nav id="headers">
        <div class="headers_msg">
          <div class="header_left">
            <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;" @click="sentersever"><</i>
          </div>
          <div class="header_con">{{nama}}</div>
          <div class="header_left"></div>
        </div>
      </nav>
    </div>
    <div style="font-size: 1rem">{{nams}}</div>
  </div>
</template>

<script>
    export default {
        name: "Vip",
      data(){
        return {
          gain:[],
          nama:"",
          nams:""
        }
      },
      methods:{
        sentersever(){
          this.$router.push({path:"/ServeAdd"})
        }
      },
      created(){
          this.nama=this.$route.query.name;
          this.nams=this.$route.query.zhi;
          console.log(this.nams);
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
  #title{
    background-color: white;
    position: relative;
  }
</style>
