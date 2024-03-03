<script setup lang="ts">
import {useRoute} from "vue-router";
import {toRefs} from "vue";

let route = useRoute();
let {query} = toRefs(route);
</script>

<template>
  <div>
    <h2>姓名:{{ query.name }}</h2>
    <h2>年龄:{{ query.age }}</h2>
    <h2>信息:{{ query.info }}</h2>
  </div>
</template>

<style scoped>

</style>