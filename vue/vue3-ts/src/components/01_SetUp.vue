<template>
  <div class="person">
    <h1>Vue3.0的setup函数</h1>
    <h2>名字:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <button @click="showTel">查看联系方式</button>
  </div>
  <hr>
<!--  <div class="person">-->
<!--    <h2>{{ a }}</h2>-->
<!--    <h2>{{ b }}</h2>-->
<!--    <h2>{{ c }}</h2>-->
<!--  </div>-->
</template>

<style scoped>
.person {
  background-color: deepskyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>

<!--<script lang="ts">-->

<!--export default {-->
<!--  name: 'Person',-->
<!--  /**-->
<!--   * setup和OptionAPI的关系-->
<!--   * OptionAPI可以读取到setup中的数据，但是setup中不能读取OptionAPI中的数据-->
<!--   */-->
<!--  data() {-->
<!--    return {-->
<!--      a: 'lisi',-->
<!--      b: 20,-->
<!--      c: this.name-->
<!--    }-->
<!--  },-->

<!--  setup() {-->
<!--    //setup函数中的this是undefined,Vue3中已经弱化this了-->
<!--    const name = 'zhangsan'//此时的name和age不是响应式的-->
<!--    let age = 18-->
<!--    let tel = '15961703537'-->

<!--    function showTel() {-->
<!--      alert(tel);-->
<!--    }-->

<!--    //setup函数中必须有返回值，可以是对象，也可以是函数-->
<!--    return {-->
<!--      name,-->
<!--      age,-->
<!--      tel,-->
<!--      showTel-->
<!--    }-->

<!--    //return ()=> "haha";-->
<!--  }-->
<!--}-->
<!--</script>-->

<script setup lang="ts">
let name = 'zhangsan';
let age = 18;
let tel = '15961703537';

let showTel = () => {
  alert(tel);
}
</script>