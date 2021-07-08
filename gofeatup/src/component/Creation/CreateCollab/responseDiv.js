import React from "react";
import { Col } from 'react-bootstrap'
import CreateCollab from '../../../svg/createCollab.js';
import '../../../css/myCollab.css';
import Collab from './collab.js'

function ResponseDiv(props) {


  return (
    <Col className="cardFont ml-2 mt-3 mr-5" xs={7}>

      <div className="mx-4">
        <div className="my-3">
          <CreateCollab/>
          <span className="text-white display-5 ml-4">Ils sont intéressés</span>

          {props.collab.length <= 0 ? <></> : props.collab.map((dat, index) => (
            <Collab key={index} collab={dat}/>
          ))}
        </div>
      </div>

    </Col>
  );


}
export default ResponseDiv;
