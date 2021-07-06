import React from "react";
import { Row, Col } from 'react-bootstrap'
import '../../../css/collab.css';
import UserIcon from '../../../svg/user.js';
import Chat from '../../../svg/chat.js';
import Croix from '../../../svg/croix.js';

function ResponseRow(props) {

  return (
    <div className="mt-3">
      <Row>
        <Col><span data-numbers="RE" className="ml-3"></span></Col>
        <Col className="text-white">Vincent V </Col>
        <Col xs={1}><UserIcon/></Col>
        <Col xs={1}><Chat/></Col>
        <Col xs={1}><Croix/></Col>
      </Row>
      <hr style={{backgroundColor: "#3E1747"}}/>

    </div>

  );


}
export default ResponseRow;
