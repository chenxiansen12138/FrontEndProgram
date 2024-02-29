<script setup lang="ts">
import {computed, reactive, toRefs, ToRefs} from "vue";

let star = reactive({
  name: "弥生美月",
  age: 18
})
let {name, age} = toRefs(star);
let info = computed({
  get() {
    return name.value + "," + age.value + "岁";
  },
  set(val) {
    let arr = val.split(",");
    name.value = arr[0];
    age.value = arr[1];
  }
})

function changeInfo() {
  name.value = "田中美月";
  age.value = 30;
}
</script>

<template>
  <div class="computed">
    <h2>Vue3.0中的computed</h2>
    姓名:<input type="text" v-model="name">
    年龄<input type="text" v-model="age">
    <br>
    <button @click="changeInfo">修改信息</button>
    <p>{{ info }}</p>
  </div>
</template>

<style scoped>
.computed {
  background-color: burlywood;
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