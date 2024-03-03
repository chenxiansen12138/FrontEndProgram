<script setup lang="ts">
import axios from "axios";
import {nanoid} from 'nanoid'
import {loveTalkStore} from "@/store/LoveTalk";

let talkList = loveTalkStore().loveTalkList;
let talkStore = loveTalkStore();
talkStore.$subscribe((mutation, state) => {
  localStorage.setItem('talkList', JSON.stringify(state.loveTalkList))
})

let getTalk = async () => {
  let {data: {content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
  talkList.push({id: nanoid(), title});
}
</script>

<template>
  <h2>土味情话</h2>
  <button @click="getTalk">点击获取土味情话</button>
  <ul>
    <li v-for="item in talkList" :key="item.id">{{ item.title }}</li>
  </ul>
</template>

<style scoped>
button {
  width: 200px;
  height: 50px;
  background: white;
  border-radius: 10px;
  border-right: white;
  border-bottom: white;
  font-size: 18px;
}
</style>