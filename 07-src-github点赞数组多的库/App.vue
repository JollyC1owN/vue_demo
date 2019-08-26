<template>
  <div>
    <div v-if="!repoName">loading...</div>
    <div v-else>
      most star repo is
      <a :href="repoUrl">{{repoName}}</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      repoName: '',
      repoUrl: ''
    }
  },
  mounted() {
    // 使用vue-resource发送ajax请求
    // const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
    // this.$http
    //   .get(url)
    //   .then(res => {
    //     const result = res.data
    //     const { name } = result.items[0]
    //     const htmlUrl = result.items[0].html_url
    //     this.repoName = name
    //     this.repoUrl = htmlUrl
    //   })
    //   .catch(error => {
    //     alert(error)
    //   })
    // 使用axios发送ajax请求
    const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
    axios
      .get(url)
      .then(res => {
        const result = res.data
        const { name } = result.items[0]
        const htmlUrl = result.items[0].html_url
        this.repoName = name
        this.repoUrl = htmlUrl
      })
      .catch(error => {
        alert(error)
        alert(error)
      })
  },
  // 注册组件
  components: {}
}
</script>

<style scoped>
</style>
