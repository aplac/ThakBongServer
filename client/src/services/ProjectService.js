import api from '@/services/Api'

const url = 'api/project'

export default {
  all(){
    return api().get(`${url}`)
  },
  getById(id){
    return api().get(`${url}/${id}`)
  },
  getByAPI(sql){
    return api().get(`${url}/sql/${sql}`)
  }
}