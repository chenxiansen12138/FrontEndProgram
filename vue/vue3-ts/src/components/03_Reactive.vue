<script setup lang="ts" name="React">
import {reactive} from 'vue';
// reactive是对于对象类型数据的响应式处理
//  reactive()函数创建一个响应式的数据
let person = reactive({
  name: '李四',
  age: 18,
  tel: '15961703537'
})
// 数组类型数据的响应式处理
let arr = reactive([
  {name: '风间由美', age: 45},
  {name: '弥生美月', age: 26},
  {name: '白石茉莉奈', age: 38}
]);
let showTel = () => {
  alert(person.tel);
}

let changeAge = () => {
  person.age += 1;
}
let changeName = () => {
  arr[0].name = '永井玛利亚';
}
let changeObj = () => {
  // 当重新赋值新对象时,需要使用Object.assign()
  //arr = [{name: '波多野结衣', age: 38}, {name: '苍井空', age: 26}, {name: '小泽玛利亚', age: 38}]; 无效
  let newArr = [{name: '波多野结衣', age: 38}, {name: '苍井空', age: 26}, {name: '小泽玛利亚', age: 38}];
  Object.assign(arr, newArr);
}
</script>

<template>
  <div class="reactive">
    <h1>Vue3.0中的Reactive</h1>
    <h2>名字:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <button @click="showTel">显示电话</button>
    <button @click="changeAge">修改年龄</button>
    <h2>信息列表</h2>
    <ul>
      <li v-for="per in arr" :key="per.name">{{ per.name }}今年{{ per.age }}岁</li>
    </ul>
    <button @click="changeName">修改名字</button>
    <button @click="changeObj">修改对象</button>
  </div>
  <hr>

</template>

<style scoped>

.reactive {
  background-color: #4cae4c;
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