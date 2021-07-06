import React from "react";
import { Form, Col } from 'react-bootstrap'
import CreateCollab from '../../../svg/createCollab.js';
import '../../../css/myCollab.css';

function CollabCard(props) {

  return (

      <Col xs={4} className="cardFont">
        <div className="mx-4">
          <div className="my-3">
            <CreateCollab/>
            <span className="text-white display-5 ml-2">Annonce :</span>
          </div>

          <div className="pb-4">
            <Form.Label>Genre</Form.Label>
            <Form.Control type="texte" />
          </div>
          <div className="pb-4">
            <Form.Label>Type de projet</Form.Label>
            <Form.Control type="texte" />
          </div>
          <div className="pb-4">
            <Form.Label>Mon rôle</Form.Label>
            <Form.Control type="texte" />
          </div>
          <div className="pb-4">
            <Form.Label>Ma localisation</Form.Label>
            <Form.Control type="texte" />
          </div>
          <div className="pb-4">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" />
          </div>
        </div>

      </Col>

  );


}
export default CollabCard;
