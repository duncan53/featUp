import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class CollabService {


  constructor() {
    this.axios = axios.create({
      baseURL: "http://localhost:3001",
      headers: {'Authorization': 'Bearer '+ cookies.get("token")}
    });
  }

  addCollab(titre, genre, type, role, location, description) {
    console.log(cookies.get("token"));
    return this.axios.post('/api/colab', {
      titre: titre,
      genre: genre,
      type: type,
      role: role,
      location: location,
      description: description
    }).then(response => {
      return response
    })
  }

  getMy() {
    return this.axios.get('/api/colab/my')
    .then(response => {
      return response.data.colab
    })
  }

  getOther() {
    return this.axios.get('/api/colab/other')
    .then(response => {
      return response.data.colab
    })
  }

  addResponse(id, response) {
    return this.axios.put('/api/colab/addResponse/' + id, {message: response})
    .then(response => {
      return response
    })
  }

}

export default new CollabService();
