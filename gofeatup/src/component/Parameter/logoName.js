import React from "react";
import { Image, Row, Col } from 'react-bootstrap'
import FeatUpPlus from '../../svg/featUpPlus';


function LogoName(props) {

  return (
    <div className="backLogo">
      <Row>

        <Col xs={2} className="ml-5 my-5">
          <Image style={{width: "70%"}} src="http://localhost:3001/files/cover11620488591934.jpg" roundedCircle />
        </Col>

        <Col className="my-5">
          <br/>
          <span className="text-white fontName mr-2" >Mechta Mathieu</span> <FeatUpPlus/>
          <p className="text-white mt-2" ><small>Compte créé le 17/05/2021</small></p>
        </Col>

      </Row>
    </div>
  );


}
export default LogoName;
