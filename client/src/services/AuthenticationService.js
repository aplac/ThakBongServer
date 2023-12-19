import api from '@/services/Api'

export default {
  register (credentials) {
    return api().post('api/users/addUser', credentials)
  },
  login (credentials) {
    return api().post('api/users/login', credentials)
  }
}