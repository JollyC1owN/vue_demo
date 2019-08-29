<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchText" />
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    searchUsers() {
      const searchText = this.searchText.trim()
      if (searchText) {
        this.$store.dispatch('search', searchText)
      }
    }
  },
  components: {}
}
</script>

<style scoped>
</style>
