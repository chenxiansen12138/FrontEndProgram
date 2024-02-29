<script setup lang="ts">
import {reactive, toRefs, toRef} from 'vue'

let person = reactive({
  name: '白石茉莉奈',
  age: 18,
  tel: '15961703537'
})

// toRefs()函数可以将对象中的所有属性都转换为ref对象
let {name, age} = toRefs(person);

// toRef()函数可以将对象中的某个属性转换为ref对象
let tel = toRef(person, 'tel');

let changeName = () => {
  name.value = '风间由美'
}
let changeAge = () => {
  age.value += 1
}

</script>

<template>
  <div class="toRefsAndToRef">
    <h1>Vue3.0中的toRefs和toRef</h1>
    <h2>名字:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>电话:{{ tel }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<style scoped>
.toRefsAndToRef {
  background-color: #fbed50;
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