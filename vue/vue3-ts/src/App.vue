

<template>
  <div class="app">
    <h1>Hello Vue3</h1>
    <Person/>
    <Ref/>
    <hr>
    <Reactive/>
  </div>
</template>

<style scoped>
.app {
  background-color: #dddddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>

<script lang="ts">
import Person from './components/01_SetUp.vue'
import Ref from './components/02_Ref.vue'
import Reactive from './components/03_Reactive.vue'
export default {
  name:'App', //组件名
  components: {Person,Ref,Reactive} //注册组件
}
</script>