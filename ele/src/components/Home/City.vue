<template>
    <div id="city">
      <!--导航条-->
      <nav id="headers">
        <div class="headers_msg">
          <div class="header_left" @click="goOut">
            <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
          </div>
          <div class="header_con">{{getCityName}}</div>
          <div class="header_left" @click="qieHuan">切换城市</div>
        </div>
      </nav>
      <!---->
      <div class="city_header">
        <div class="newMsg">
          <input placeholder="输入学校, 商务楼, 地址" v-model="valMessage" type="search">
        </div>
        <button class="subBot" @click="submitMessage">提交</button>
      </div>
      <div>
        <p class="search_history">搜索历史</p>
        <ol class="search_history_list searchList" v-if="isFalse">
          <li @click="saveData(v,index)" v-for="(v, index) in obj" :key="index">
            <p style="color: #000;">{{v.name}}</p>
            <p class="searchListTitle">{{v.address}}</p>
          </li>
          <div @click="clearData" class="search_history_clear"v-if="obj != ''">清空所有</div>
        </ol>
      </div>
      <!--搜索返回的数据列表-->
      <!--<div class="searchList">-->
        <ol class="searchList">
            <li @click="saveData(v,index)" v-for="(v, index) in dataList" :key="index">
              <p style="color: #000;">{{v.name}}</p>
              <p class="searchListTitle">{{v.address}}</p>
            </li>
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
            dataList: [],
            // 显示/隐藏
            show_none: false,
            obj:[],//存储解析过的对象
            his:[],//存放json对象
          }
      },
        methods: {
          // 返回上一级
          goOut() {
            this.$router.go(-1);
          },
          //切换城市
          qieHuan() {
            this.$router.push({path:"/home"});
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
          },
          saveData(v,index){
            const info = {name:v.name,address:v.address}
            localStorage.setItem(index,JSON.stringify(info));
            console.log(info);
            this.$router.push({path: "/msite", query:{geoHash:v.address, aaa:v.geohash}})
          },
          // 清空历史记录
          clearData() {
            localStorage.clear();
            this.isFalse = false;
          }
        },
        computed: {
          getCityName() {
            return this.$route.query.name;
          },
          // 输入框 x 号显示事件
          changeShow() {
            this.show_none = true;
          }
        },
      created(){
        for (let i = 0; i < 20; i++) {
          var historys = localStorage.getItem(i + "");
          // console.log(historys);
          if (historys) {
            this.his.push(historys);
          }
        }
        for (let i in this.his) {
          this.obj.push(JSON.parse(this.his[i]));
          // console.log(JSON.parse(this.his[i]))
        }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_sgqu6lcw6p.css";
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
    width: 20%;
    text-align: left;
  }

  .header_con {
    width: 60%;
    font-size: 1rem;
    font-weight: bold;
  }

  /*搜索框*/
  .city_header {
    margin-top: 0.5rem;
    padding: 0.5rem 0.8rem;
    background: #fff;
  }

  .newMsg {
    width: 100%;
    padding: 0.5rem 0.3rem;
    border: 0.01rem solid #e4e4e4;
  }

  .newMsg > input {
    width: 90%;
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
  
  .search_history_clear {
    text-align: center;
    padding: 0.6rem 0;
  }
  
  /*搜索结果显示列表*/
  .searchList {
    margin-top: 0.2rem;
    background: #fff;
  }

  .searchList li {
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
