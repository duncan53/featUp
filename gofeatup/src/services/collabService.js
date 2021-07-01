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

  addCollab(genre, type, role, location, description) {
    console.log(cookies.get("token"));
    return this.axios.post('/api/colab', {
      genre: genre,
      type: type,
      role: role,
      location: location,
      description: description
    }).then(response => {
      return response
    })
  }

}

export default new CollabService();
