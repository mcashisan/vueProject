<template>
  <div id="home">
    <!--当前城市, 定位城市-->
    <!--热门城市列表-->
    <!--所有城市列表-->
    <div class="container-fluid">
      <div v-for="(con, index) in arr1" :key="index" class="row">
        <div class="col-md-12" style="border: 0.01rem solid black;border-left: 0;border-right: 0;">
          <p>{{con}}</p>
        </div>
        <div v-for="(con1, index) in arr2[con]" :key="index">
          <span class="col-md-3">{{con1.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        arr1: [],
        arr2: []
      }
    },
    methods: {
      //热门城市
      hotCity() {
        this.myHttp.get("/v1/cities?type=group", (res) => {
          console.log(res);
        }, (err) => {
          console.log(err);
        });
      },
      //所有城市列表请求
      allCity() {
        this.myHttp.get("/v1/cities?type=group", (res) => {
          this.arr2 = res.data;
          for (let v in res.data) {
            this.arr1.push(v);
          }
          this.arr1.sort();
        }, (err) => {
          console.log(err);
        });
      }
    },
    created() {
      this.allCity();
    }
  }
</script>

<style scoped>
  #home {
   font-size: 1.2rem;
  }

  .allCity {
    background: white;
  }

  .cityList span {
    border: 0.01rem solid black;
    border-top: 0;
  }
</style>
