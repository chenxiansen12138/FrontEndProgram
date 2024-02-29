<script setup lang="ts">
import {ref, watch, reactive} from "vue";

let sum = ref(0);
let addSum = () => {
  sum.value++;
}
const stopWatch = watch(sum, (newVal, oldVal) => {
  console.log("新值:" + newVal, "旧值:" + oldVal);
  if (newVal > 5) {
    stopWatch();
  }
})
let person = ref({
  name: "金谷宇乃",
  age: 30
});

let changePerson = () => {
  person.value = {
    name: "小泽玛利亚",
    age: 35
  }
}
watch(person, (newVal, oldVal) => {
  console.log("新值:" + newVal, "旧值:" + oldVal);
}, {deep: true, immediate: true})
let star = reactive({
  name: "风间由美",
  age: 20
})
let changeInfo = () => {
  Object.assign(star, {name: "小泽玛利亚", age: 35})
}
watch(star, (newVal, oldVal) => {
  console.log("新值:" + newVal, "旧值:" + oldVal);
}, {deep: true, immediate: true});

let av = reactive({
  city: "东京",
  count: 2,
  star: {
    star1: "白石茉莉奈",
    star2: "永井玛丽亚"
  }
})

let changeCount = () => {
  av.count += 1;
}
let changeStar1 = () => {
  av.star.star1 = "金谷宇乃"
}
let changeStar2 = () => {
  av.star.star2 = "叶爱"
}
let changeStar = () => {
  av.star = {star1: "弥生美月", star2: "田中瞳"}
}
watch(() => av.count, (newVal, oldVal) => {
  console.log("新值:" + newVal, "旧值:" + oldVal);
})
watch(() => av.star, (newVal, oldVal) => {
  console.log("新值:" + newVal, "旧值:" + oldVal);
}, {deep: true})

watch([() => sum.value, () => person.value, () => star], (newVal, oldVal) => {
  console.log("新值:" + newVal, "旧值:" + oldVal);
}, {deep: true, immediate: true});
</script>

<template>
  <div class="watch">
    <h1>Vue3.0中的watch</h1>
    <h2>情况一:监视ref定义的基本类型数据</h2>
    <h2>当前值:{{ sum }}</h2>
    <button @click="addSum">点击+1</button>
    <h2>情况二:监视ref定义的对象类型数据</h2>
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <button @click="changePerson">修改信息</button>
    <h2>情况三:监视reactive定义的对象类型数据</h2>
    <h2>姓名:{{ star.name }}</h2>
    <h2>年龄:{{ star.age }}</h2>
    <button @click="changeInfo">修改信息</button>
    <h2>情况四:监视reactive或ref定义的对象类型数据下的某个属性</h2>
    <h2>城市:{{ av.city }}</h2>
    <h2>人数:{{ av.count }}</h2>
    <h2>演员: {{ av.star.star1 }},{{ av.star.star2 }}</h2>
    <button @click="changeCount">修改人数</button>
    <button @click="changeStar1">修改演员一</button>
    <button @click="changeStar2">修改演员2</button>
    <button @click="changeStar">修改演员</button>
    <h2>情况五:监视上述多种情况</h2>
  </div>
</template>

<style scoped>

.watch {
  background-color: coral;
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