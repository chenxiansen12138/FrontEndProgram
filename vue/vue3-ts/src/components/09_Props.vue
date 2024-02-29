<script setup lang="ts" name="Props">
import {withDefaults} from 'vue';
import {type stars} from '@/types'
//只接收list
//defineProps(['list'])
//接收 + 限制类型
//defineProps<{ list: stars }>();
//接收 + 限制类型 + 默认值 +限制必要性
withDefaults(defineProps<{ list?: stars }>(), {list: () => [{id: '5', name: '金谷宇乃', age: 36, info: '已经退役'}]})

</script>

<template>
  <div class="props">
    <h2>Vue3.0中的props</h2>
    <ul>
      <li v-for="star in list" :key="star.id">{{ star.name }} -- {{ star.age }}岁</li>
    </ul>
  </div>


</template>

<style scoped>
.props {
  background-color: blanchedalmond;
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