<script setup lang="ts">
import {ref} from "vue";
import {countStore} from "@/store/Count";
import {storeToRefs} from "pinia";

let {sum} = storeToRefs(countStore());
console.log(sum);
// let bigSum = countStore().bigSum;
// console.log(bigSum);
// let sumAdd = countStore().sumAdd;
// console.log(sumAdd)
let data = ref(1);
let add = () => {
  //sum += data.value
  //批量修改数据
  // countStore().$patch({
  //   sum: 500
  // })
  countStore().increment(data);
}
let minus = () => {
  sum.value -= data.value
}

</script>

<template>
  <div class="count">
    <h2>当前求和为:{{ sum }}</h2>
    <select v-model.number="data">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<style scoped>
select {
  width: 120px;
  height: 80px;
  font-size: 30px;
  margin: auto;
}

button {
  margin-left: 20px;
  width: 60px;
  height: 30px;
  border-radius: 3px;
  background-color: white;
  border-color: white;
  border-bottom: 0;
  border-right: 0;

}
</style>