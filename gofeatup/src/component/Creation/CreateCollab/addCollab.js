import React from "react";
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import serviceCollab from '../../../services/collabService';
import CreateCollab from '../../../svg/createCollab.js';
import '../../../css/addCollab.css';


function AddCollab() {

  const handleSubmit = e => {
    if (e.target.name === "formAddCollab") {
      e.preventDefault();

      const formCollab = new FormData(e.target);

      serviceCollab.addCollab(formCollab.get('genreForm'), formCollab.get('typeForm'), formCollab.get('roleForm'), formCollab.get('locationForm'), formCollab.get('descriptionForm'))
      .then((res) => {
          if (res.status === 201) {
            alert("Its ok dude")
          }
        })
        .catch(error => {
          if (error.response.status === 401) {
            window.location = "/"
          } else {
            return error;
          }
        });
    }
  };

  return (
    <div className="mt-4">
      <Container className="formCollab" >
          <Form className="mx-5" onSubmit={handleSubmit} name="formAddCollab"><br/>

          <div>
            <CreateCollab/>
            <span className="text-white display-5 ml-2">Créer ton annonce</span>
          </div>

              <Row className="mb-3">
                <Form.Group as={Col} xs={4}>

                  <div className="py-2">
                    <Form.Label>Titre</Form.Label>
                    <Form.Control type="texte" placeholder="Titre de collab" id="titreForm" name="titreForm" />
                  </div>

                  <div className="py-2">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control type="texte" placeholder="Genre de collab" id="genreForm" name="genreForm" />
                  </div>

                  <div className="py-2">
                    <Form.Label>Type de projet</Form.Label>
                    <Form.Control type="texte" placeholder="Type du projet" id="typeForm" name="typeForm" />
                  </div>

                  <div className="py-2">
                    <Form.Label>Votre rôle</Form.Label>
                    <Form.Control type="texte" placeholder="Votre rôle dans le projet" id="roleForm" name="roleForm" />
                  </div>

                  <div className="py-2">
                    <Form.Label>Ma localisation</Form.Label>
                    <Form.Control type="texte" placeholder="Location du projet" id="locationForm" name="locationForm" />
                  </div>
                </Form.Group>

                <Form.Group className="py-2 ml-5" as={Col}>
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" placeholder="Divrivez le projet" style={{ height: '65%' }} id="descriptionForm" name="descriptionForm" />
                    <Button variant="primary" type="submit" className="myButonColor" style={{ position: "absolute", right:0, bottom: 0}}>
                      Publier
                    </Button>
                </Form.Group>
              </Row>
          </Form>
      </Container>
    </div>
  );


}
export default AddCollab;
