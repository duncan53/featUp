import React from "react";
import { Row, Col, Button } from 'react-bootstrap'
import UserParam from '../../svg/userParam';
import Edit from '../../svg/edit';
import Switch from '@material-ui/core/Switch';

function Account(props) {

  function myDateConverterFR(myDate){
    var tempDate = new Date(myDate);

    var month = tempDate.getMonth()+1;
    var day = tempDate.getDate();

    if (month < 10) {month = "0" + month};
    if (day < 10) {day = "0" + day};
    return day+"/"+month+"/"+tempDate.getFullYear();
  }

  return (
    <div className="ml-5 my-4">
      <UserParam/> <span className="ml-3 text-white"> Mon Compte</span>

      <Row className='my-4'>

        <Col xs={4} className="backAccount" >
          <br/>
          <p className="text-white">Information personelles</p>

          <Row className="tableInfo ml-1 mb-2">

            <Col className="text-white" xs={5}>Nom d'artiste</Col>

            <Col className="text-white" xs={5}>{props.info.pseudo}</Col>

            <Col><Edit/></Col>

          </Row>

          <Row className="tableInfo ml-1 mb-2">

            <Col className="text-white" xs={5}>Adresse email</Col>

            <Col className="text-white" xs={5}>{props.info.email}</Col>

            <Col><Edit/></Col>

          </Row>

          <Row className="tableInfo ml-1 mb-2">

            <Col className="text-white" xs={5}>Mot de passe</Col>

            <Col className="text-white" xs={5}>...............</Col>

            <Col><Edit/></Col>

          </Row>

          <Row className="tableInfo ml-1 mb-2">

            <Col className="text-white" xs={5}>Localisation</Col>

            <Col className="text-white" xs={5}>Paris, Rennes</Col>

            <Col><Edit/></Col>

          </Row>

          <Row className="tableInfo ml-1 mb-2">

            <Col className="text-white" xs={5}>Date de naissance</Col>

            <Col className="text-white" xs={5}>{myDateConverterFR(props.info.dateNaissance)}</Col>

            <Col><Edit/></Col>

          </Row>
          <br/>
        </Col>

        <Col xs={4} className="ml-3 backAccount">
          <br/>
          <p className="text-white">Information générales</p>

          <Row className="ml-1 mb-3 tableInfo">
            <Col className="text-white" xs={8}>Langue</Col>
            <Col className="text-white">Francais</Col>
          </Row>

          <Row className="ml-1 mb-2 tableInfo">
            <Col className="text-white" xs={8}>Notification</Col>
            <Col className="text-white">
              <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
            </Col>
          </Row>

          <Row className="ml-1 mb-2 tableInfo">
            <Col className="text-white" xs={8}>Mode invisible</Col>
              <Col className="text-white">
                <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
              </Col>
          </Row>

          <Row className="ml-1 mb-2 tableInfo">
            <Col className="text-white" xs={8}> Autoriser la géolocalisation</Col>
              <Col className="text-white">
                <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
              </Col>
          </Row>
        </Col>

        <Col xs={2} className="ml-3 backAccount">
          <br/>
            <center>
              <p className="text-white mb-4">Suppression de compte</p>
              <Button className="mb-4 butonDelete"> Supprimer mon compte</Button>
              <p style={{color: "#FFED4F"}}>Attention ! cette action est irréversible, vous perdrez toutes vos données</p>
            </center>
        </Col>

      </Row>
    </div>
  );


}
export default Account;
