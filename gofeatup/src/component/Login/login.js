import React, {useState, useEffect} from "react";
import '../../css/login.css';
import { Col, Row, Container, Form } from 'react-bootstrap'
import MyLogin from "./myLogin"
import MyRegister from "./myRegister"
import { useCookies } from 'react-cookie';

import UserService from "../../services/userService.js";
import RoleService from "../../services/roleService.js";

function Login() {

  const [typeConnexion, setTypeConnexion] = useState("Login");
  const [role, setRole] = useState([]);
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(['token']);

  useEffect(() => {
    getAllRole();
  },[]);

  const loginToggle = e => {
    setTypeConnexion(e);
  };

  const getAllRole = () =>{
    RoleService.getAll().then((res) => {
      if (res) {
        setRole(res);
      }
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.name === "formLogin") {
      const formLogin = new FormData(e.target);
      UserService.login(formLogin.get('email'), formLogin.get('password'))
      .then((res) => {
          setCookie('token', res, {'secure': true});
          window.location = "/home/#/";
        })
        .catch(error => {
          if (error.response.status === 401) {
            alert("Mot de passse incorrect")
          } else {
            return error;
          }
        });
    }
    else if (e.target.name === "formRegister") {
      const formLogin = new FormData(e.target);
      UserService.register(formLogin.get('email'), formLogin.get('password'), formLogin.get('pseudo'), formLogin.get('birthday'), formLogin.get('role'))
    }
  };

  return (
      <Row>
        <Col sm={8} className="myImage">
          <div className="text-light">
            <h1>FeatUp</h1>
            <h4>L’application de collaboration artistique</h4>
          </div>
        </Col>
        <Col sm={4} className="backDark">
          <Container className="vertical-center">

              { typeConnexion === "Login"
                ?
                <Form onSubmit={handleSubmit} name="formLogin" id="formLogin">
                  <MyLogin myConnexion={loginToggle}/>
                </Form>
                :
                null
              }

              { typeConnexion === "Register"
                ?
                <Form onSubmit={handleSubmit} name="formRegister" id="formRegister">
                  <MyRegister myConnexion={loginToggle} role={role}/>
                </Form>
                :
                null
              }


          </Container>
        </Col>
      </Row>
  );
}

export default Login;
