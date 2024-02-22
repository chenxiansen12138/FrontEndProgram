

<template>
  <div class="app">
    <h1>Hello Vue3</h1>
    <Person/>
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
import Person from './components/Person.vue'
export default {
  name:'App', //组件名
  components: {Person} //注册组件
}
</script>