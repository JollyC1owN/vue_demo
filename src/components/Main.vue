<template>
  <div>
    <h1 v-if="firstView">请输入关键字进行搜索</h1>
    <h1 v-else-if="loading">loading</h1>
    <h1 v-else-if="errorMsg">{{errorMsg}}</h1>
    <div class="row" v-else-if="users.length>0">
      <div class="card" v-for="user in users" :key="user.username">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{user.username}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Main',
  computed: {
    ...mapState(['firstView', 'loading', 'errorMsg', 'users'])
  }
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
