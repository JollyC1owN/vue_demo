<template>
  <div>
    <h2>About</h2>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  name: 'About',
  components: {}
}
</script>

<style scoped>
</style>
