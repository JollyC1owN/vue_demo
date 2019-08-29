<template>
  <ul>
    <!-- <li>id:{{$route.params.id}}</li> -->
    <li>title:{{detail.title}}</li>
    <li>content:{{detail.content}}</li>
  </ul>
</template>

<script>
const MessageDetailes = [
  { id: 1, title: '面对疾风吧', content: '死亡如风，托儿所' },
  { id: 2, title: '人在塔在', content: '德玛西亚！' },
  { id: 3, title: '你的剑就是我的剑', content: '无极之道' },
  { id: 4, title: '丢丢丢~~~', content: '你能看到我吗？' }
]
export default {
  name: 'MessageDtaile',
  data() {
    return {
      detail: {}
    }
  },
  mounted() {
    setTimeout(() => {
      const id = this.$route.params.id * 1
      const detail = MessageDetailes.find(item => item.id === id)
      this.detail = detail
    }, 1000)
  },
  watch: {
    $route(value) {
      setTimeout(() => {
        const id = value.params.id * 1
        const detail = MessageDetailes.find(item => item.id === id)
        this.detail = detail
      }, 1000)
    }
  },
  components: {}
}
</script>

<style scoped>
</style>
