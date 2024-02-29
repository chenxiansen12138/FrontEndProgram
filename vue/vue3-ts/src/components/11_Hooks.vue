<script setup lang="ts">
import StarFir from "@/hooks/StarFir";
import {name1,age1,showIdentity} from "@/hooks/StarSec";

let {name,age,showPhone} = StarFir();
</script>

<template>
  <div class="hooks">
    <h1>Vue3.0中的Hooks</h1>
    <h2>第一位演员的信息</h2>
    <h3>姓名:{{ name }}</h3>
    <h3>年龄:{{ age }}</h3>
    <button @click="showPhone">显示电话信息</button>
    <h2>第二位演员的信息</h2>
    <h3>姓名:{{ name1 }}</h3>
    <h3>年龄:{{ age1 }}</h3>
    <button @click="showIdentity">显示身份信息</button>
  </div>
</template>

<style scoped>

.hooks {
  background-color: mediumslateblue;
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