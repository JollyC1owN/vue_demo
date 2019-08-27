<template>
  <div>
    <h1>次数：{{count}},奇数or偶数：{{eventOrodd}}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">—</button>
    <button @click="oddIncrement">奇数+</button>
    <button @click="asyncIncrement">异步+</button>
  </div>
</template>

<script>
// 组件绑定的辅助函数，详情见文档
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['count']),
    ...mapGetters(['eventOrodd'])
  },
  methods: {
    ...mapMutations({
      increment: 'INCREMENT',
      decrement: 'DECREMENT'
    }),
    ...mapActions(['oddIncrement', 'asyncIncrement'])
  }
}
</script>

<style scoped>
</style>
