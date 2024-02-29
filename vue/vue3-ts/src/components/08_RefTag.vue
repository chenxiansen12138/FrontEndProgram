<script setup lang="ts">
import {ref, defineExpose} from 'vue';

let mi = ref();
// 暴露给父组件
defineExpose({
  mi
})
</script>

<template>
  <div class="refTag">
    <h2>Vue3.0中的RefTag</h2>
    <h2>风间由美</h2>
    <h2>金谷宇乃</h2>
    <h2 ref="mi">弥生美月</h2>
  </div>
</template>

<style scoped>
.refTag {
  background-color: beige;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  width: 200px;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  margin: 10px;
}
</style>