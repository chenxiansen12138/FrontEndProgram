<script setup lang="ts">
import {ref, watchEffect} from "vue";

let count = ref(0);
let kind = ref(0);
let changeCount = () => {
  count.value++;
}
let changeKind = () => {
  kind.value++;
}
watchEffect(() => {
  if (count.value >= 5 || kind.value >= 3) {
    console.log("达标了!!!")
  }
})

</script>

<template>
  <div class="watchEffect">
    <h1>Vue3.0中的watchEffect</h1>
    <h2>当前数值{{ count }}</h2>
    <h2>当前种类{{ kind }}</h2>
    <button @click="changeCount">数值加1</button>
    <button @click="changeKind">种类加一</button>
  </div>
</template>

<style scoped>
.watchEffect {
  background-color: slateblue;
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