<template>
  <div class="app">
    <h1>Hello Vue3</h1>
    <Person/>
    <Ref/>
    <hr>
    <Reactive/>
    <hr>
    <ToRefsAndToRef/>
    <hr>
    <Computed/>
    <hr>
    <Watch/>
    <hr>
    <WatchEffect/>
    <hr>
    <RefTag ref="refTag"/>
    <hr>
    <Props :list="starList"/>
    <hr>
    <LifeCycle v-if="isShow"/>
    <!--    <button @click="show">显示</button>-->
    <hr>
    <Hooks/>
    <hr>
    <Router/>
  </div>
  <div class="pinia">
    <h1>Vue3.0中的Pinia</h1>
    <Count/>
    <hr>
    <LoveTalk />
  </div>
  <div class="communication">
    <h1>Vue3.0中的组件通信</h1>
    <Communication />
  </div>
</template>

<style scoped>
.app {
  background-color: #dddddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

.pinia {
  background-color: seashell;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
.communication{
  background: #afd9ee;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
  margin-top: 50px;
}
</style>

<script lang="ts" setup>
import Person from './components/01_SetUp.vue'
import Ref from './components/02_Ref.vue'
import Reactive from './components/03_Reactive.vue'
import ToRefsAndToRef from './components/04_ToRefsAndToRef.vue'
import Computed from './components/05_Computed.vue'
import Watch from './components/06_Watch.vue'
import WatchEffect from './components/07_WatchEffect.vue'
import RefTag from './components/08_RefTag.vue'
import Props from './components/09_Props.vue'
import LifeCycle from "@/components/10_LifeCycle.vue"
import Hooks from "@/components/11_Hooks.vue"
import Router from "@/components/12_Router.vue"
import Count from "@/components/13_pinia/Count.vue";
import Communication from "@/components/14_ComponentCommunication.vue"

import {type stars} from '@/types';
import {reactive, ref} from "vue";
import LoveTalk from "@/components/13_pinia/LoveTalk.vue";

let isShow = ref(true);
// let show = () => {
//   isShow.value = false;
// }

let starList = reactive<stars>([
  {id: '1', name: '白石茉莉奈', age: 38},
  {id: '2', name: '风间由美', age: 45},
  {id: '3', name: '弥生美月', age: 28},
  {id: '4', name: '永井玛利亚', age: 31},
  {id: '5', name: '金谷宇乃', age: 36, info: '已经退役'},
])
</script>