<template>
  <div id="title">
    <div id="and">
        <router-link to="vip" id="left" style="text-decoration: none;color: white" @click="centerAnd">
          <
      </router-link>
      <div id="download">{{nama}}</div>
    </div>
    <div style="font-size: 1.5rem">{{nams}}</div>
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
      created(){
          this.nama=this.$route.query.name;
          this.nams=this.$route.query.zhi;
      },
     methods:{
       centerAnd(){
         this.$router.push({path:"/centerand"})
       }
     }
    }
</script>

<style scoped>
  #title{
    background-color: white;
    position: relative;
  }
  #lowd{
    background-color: white;
    text-align: center;
  }{
    width: 100%;
    height: 100%;
  }
  #and{
    height: 3.5rem;
    background-color:  #3190e8;
    padding-left: 1rem;
    color: white;
  }
  #left{
    float: left;
    font-size: 3rem;
  }
  #download{
    float: left;
    margin-left: 3rem;
    font-size:1.5rem;
    margin-top: 1rem;
  }
</style>
