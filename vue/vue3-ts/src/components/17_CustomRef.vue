<script setup lang="ts">
import {customRef} from "vue";

let initVal: string = "白石茉莉奈"
let timer: number;
let msg = customRef((track, trigger) => {
  return {
    get() {
      track();
      return initVal;
    },
    set(val: string) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        initVal = val;
        trigger();
      }, 1000)
    }
  }
})
</script>

<template>
  <div class="customRef">
    <h2>Vue3.0中的CustomRef</h2>
    <h3> {{ msg }}</h3>
    <input type="text" v-model="msg"/>
  </div>
</template>

<style scoped>
.customRef {
  background-color: lightgoldenrodyellow;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>