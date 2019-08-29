import axios from 'axios'
import { REQ_LOADING, REQ_SUCCESS, REQ_ERROR } from './mutation-types'

export default {
  async search ({ commit }, searchContxet) {
    commit(REQ_LOADING)
    const url = `https://api.github.com/search/users?q=${searchContxet}`
    try {
      const result = await axios(url)
      const uesrs = result.data.items.map(item => ({
        username: item.login,
        url: item.html_url,
        avatar_url: item.avatar_url
      }))
      commit(REQ_SUCCESS, uesrs)
    } catch (error) {
      commit(REQ_ERROR, error.message)
    }
  }
}
