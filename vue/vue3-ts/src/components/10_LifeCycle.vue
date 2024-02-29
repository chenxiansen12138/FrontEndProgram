<script setup lang="ts">
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from "vue";

console.log("生命创建");
onBeforeMount(() => {
  console.log("生命挂载前");
})
onMounted(() => {
  console.log("生命挂载完成");
})
onBeforeUpdate(() => {
  console.log("生命更新前");
})
onUpdated(() => {
  console.log("生命更新完成");
})
onBeforeUnmount(() => {
  console.log("生命卸载前");
})
onUnmounted(() => {
  console.log("生命卸载完成");
})
</script>

<template>
  <div class="lifeCycle">
    <h2>Vue3.0的基本生命周期</h2>
  </div>
</template>

<style scoped>
.lifeCycle {
  background-color: hotpink;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>