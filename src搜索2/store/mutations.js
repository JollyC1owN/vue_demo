import { CHANGE_BEFORE, CHANGE_SUCCESS, CHANGE_ERROR } from './mutation-types'
export default {
  [CHANGE_BEFORE] (state) {
    state.firstView = false
    state.loading = true
  },
  [CHANGE_SUCCESS] (state, users) {
    state.loading = false
    state.users = users
  },
  [CHANGE_ERROR] (state, error) {
    state.loading = false
    state.errorMsg = error
  }
}
