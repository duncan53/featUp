import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class PlaylistService {


  constructor() {
    this.axios = axios.create({
      baseURL: "http://localhost:3001",
      headers: {'Authorization': 'Bearer '+ cookies.get("token")}
    });
  }

  addCollab(titre) {
    return this.axios.post('/api/playlist', {
      label: titre
    }).then(response => {
      return response
    })
  }

  getMy() {
    return this.axios.get('/api/playlist')
    .then(response => {
      return response.data.playlist
    })
  }


}

export default new PlaylistService();
