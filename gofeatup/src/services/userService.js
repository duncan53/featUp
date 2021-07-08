import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class UserService {

  constructor() {
    this.axiosFile = axios.create({
      baseURL: "http://localhost:3001",
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization': 'Bearer '+ cookies.get("token")
      }
    });

    this.axios = axios.create({
      baseURL: "http://localhost:3001",
      headers: {
        'Authorization': 'Bearer '+ cookies.get("token")
      }
    });
  }

  login(email, password) {
    return this.axios.post('/api/auth/login/', {
      email: email,
      password: password
    }).then(response => {
      return response.data.token
    })
  }

  register(email, password, pseudo, dateNaissance, type) {
    return this.axios.post('/api/auth/signup', {
      email: email,
      password: password,
      pseudo: pseudo,
      dateNaissance: dateNaissance,
      type: type
    }).then(response => {
      return response
    }).then((res) => {
        if (res.status === 201) {
          alert("Compte créer avec success")
          window.location = "/";
        }
      })
      .catch(error => {
        //console.log(error);
        if (error.response.status === 500) {
          alert("Adresse email déja utilisé")
        } else {
          return error;
        }
      })
  }

  getMyInfo() {
    return this.axios.get('/api/auth/myinfo')
    .then(response => {
      return response
    })
    .then((res) => {
        if (res.status === 200) {
          return res.data.user
        }
      })
      .catch(error => {
        //console.log(error);
        if (error.response.status === 401) {
          window.location = "/";
        } else {
          return error;
        }
      })
  }

  subFeatUpPlus() {
    return this.axios.put('/api/auth/sub/buy')
    .then(response => {
      return response;
    })
  }

  changeMyImage(image) {

    const formData = new FormData();

    formData.append('myFile', image);

    return this.axiosFile.put('/api/auth/image/change', formData)
    .then(response => {
      console.log(response);
      return response;
    })
  }

}

export default new UserService();
