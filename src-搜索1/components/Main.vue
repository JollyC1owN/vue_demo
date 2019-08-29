<template>
  <div>
    <div class="row">
      <h2 v-if="viewFirst">请输入内容进行搜索</h2>
      <h2 v-else-if="loading">LOADING</h2>
      <h2 v-else-if="errorMsg">{{errorMsg}}</h2>
      <div class="card" v-else-if="users" v-for="(item, index) in users" :key="index">
        <a :href="item.url" target="_blank">
          <img src="item.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{item.username}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Main',
  computed: {
    ...mapState(['viewFirst', 'loading', 'users', 'errorMsg'])
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
