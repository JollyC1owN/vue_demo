import axios from 'axios'
import { REQ_SETING, REQ_SUCCESS, REQ_ERROR } from './mutation-types'
export default {
  async search ({ commit }, searchName) {
    // 更新数据状态--请求中
    commit(REQ_SETING)
    // 发送ajax请求--获取users
    const url = `https://api.github.com/search/users?q=${searchName}`
    try {
      const response = await axios(url)
      // 发送请求成功--更新数据（成功）
      const users = response.data.items.map(item => ({
        username: item.login,
        url: item.html_url,
        avatar_url: item.avatar_url
      }))
      commit(REQ_SUCCESS, users)
    } catch (error) {
      // 发送请求失败--更新数据（失败）
      commit(REQ_ERROR, error)
    }
  }
}
