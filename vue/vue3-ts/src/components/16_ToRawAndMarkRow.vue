<script setup lang="ts">
import {markRaw, reactive, toRaw} from "vue";

let per = reactive({
  name: '风间由美',
  age: '46'
})
let person = toRaw(per);
let addAge = () => {
  person.age += 1;
}
console.log(per);
console.log(person);

let star = markRaw({name: '弥生美月',age:28})
let star1 = reactive(star);
console.log("MarkRaw",star1);
</script>

<template>
  <div class="toRaw">
    <h2>Vue3中的toRaw和markRaw</h2>
    <h3>{{ person.name }}</h3>
    <h3>{{ person.age }}</h3>
    <button @click="addAge">修改年龄</button>
    <hr>
    <h2>{{star1.name}}</h2>
    <h2>{{star1.age}}</h2>
  </div>
</template>

<style scoped>
.toRaw {
  background-color: lavenderblush;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>