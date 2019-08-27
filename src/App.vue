<template>
  <div>
    <h1>次数：{{$store.state.count}},奇数or偶数：{{$store.getters.eventOrodd}}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">—</button>
    <button @click="oddIncrement">奇数+</button>
    <button @click="asyncIncrement">异步+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  name: 'App',
  computed: {
    eventOrodd() {
      return this.count % 2 === 0 ? '偶数' : '奇数'
    }
  },
  methods: {
    increment() {
      this.$store.commit('INCREMENT')
    },
    decrement() {
      this.$store.commit('DECREMENT')
    },
    oddIncrement() {
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
