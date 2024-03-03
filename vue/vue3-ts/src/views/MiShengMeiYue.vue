<script setup lang="ts">
import {reactive} from "vue";
import {useRouter} from "vue-router";

let router = useRouter();
let showInfo = (item: { name: string, age: number, info: string }) => {
  router.push({
    name: 'info',
    query: {
      name: item.name,
      age: item.age,
      info: item.info
    }
  })
}


let infoList = reactive([{id: "1", name: "弥生美月", age: 28, info: "女优"}, {
  id: "2",
  name: "白石茉莉奈",
  age: 38,
  info: "女优"
}])
</script>

<template>
  <div>
    <h2>弥生美月</h2>
    <ul>
      <li v-for="item in infoList" :key="item.id">
        <button @click="showInfo(item)">点击查看</button>
        <RouterLink :to="{
          name: 'info',
          query: {
            name: item.name,
            age: item.age,
            info: item.info
          }
        }">{{ item.name }}
        </RouterLink>
      </li>
    </ul>
    <div>
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>

</style>