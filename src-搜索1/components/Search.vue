<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchContext" />
      <button @click="search ">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchContext: ''
    }
  },
  methods: {
    search() {
      const searchContext = this.searchContext.trim()
      this.$store.dispatch('search', searchContext)
    }
  },
  components: {}
}
</script>

<style scoped>
</style>
