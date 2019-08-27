import { REQ_SETING, REQ_SUCCESS, REQ_ERROR } from './mutation-types'
export default {
  [REQ_SETING] (state) {
    state.firstView = false
    state.loading = true
  },
  [REQ_SUCCESS] (state, users) {
    state.loading = false
    state.users = users
  },
  [REQ_ERROR] (state, error) {
    state.loading = false
    state.errorMsg = error.message
  }
}
