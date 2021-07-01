import React from "react";
import '../../css/login.css';
import { Col, Form, Button } from 'react-bootstrap'

function MyLogin(props) {

  const handleChange = e => {
    props.myConnexion("Register");
  }

  return (
      <>
        <br/>
        <center>
          <h3>Connexion à GoFeatUp</h3>
            <br/>
            <Form.Group as={Col} xs={11}>
              <Form.Row>
                <Form.Label>Email</Form.Label>
                  <Form.Control type="email" id="email" name="email" placeholder="Enter Email" required/>
              </Form.Row>
            </Form.Group>

            <Form.Group as={Col} xs={11}>
              <Form.Row>
                <Form.Label>Mot de passe</Form.Label>
                  <Form.Control type="password" id="password" name="password" placeholder="Enter Password" required/>
                    <Form.Text className="text-muted">
                      <span className="styleHref" style={{"color": "#C803CA"}} onClick={handleChange} > Mot de passe oublié</span>
                    </Form.Text>
              </Form.Row>
            </Form.Group>

            <Form.Group as={Col} xs={11}>
                <Button type="submit" className="butonColor" block>Se connecter</Button>
                  <Form.Text className="text-light" style={{"margin": "0 auto"}}>
                    Pas de compte <span className="styleHref" style={{"color": "#C803CA"}} onClick={handleChange} > S'inscrire</span>
                  </Form.Text>
            </Form.Group>
          </center>
            <br/>
       </>
  );
}

export default MyLogin;
