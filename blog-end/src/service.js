import axios from 'axios'
import qs from 'qs'
export default {
  post (url, data) {
    return axios({
      method: 'post',
      baseURL: 'http://localhost:8000/',
      url,
      data: qs.stringify(data),
      timeout: 5000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },
  get (url, params) {
    return axios({
      method: 'get',
      baseURL: 'http://localhost:8000/',
      url,
      params,
      timeout: 5000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
  }
}
