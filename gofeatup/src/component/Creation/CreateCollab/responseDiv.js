import React from "react";
import { Col } from 'react-bootstrap'
import CreateCollab from '../../../svg/createCollab.js';
import '../../../css/myCollab.css';
import Collab from './collab.js'

function ResponseDiv(props) {

  return (
    <Col className="cardFont ml-5">

      <div className="mx-4">
        <div className="my-3">
          <CreateCollab/>
          <span className="text-white display-5 ml-4">Ils sont intéressés</span>

          <Collab/>
          <Collab/>
        </div>
      </div>

    </Col>
  );


}
export default ResponseDiv;
