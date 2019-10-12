<template>
    <div id="city">
      <!--导航条-->
      <nav id="headers">
        <div class="row" style="display:flex; justify-content: space-between;text-align: center;">
          <div @click="goOut"><</div>
          <div>{{getCityName}}</div>
          <router-link :to="{path:'/'}">
            <div>切换城市</div>
          </router-link>
        </div>
      </nav>
      <!---->
      <div class="city_header">
        <div>
          <input type="text" placeholder="输入学校, 商务楼, 地址" v-model="valMessage">
        </div>
        <button class="subBot" @click="submitMessage">提交</button>
      </div>
      <div v-if="isFalse">
        <p class="search_history">搜索历史</p>
      </div>
      <!--搜索返回的数据列表-->
      <!--<div class="searchList">-->
        <ol class="searchList">
            <router-link v-for="(v, index) in dataList" :key="index" :to="{path:'/msite', query:{geoHash:v.address, aaa:v.geohash}}">
              <p style="color: #000;">{{v.name}}</p>
              <p class="searchListTitle">{{v.address}}</p>
            </router-link>
        </ol>
      <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "City",
      data() {
          return {
            isFalse:true,
            id: "",
            valMessage:"",
            // 搜索数据
            dataList: []
          }
      },
        methods: {
          // 返回上一级
          goOut() {
            this.$router.go(-1)
          },
          submitMessage() {
            this.isFalse = false;
            this.id = this.$route.query.id; // 赋值id
            this.myHttp.get("/v1/pois?city_id="+this.id+"&keyword="+this.valMessage, (res) => {
              // console.log(res);
              this.dataList = res.data;
            }, (err) => {
              console.log(err);
            });
            // console.log(this.id);
          }
        },
        computed: {
          getCityName() {
            return this.$route.query.name;
          }
        }
    }
</script>

<style scoped>
  #headers {
    height: 2rem;
    padding: 0 0.5rem;
    color: white;
    line-height: 2rem;
    background: #3190e8;
  }

  a {
    color: #fff;
  }

  /*搜索框*/
  .city_header {
    margin-top: 0.5rem;
    padding: 0.5rem 0.8rem;
    background: #fff;
  }

  .city_header > div {
    width: 95%;
    padding: 0.45rem 0.3rem;
    border: 0.01rem solid #e4e4e4;
  }

  .city_header > div > input {
    border: none;
    outline: none;
    font-size: 0.6rem;
  }

  .subBot {
    width: 100%;
    height: 1.7rem;
    margin-top: 0.6rem;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 0.1rem;
    background: #3190e8;
  }

  /*搜索历史*/
  .search_history {
    padding: 0.05rem 0.5rem;
    border: 0.05rem solid #e4e4e4;
    border-left: 0;
    border-right: 0;
    color: black;
  }
  
  
  
  /*搜索结果显示列表*/
  .searchList {
    margin-top: 0.2rem;
    background: #fff;
  }

  .searchList a {
    display: block;
    text-align: left;
    padding: 1rem;
    border-bottom: 0.01rem solid #e4e4e4;
    color: #999;
  }

  .searchListTitle {
    font-size: 0.4rem;
    margin-top: 0.3rem;
  }
</style>
