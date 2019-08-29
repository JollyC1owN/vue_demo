import axios from 'axios'
import { CHANGE_BEFORE, CHANGE_SUCCESS, CHANGE_ERROR } from './mutation-types'

export default {
  async search ({ commit }, searchText) {
    commit(CHANGE_BEFORE)
    const url = `https://api.github.com/search/users?q=${searchText}`
    try {
      const res = await axios(url)
      const users = res.data.items.map(item => ({
        login: item.login,
        html_url: item.html_url,
        avatar_url: item.avatar_url
      }))
      commit(CHANGE_SUCCESS, users)
    } catch (error) {
      commit(CHANGE_ERROR, error.message)
    }
  }
}
