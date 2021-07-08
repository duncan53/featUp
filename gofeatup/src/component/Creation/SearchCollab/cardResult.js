import React from "react";
import { Col, Image } from 'react-bootstrap'
import '../../../css/resultSearch.css';

function CardResult(props) {

  return (
    <Col className="cardSearch ml-4 mt-4 cardFlex" xs={3} onClick={ () =>{props.onSelect(props.collab)}}>

      <div className="my-3">
        <center>
          <Image style={{width: "80%"}} src="http://localhost:3001/files/cover11620488591934.jpg" roundedCircle />
            <br/>
          <br/>
          <h5 className="text-white">Moimoi</h5>
        </center>

        <div className="cardSearchInside">

          <div className="mx-2">
            <br/>
            <p className="text-white">{props.collab.titre}</p>
            <p className="text-white">{props.collab.type}</p>
            <p className="text-white">{props.collab.genre}</p>
              <br/>
          </div>

        </div>
      </div>

    </Col>
  );


}
export default CardResult;
