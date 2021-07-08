import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class MusicService {

  constructor() {
    this.axios = axios.create({
      baseURL: "http://localhost:3001",
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization': 'Bearer '+ cookies.get("token")
      }
    });
  }

  getAll() {
    return this.axios.get('/api/music')
    .then(response => {
      return response.data.music
    })
  }

  getMy() {
    return this.axios.get('/api/music/my')
    .then(response => {
      return response.data.music
    })
  }

  addMusic(name, collab, son, cover) {
    const formData = new FormData();

    formData.append('musicSrc', son, name);
    formData.append('cover', cover, "cover " + name);
    formData.append('name', name);
    //formData.append('feat', collab);

    return this.axios.post('/api/music', formData)
    .then(response => {
      return response
    })
  }


}

export default new MusicService();
