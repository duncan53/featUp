import React from "react";
import { Row, Col, Image } from 'react-bootstrap'
import '../../css/subscription.css';
import Micro from '../../svg/micro.js';


function MyArtiste(props) {

  return (
    <div className="myBody">
      <br/>


      <div style={{backgroundColor: "#17001f"}}>

        <Row className="ml-5">
          <Col className="m-4">
            <Micro/> <span className="text-white ml-2">Les plus écoutés</span>
          </Col>
        </Row>
        <Row className="mx-3">
          <Col>
            <Image style={{width: "90%"}} src="http://localhost:3001/files/cover11620488591934.jpg" roundedCircle />
          </Col>
          <Col>
            <Image style={{width: "90%"}} src="http://localhost:3001/files/cover11620488591934.jpg" roundedCircle />
          </Col>
          <Col>
            <Image style={{width: "90%"}} src="http://localhost:3001/files/cover11620488591934.jpg" roundedCircle />
          </Col>
          <Col>
            <Image style={{width: "90%"}} src="http://localhost:3001/files/cover11620488591934.jpg" roundedCircle />
          </Col>
          <Col>
            <Image style={{width: "90%"}} src="http://localhost:3001/files/cover11620488591934.jpg" roundedCircle />
          </Col>
          <Col>
            <Image style={{width: "90%"}} src="http://localhost:3001/files/cover11620488591934.jpg" roundedCircle />
          </Col>
        </Row>
        <br/>
      </div>

      <div style={{backgroundColor: "#120126"}}>

        <Row className="ml-5">
          <Col className="m-4">
            <Micro/> <span className="text-white ml-2">Récemments ajoutés</span>
          </Col>
        </Row>
        <Row className="mx-3">
          <Col>
            <Image style={{width: "90%"}} src="http://localhost:3001/files/cover11620488591934.jpg" roundedCircle />
          </Col>
          <Col>
            <Image style={{width: "90%"}} src="http://localhost:3001/files/cover11620488591934.jpg" roundedCircle />
          </Col>
          <Col>
            <Image style={{width: "90%"}} src="http://localhost:3001/files/cover11620488591934.jpg" roundedCircle />
          </Col>
          <Col>
            <Image style={{width: "90%"}} src="http://localhost:3001/files/cover11620488591934.jpg" roundedCircle />
          </Col>
          <Col>
            <Image style={{width: "90%"}} src="http://localhost:3001/files/cover11620488591934.jpg" roundedCircle />
          </Col>
          <Col>
            <Image style={{width: "90%"}} src="http://localhost:3001/files/cover11620488591934.jpg" roundedCircle />
          </Col>
        </Row>
        <br/>
      </div>

      <div>

        <Row className="ml-5">
          <Col className="m-4">
            <Micro/> <span className="text-white ml-2">Tous mes artistes suivis</span>
          </Col>
        </Row>
        <Row className="mx-3">
          <Col>
            <Image style={{width: "90%"}} src="http://localhost:3001/files/cover11620488591934.jpg" roundedCircle />
          </Col>
          <Col>
            <Image style={{width: "90%"}} src="http://localhost:3001/files/cover11620488591934.jpg" roundedCircle />
          </Col>
          <Col>
            <Image style={{width: "90%"}} src="http://localhost:3001/files/cover11620488591934.jpg" roundedCircle />
          </Col>
          <Col>
            <Image style={{width: "90%"}} src="http://localhost:3001/files/cover11620488591934.jpg" roundedCircle />
          </Col>
          <Col>
            <Image style={{width: "90%"}} src="http://localhost:3001/files/cover11620488591934.jpg" roundedCircle />
          </Col>
          <Col>
            <Image style={{width: "90%"}} src="http://localhost:3001/files/cover11620488591934.jpg" roundedCircle />
          </Col>
        </Row>
      </div>



    </div>
  );


}
export default MyArtiste;
