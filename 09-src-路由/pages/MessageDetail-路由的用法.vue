M<template>
  <ul>
    <li>ID:{{$route.params.id}}</li>
    <li>title:{{messageDetail.title}}</li>
    <li>content:{{messageDetail.content}}</li>
  </ul>
</template>

<script>
const messageDetails = [
  { id: 1, title: 'message001', content: 'message001_content' },
  { id: 3, title: 'message003', content: 'message003_content' },
  { id: 5, title: 'message005', content: 'message005_content' }
]
export default {
  name: 'MessageDetail',
  data() {
    return {
      // 当前需要显示的详情对象
      messageDetail: {}
    }
  },
  mounted() {
    // 模拟发请求，获取消息的详情对象
    setTimeout(() => {
      // 得到当前id
      const id = this.$route.params.id * 1
      const detail = messageDetails.find(detail => detail.id === id)
      this.messageDetail = detail
    }, 1000)
  },
  watch: {
    $route(value) {
      // 说明请求参数发生变化
      // 模拟发请求，获取消息的详情对象
      setTimeout(() => {
        // 得到当前id
        const id = value.params.id * 1
        const detail = messageDetails.find(detail => detail.id === id)
        this.messageDetail = detail
      }, 1000)
    }
  },
  components: {}
}
</script>

<style scoped>
</style>
