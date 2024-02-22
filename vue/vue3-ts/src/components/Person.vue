<template>
  <div class="person">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="tel">查看联系方式</button>
  </div>
</template>

<style scoped>
.person {
  background-color: deepskyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>

<script lang="ts">
export default {
  name: 'Person',
  data() {
    return {
      name: '张三',
      age: 18,
      telephone: '15961703537'
    }
  },
  methods: {
    tel() {
      alert(this.telephone);
    }
  }
}
</script>