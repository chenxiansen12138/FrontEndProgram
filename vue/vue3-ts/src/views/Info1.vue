<script setup lang="ts">
// import {useRoute} from "vue-router";
// import {toRefs} from "vue";
defineProps([ 'name', 'age', 'info'])
// let route = useRoute();

//let {params} = toRefs(route);
</script>

<template>
  <div>
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>信息:{{ info }}</h2>
  </div>
</template>

<style scoped>

</style>