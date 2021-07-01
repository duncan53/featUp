import React from "react";
import '../../css/login.css';
import { Col, Form, Button } from 'react-bootstrap'
import Select from 'react-select'

function MyRegister(props) {

  const handleChange = e => {
    props.myConnexion("Login");
  }

  return (
      <>
        <br/>
          <center><h3>Inscription à GoFeatUp</h3></center>
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
              </Form.Row>
            </Form.Group>

            <Form.Group as={Col} xs={11}>
              <Form.Row>
                <Form.Label>Vérification mot de passe</Form.Label>
                <Form.Control type="password" id="checkPassword" name="checkPassword" placeholder="Verify Password" required/>
              </Form.Row>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} style={{"marginLeft": "2%" }}>
                <Form.Label>Date de naissance</Form.Label>
                <Form.Control type="date" id="birthday" name="birthday" required/>
              </Form.Group>

              <Form.Group as={Col} style={{"marginRight": "10%" }}>
                <Form.Label>Rôle</Form.Label>
                <Select
                  options={props.role}
                  placeholder="Sélectionner un rôle"
                  id="role"
                  name="role"
                  getOptionValue={option => option._id}
                  required/>
              </Form.Group>
            </Form.Row>

            <Form.Group as={Col} xs={11}>
              <Form.Row>
                <Form.Label>Pseudo</Form.Label>
                <Form.Control type="text" id="artistName" name="pseudo" placeholder="pseudo"/>
              </Form.Row>
            </Form.Group>

            <center style={{"paddingRight": "4%"}}>
              <Form.Group as={Col} xs={11}>
                  <Button type="submit" className="butonColor" block>S'incrire</Button>
                    <Form.Text className="text-white" style={{"margin": "0 auto"}}>
                      Déjà un compte <span className="styleHref" style={{"color": "#C803CA"}} onClick={handleChange} > Se connecter</span>
                    </Form.Text>
              </Form.Group>
            </center>

            <br/>
       </>
  );
}

export default MyRegister;
