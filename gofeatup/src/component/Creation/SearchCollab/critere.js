import React from "react";
import { Col, Form, Button } from 'react-bootstrap'
import Select from 'react-select'
import '../../../css/critere.css';

function CritereCollab(props) {


  return (
    <Col xs={3} className="cardFont">
      <br/>
      <div className="mx-4">
        <div className="my-4">
          <center>
            <h5 className="text-white">Critères de recherche</h5>
          </center>
        </div>

        <div className="my-4">
          <Form.Label>Rôle du créateur</Form.Label>
            <Select
              options={props.role}
              placeholder="Sélectionner un rôle"
              id="roleCreaterSearch"
              name="roleCreaterSearch"
              className="sizeSelect"
              getOptionValue={option => option._id}
              required/>
        </div>
        <div className="my-4">
          <Form.Label>Genre</Form.Label>
            <Select
              options={props.role}
              placeholder="Sélectionner un genre"
              id="genreSearch"
              name="genreSearch"
              className="sizeSelect"
              getOptionValue={option => option._id}
              required/>
        </div>
        <div className="my-4">
          <Form.Label>Type de projet</Form.Label>
          <Form.Control type="texte" size="lg"/>
        </div>
        <div className="my-4">
          <Form.Label>Rôle recherché</Form.Label>
            <Select
              options={props.role}
              placeholder="Sélectionner un rôle"
              id="roleSearchSearch"
              name="roleSearchSearch"
              className="sizeSelect"
              getOptionValue={option => option._id}
              required/>
        </div>
        <div className="my-4">
          <Form.Label>Localisation</Form.Label>
          <Form.Control type="texte" size="lg"/>
        </div>
        <div className="my-5">
          <Button type="submit" className="butonColorCritere" block>Rechercher</Button>
        </div>

      </div>

    </Col>
  );


}
export default CritereCollab;
