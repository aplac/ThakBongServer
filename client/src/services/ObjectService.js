import api from '@/services/Api'

const url = 'api/object/'

export default {
  all(){
    return api().get(`${url}`)
  },
  getById(id){
    return api().get(`${url}${id}`)
  }
}