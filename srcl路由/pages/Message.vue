<template>
  <div>
    <ul>
      <li v-for="meg in megs" :key="meg.id">
        <router-link :to="`/home/message/detail/${meg.id}`">{{meg.title}}</router-link>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      megs: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.megs = [
        { id: 1, title: '面对疾风吧' },
        { id: 2, title: '人在塔在' },
        { id: 3, title: '你的剑就是我的剑' },
        { id: 4, title: '丢丢丢~~~' }
      ]
    }, 900)
  },
  components: {}
}
</script>

<style scoped>
</style>
