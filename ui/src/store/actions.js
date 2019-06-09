// https://vuex.vuejs.org/en/actions.html

export default {
  setToken ({commit}, token) {
    commit('setToken', token)
  },
  setUser ({commit}, user) {
    commit('setUser', user)
  },
  setRole ({commit}, role) {
    commit('setRole', role)
  },
  setSchool ({commit}, school_id) {
    commit('setSchool', school_id)
  }
}
