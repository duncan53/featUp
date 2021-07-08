import React from "react";
import { Card, Col } from 'react-bootstrap'
import '../css/cardMusic.css';

function CardMusic(Props) {

  return (
      <Col>
        <Card style={{ width: '9rem' }} className="border-0">
          <Card.Img variant="top" src={Props.music.cover}/>
            <Card.Text className="backgroundCard">
              <center>
                <p className="ptilte text-white">{Props.music.name}</p>
                <p className="ptilte text-white"><small>{Props.music.userOwner.pseudo}</small></p>
              </center>
            </Card.Text>
        </Card>
      </Col>


  );

}
export default CardMusic;
