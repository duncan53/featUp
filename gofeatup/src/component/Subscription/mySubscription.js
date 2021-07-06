import React from "react";
import { Row, Col, Button, Image } from 'react-bootstrap'
import '../../css/subscription.css';
import FeatUpPlus from '../../svg/featUpPlus.js';
import Infinitys from '../../svg/infinity.js';
import Soutenir from '../../svg/soutenir.js';
import Youtube from '../../svg/youtube.js';
import Star from '../../svg/star.js';
import SubArtiste from '../../svg/subArtiste.js';
import History from '../../svg/history.js';


function MySubscription(props) {

  return (
    <div className="myBody">
      <br/>

      <div style={{backgroundColor: "#17001f"}}>
        <Row className="ml-5">

          <Col className="m-4">
            <FeatUpPlus/><span className="text-white ml-2">FeatUp Plus</span>
            <center className="mt-3">
              <p className="text-white font-weight-bold">Seulement 7,99€ par mois, annulez quand vous le désirez</p>
              <div>
                <Star/><span style={{color: "#FFED4F"}}>3.99€ pour les étudiants</span>
              </div>
              <Button variant="primary" type="submit" className="mt-3 butonColorSub">
                Démarrer
              </Button>
            </center>

          </Col>

          <Col>
            <br/>
            <div className="mt-3">
              <Infinitys/><span className="text-white ml-3">Une écoute illimité, le monde vous appartient !</span>
            </div>
            <div className="mt-3">
              <Soutenir/><span className="text-white ml-3">Soutenez les artistes de notre plateforme</span>
            </div>
            <div className="mt-3">
              <Youtube/><span className="text-white ml-3">Aucune publicité lors de votre écoute !</span>
            </div>

          </Col>

        </Row>
      </div>

      <div style={{backgroundColor: "#120126"}}>

        <Row className="ml-5">
          <Col className="m-4">
            <SubArtiste/> <span className="text-white ml-2">Artistes soutenus ce mois</span>
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
            <History/> <span className="text-white ml-2">Historique</span>
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
export default MySubscription;
