<template>
    <div id="footers">
      <van-tabbar v-model="active">
        <van-tabbar-item>
          <span>外卖</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.active : icon.normal"
          >
        </van-tabbar-item>
        <van-tabbar-item icon="search">搜索</van-tabbar-item>
        <van-tabbar-item icon="orders-o">订单</van-tabbar-item>
        <van-tabbar-item icon="contact" @click="PageJunpToMine">我的</van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "Footer",

        data() {
          return {
            active: 0,
            icon: {
              normal: require('./img/elemn.png'),
              active: require('./img/elema.png')
            }
          }
        },
      methods:{
          //跳到Mine页面
        PageJunpToMine(){
          this.$router.push({path:"/footmine"});
        }
      }
    }
</script>

<style scoped>
  #footers {

  }
</style>
