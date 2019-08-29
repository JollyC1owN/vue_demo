<template>
  <div class="row">
    <h2 v-if="firstView">请输入要搜索的内容</h2>
    <h2 v-else-if="loading">loading...</h2>
    <h2 v-else-if="errorMsg">{{errorMsg}}</h2>
    <div class="card" v-else-if="users" v-for="user in users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'List',
  computed: {
    ...mapState(['firstView', 'loading', 'users', 'errorMsg'])
  },
  components: {}
}
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
