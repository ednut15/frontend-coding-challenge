import axios from 'axios'
const API_URL = 'http://localhost:3000'

export default {
  async sendToApi (context, data) {
    const body = { ...data }
    const config = { headers: { 'content-type': 'application/json' } }
    return axios.post(`${API_URL}/users`, body, config)
  }
}
