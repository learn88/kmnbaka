// https://vuex.vuejs.org/en/mutations.html

export default {
  setToken (state, token) {
      state.token = token
      state.isUserLoggedIn = !!(token)
    },
    setUser (state, user) {
      state.user = user
    },
    setRole (state, role) {
      state.role = role
    },
    setSchool (state, school_id) {
      state.school_id = school_id
    }
}
