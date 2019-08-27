<template>
  <div>
    <!-- 在组件对象中有一个$store对象，具体内容打印一下this查看-->
    <h1>次数：{{$store.state.count}},奇数or偶数：{{$store.getters.eventOrodd}}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">—</button>
    <button @click="oddIncrement">奇数+</button>
    <button @click="asyncIncrement">异步+</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    increment() {
      // 通过$store对象上的commit提交一个mutation
      this.$store.commit('INCREMENT')
    },
    decrement() {
      this.$store.commit('DECREMENT')
    },
    oddIncrement() {
      // 通过$store对象上的dispatch提交一个action
      this.$store.dispatch('oddIncrement')
    },
    asyncIncrement() {
      this.$store.dispatch('asyncIncrement')
    }
  },
  components: {}
}
</script>

<style scoped>
</style>
