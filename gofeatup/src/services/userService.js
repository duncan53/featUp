import axios from 'axios';

class UserService {

  constructor() {
    this.axios = axios.create({baseURL: "http://localhost:3001"});
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

}

export default new UserService();
