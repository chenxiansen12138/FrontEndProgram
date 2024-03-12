<script setup lang="ts">
import {shallowReactive, shallowRef} from "vue";

let sum = shallowRef(20)
let star1 = shallowRef({
  name: '白石茉莉奈',
  age: 38
})

let star2 = shallowReactive({
  name: '风间由美',
  age: 46,
  info: {
    city: '东京',
    married: '已婚'
  }
})

let add = () => {
  sum.value += 1;
}

let changeCity = () => {
  star2.info.city = '北海道';
}

let changePerson1 = () => {
  star1.value = {name: '永井玛利亚', age: 29}
}

let changePerson2 = () => {
  Object.assign(star2, {name: '田中瞳', age: 34, info: {city: '四国', married: '未婚'}})
}

let changeAge1 = () => {
  star1.value.age += 1;
}
let changeAge2 = () => {
  star2.age += 1;
}
</script>

<template>
  <div class="shallow">
    <h2>Vue3.0中的ShallowRef和ShallowReactive</h2>
    <div class="shallow-ref">
      <h3>ShallowRef</h3>
      <h4>姓名:{{ star1.name }}</h4>
      <h4>年龄: {{ star1.age }}</h4>
      <h4>当前值:{{ sum }}</h4>
      <button @click="add">点击加1</button>
      <button @click="changeAge1">修改年龄</button>
      <button @click="changePerson1">修改所有信息</button>
    </div>
    <div class="shallow-reactive">
      <h3>ShallowReactive</h3>
      <h4>姓名:{{ star2.name }}</h4>
      <h4>年龄: {{ star2.age }}</h4>
      <h4>城市:{{ star2.info.city }}</h4>
      <h4>婚姻状态:{{ star2.info.married }}</h4>
      <button @click="changeAge2">修改年龄</button>
      <button @click="changeCity">修改城市</button>
      <button @click="changePerson2">修改所有信息</button>
    </div>
  </div>

</template>

<style scoped>
.shallow {
  background-color: #c1e2b3;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

.shallow-reactive, .shallow-ref {
  background-color: #ce8483;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
}
button{
  width: 200px;
  height: 40px;
  background-color: white;
  border-radius: 8px;
  margin-left: 20px;
}
</style>