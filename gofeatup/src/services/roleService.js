import axios from 'axios';

class RoleService {

  constructor() {
    this.axios = axios.create({baseURL: "http://localhost:3001"});
  }

  getAll() {
    return this.axios.get('/api/type')
    .then(response => {
      return response.data.type
    })
  }

}

export default new RoleService();
