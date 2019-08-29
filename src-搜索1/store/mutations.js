import { REQ_LOADING, REQ_SUCCESS, REQ_ERROR } from './mutation-types'
export default {
  [REQ_LOADING] (state) {
    state.viewFirst = false
    state.loading = true
  },
  [REQ_SUCCESS] (state, users) {
    state.loading = false
    state.users = users
  },
  [REQ_ERROR] (state, error) {
    state.loading = false
    state.errorMsg = error
  }
}
