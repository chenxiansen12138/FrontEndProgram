<script setup lang="ts">
import {RouterView,RouterLink} from "vue-router";
</script>

<template>
  <div class="router">
    <h1>Vue3.0中的router</h1>
    <RouterLink to="/star1" active-class="active">金谷宇乃</RouterLink>
    <RouterLink :to="{name:'star2'}" active-class="active">白石茉莉奈</RouterLink>
    <RouterLink :to="{path:'/star3'}" active-class="active">弥生美月</RouterLink>
  </div>
  <div>
    <RouterView name="starRoute"></RouterView>
  </div>
</template>

<style scoped>
.router {
  background-color: lightblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
a{
  width: 200px;
  height: 60px;
  margin: 20px;
}
</style>