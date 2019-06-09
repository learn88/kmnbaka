import Api from '@/api'

export default {
  index (user_roles) {
    return Api().get('user-roles', user_roles)
  },
  show (id) {
    return Api().get(`user-roles/${id}`)
  },
  post (user_role) {
    return Api().user_role('user-roles', user_role)
  },
  put (user_role) {
    return Api().put(`user-roles/${user_role._id}`, user_role)
  },
  remove (user_role) {
    return Api().delete(`user-roles/${user_role._id}`)
  }
}
