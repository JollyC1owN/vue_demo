<template>
  <div>
    <ul>
      <li v-for="msg in message" :key="msg.id">
        <!-- 通过params的形式 -->
        <router-link :to="`/home/message/detail/${msg.id}`">{{msg.title}}</router-link>
        <!-- 通过query的形式 -->
        <!-- <router-link :to="`/home/message/detail/?id=${msg.id}`">{{msg.title}}</router-link> -->
        ---
        <button @click="pushClick(msg.id)">push查看</button>
        -----
        <button @click="replaceClick(msg.id)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
    <!-- 使用了props传递参数后，这样这个组件就不会成为一个路由组件，可以随意使用 -->
    <MessageDetail :id="3" />
  </div>
</template>

<script>
import MessageDetail from './MessageDetail'
export default {
  name: 'Message',
  data() {
    return {
      message: []
    }
  },
  mounted() {
    setTimeout(() => {
      const messages = [
        { id: 1, title: 'message001' },
        { id: 3, title: 'message003' },
        { id: 5, title: 'message005' }
      ]
      this.message = messages
    }, 900)
  },
  methods: {
    // push查看----编程式路由跳转
    pushClick(id) {
      this.$router.push(`/home/message/detail/${id}`)
    },
    // replace查看---编程式路由跳转
    replaceClick(id) {
      this.$router.replace(`/home/message/detail/${id}`)
    }
  },
  components: {
    MessageDetail
  }
}
</script>

<style scoped>
</style>
