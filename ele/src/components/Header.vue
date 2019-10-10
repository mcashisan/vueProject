<template>
    <div id="headers">
      <h1>这是头部导航条</h1>
      <router-link :to="{path:'/'}">child1页面</router-link>
      ----------
      <router-link :to="{}">child2页面</router-link>
      ----------
      <router-link :to="{}">child3页面</router-link>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  #headers {
    width: 100%;
    height: 10%;
    background: red;
  }
</style>
