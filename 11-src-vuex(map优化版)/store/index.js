import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT, DECREMENT } from './mutation-types'
Vue.use(Vuex)
// 包含多个状态数据的对象
const state = {
  count: 0
}
// 包含了直接修改状态数据的多个方法的对象
const mutations = {
  // 这里可以有多个方法，每个方法就是一个mutation，每个mutation都有一个type，每个mutation就是一个函数，
  // 函数名就可以看成个是type，在vuex中允许我们自定义type，vuex中推荐我们使用常量名的方式定义函数名字
  // 一般情况下，这里放的是同步的方法
  [INCREMENT] (state) {
    state.count++
  },
  [DECREMENT] (state) {
    state.count--
  }
}
// 包含了间接修改状态数据的多个方的对象
const actions = {
  // 这里面可以有多个方法，每个方法就是一个action
  // 一般情况下，actions中存放的是异步方法
  // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
  increment (context) {
    // 通过commit提交一个mutation
    context.commit(INCREMENT)
  },
  decrement ({ commit }) {
    commit(DECREMENT)
  },
  oddIncrement ({ state, commit }) {
    if (state.count % 2 !== 0) {
      commit(INCREMENT)
    }
  },
  asyncIncrement (context) {
    setTimeout(() => {
      context.commit(INCREMENT)
    }, 2000)
  }
}
// 包含了多个计算属性的方法对象
const getters = {
  eventOrodd (state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
