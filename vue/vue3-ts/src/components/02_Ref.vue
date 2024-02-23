<script setup lang="ts">
import {ref} from 'vue';
// ref对于基本类型数据的响应式处理
// ref()函数创建一个响应式的数据
let name = ref('张三');
let age = ref(18);
let tel = '15961703537';
let showTel = () => {
  alert(tel);
}
let changeName = () => {
  // ref()创建的数据，不能直接赋值，需要通过.value来赋值
  name.value = '李四';
}
let changeAge = () => {
  age.value += 1;
}

// ref对于对象类型数据的响应式处理
let star = ref({
  name: '白石茉莉奈',
  age: 18,
  tel: '15961703537'
})
let changeTel = () => {
  star.value.tel = '0000-1211-3548';
}
let changeObj= ()=>{
  star.value = {
    name: '风间由美',
    age: 45,
    tel: '0201-9830-6589'
  }
}

</script>

<template>
  <div class="ref">
    <h1>Vue3.0中的Ref(基本数据)</h1>
    <h2>名字:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <button @click="showTel">显示电话</button>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
  <hr>
  <div class="ref">
    <h1>Vue3.0中的Ref(对象数据)</h1>
    <h2>名字:{{ star.name }}</h2>
    <h2>年龄:{{ star.age }}</h2>
    <h2>电话:{{ star.tel }}</h2>
    <button @click="changeTel">修改电话</button>
    <button @click="changeObj">修改对象</button>
  </div>
</template>

<style scoped>
.ref {
  background-color: orange;
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