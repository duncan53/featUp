import React from "react";
import { Card, Col } from 'react-bootstrap'
import '../css/cardMusic.css';

function CardMusic(Props) {

  return (
      <Col>
        <Card style={{ width: '9rem' }} className="border-0">
          <Card.Img variant="top" src={Props.music.cover} />
        </Card>
      </Col>


  );

}
export default CardMusic;
