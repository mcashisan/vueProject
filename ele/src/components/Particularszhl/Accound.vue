<template>
    <div id="title">
      <div id="blueand">
      <router-link :to="{}" id="toaccound"><</router-link>
        <div id="accsd">积分问题</div>
    </div>
      <div style="clear: both"></div>
      <p></p>
      <p></p>
    </div>
</template>

<script>
    export default {
        name: "Accound"
    }
</script>

<style scoped>
#blueand{
  width: 100%;
  background-color:#3190e8;
}
  #toaccound{
    float: left;
  }
  #accsd{
    float: left;
  }
</style>
