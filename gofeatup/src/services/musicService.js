import axios from 'axios';

class MusicService {

  constructor() {
    this.axios = axios.create({baseURL: "http://localhost:3001"});
  }

  getAll() {
    return this.axios.get('/api/music')
    .then(response => {
      return response.data.music
    })
  }

}

export default new MusicService();
