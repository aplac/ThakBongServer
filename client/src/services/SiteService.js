import api from '@/services/Api'

const url = 'api/site'

export default {
  countries(){
    return api().get(`api/country`)
  },
  communities(country_code){
    return api().get(`api/community/${country_code}`)
  },
  getByCommunityName(community_name){
    return api().get(`${url}/community/${community_name}`)
  },
  all(){
    return api().get(`${url}/`)
  },
  getById(id){
    return api().get(`${url}/${id}`)
  },
  getByFId(fid){
    return api().get(`${url}/fid/${fid}`)
  },
  getByName(name){
    return api().get(`${url}/name/${name}`)
  },
  searchByName(str){
    return api().get(`${url}/search/${str}`)
  },
  post(item){
    return api().post(`${url}/`, item)
  },
  put(item){
    return api().put(`${url}/${item._id}`, item)
  },
  delete(item){
    return api().delete(`${url}/${item._id}`)
  }
}