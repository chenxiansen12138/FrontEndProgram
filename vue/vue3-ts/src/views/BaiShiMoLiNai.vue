<script setup lang="ts">
import {reactive} from "vue";

let infoList = reactive([{id: "1", name: "白石茉莉奈", age: 38, info: "女优"}, {
  id: "2",
  name: "风间由美",
  age: 48,
  info: "女优"
}])
</script>

<template>
  <div>
    <h2>白石茉莉奈</h2>
    <ul>
      <li v-for="item in infoList" :key="item.id">
        <RouterLink :to="{
          name: 'info1',
          params: {
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