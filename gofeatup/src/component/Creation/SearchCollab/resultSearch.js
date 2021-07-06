import React from "react";
import { Row, Col } from 'react-bootstrap'
import '../../../css/resultSearch.css';
import CardResult from "./cardResult"

function ResultSearch(props) {


  return (
    <Col className="cardFont mx-4">
      <br/>
      <div className="mx-4">

        <div className="my-4">
          <center>
            <h4 className="text-white">Ils recherchent des collab</h4>
          </center>
        </div>

        <Row >
          <CardResult/>
          <CardResult/>
          <CardResult/>
          <CardResult/>
          <CardResult/>
        </Row>

        <div>
        </div>

      </div>


    </Col>
  );


}
export default ResultSearch;
