import React, {useState} from "react";
import { Row, Col, Button, Image, Modal, Form, Container } from 'react-bootstrap'
import '../../css/subscription.css';
import FeatUpPlus from '../../svg/featUpPlus.js';
import Infinitys from '../../svg/infinity.js';
import Soutenir from '../../svg/soutenir.js';
import Youtube from '../../svg/youtube.js';
import Star from '../../svg/star.js';
import SubArtiste from '../../svg/subArtiste.js';
import History from '../../svg/history.js';
import ZoneCertif from './zoneCertif';

import UserService from '../../services/userService';


function MySubscription(props) {

  const [showSub, setShowSub] = useState(false);
  const closeShowSub = () => setShowSub(false);
  const showShowSub = () => setShowSub(true);

  const [showSubPay, setShowSubPay] = useState(false);
  const closeShowSubPay = () => setShowSubPay(false);
  const showShowSubPay = () => setShowSubPay(true);

  const [colorCol1, setColorCol1] = useState("#050007");
  const [colorCol2, setColorCol2] = useState("#050007");
  const [colorCol3, setColorCol3] = useState("#050007");

  const [price, setPrice] = useState("0");
  const [formule, setFormule] = useState("");

  const eventCol = (nb, priceF, formuleF) => {
    setColorCol1("#050007");
    setColorCol2("#050007");
    setColorCol3("#050007");

    setPrice(priceF);
    setFormule(formuleF);

    switch (nb) {
      case 1:
        setColorCol1("#C803CA");
        break;
      case 2:
        setColorCol2("#C803CA");
        break;
      case 3:
        setColorCol3("#C803CA");
        break;
      default:

    }
  };


  const getSubPlus = e => {
    if (e.target.name === "formGetSub") {
      e.preventDefault();
      UserService.subFeatUpPlus()
      .then((res) => {
          if (res.status === 201) {
            closeShowSubPay();
            alert("Félicitaion vous êtes désormait membre FeatUpPlus !")
          }
        })
        .catch(error => {
          if (error.response.status === 401) {
            window.location = "/"
          } else {
            return error;
          }
        });
    }
  }

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
              <Button variant="primary" type="submit" className="mt-3 butonColorSub" onClick={ () =>{showShowSub()}}>
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


      <Modal
        show={showSub}
        onHide={closeShowSub}
        size="lg"

        >
          <Modal.Header closeButton className="modalStyle text-center" style={{borderBottom: 0}}>
            <Modal.Title className="text-white w-100">
              Abonnement <p className="w-100"><small>Choisissez votre formule pour poursuivre</small></p></Modal.Title><br/>
          </Modal.Header>

          <Modal.Body className="modalStyle">

            <Row>
              <Col>
                <div style={{"borderColor": colorCol1}} className="colModalSub" onClick={ () =>{eventCol(1, "3.99 €", "Formule étudiante")}}>
                  <center>
                    <div className="my-3">
                      <h5 className="text-white">Formule étudiante</h5>
                      <p className="h4 my-3" style={{"color": "#FFED4F"}}>3.99 €*</p>
                      <p className="text-white"><small>Qualité du son : 256 Kbps</small></p>
                      <p className="text-white"><small>Plus aucune publicité</small></p>
                      <p className="text-white"><small>Résiliable à tout moment</small></p>
                      <p className="text-white"><small>Renouvelable chaque mois</small></p>
                      <p><small className="text-white">* Sous réserve d’avoir un certificat d’étude valide</small></p>
                    </div>
                  </center>
                </div>
              </Col>

              <Col>
                <div style={{"borderColor": colorCol2}} className="colModalSub" onClick={ () =>{eventCol(2, "7.99 €", "Formule standard")}}>
                  <center>
                    <div className="my-3">
                      <h5 className="text-white">Formule standard</h5>
                      <p className="h4 my-3" style={{"color": "#FFED4F"}}>7.99 €</p>
                      <p className="text-white"><small>Qualité du son : 256 Kbps</small></p>
                      <p className="text-white"><small>Plus aucune publicité</small></p>
                      <p className="text-white"><small>Résiliable à tout moment</small></p>
                      <p className="text-white"><small>Renouvelable chaque mois</small></p>
                      <br/><br/>
                    </div>
                  </center>
                </div>
              </Col>

              <Col>
                <div style={{"borderColor": colorCol3}} className="colModalSub" onClick={ () =>{eventCol(3, "12.99 €", "Formule pro")}}>
                  <center>
                    <div className="my-3">
                      <h5 className="text-white">Formule pro</h5>
                      <p className="h4 my-3" style={{"color": "#FFED4F"}}>12.99 €</p>
                      <p className="text-white"><small>Qualité du son : 320 Kbps</small></p>
                      <p className="text-white"><small>Plus aucune publicité</small></p>
                      <p className="text-white"><small>Résiliable à tout moment</small></p>
                      <p className="text-white"><small>Renouvelable chaque mois</small></p>
                      <br/><br/>
                    </div>
                  </center>
                </div>
              </Col>
            </Row>


          </Modal.Body>

          <Modal.Footer className="modalStyle" style={{borderTop: 0}}>
            <Button variant="primary" onClick={ () =>{closeShowSub(); showShowSubPay()}} className="bottonModal">
              Poursuivre
            </Button>
          </Modal.Footer>

      </Modal>

      <Modal
        show={showSubPay}
        onHide={closeShowSubPay}
        size="lg"

        >
          <Modal.Header closeButton className="modalStyle text-center" style={{borderBottom: 0}}>
            <Modal.Title className="text-white w-100">
              {formule} <p className="w-100"><small>Entrez vos information de payement</small></p>
            <p style={{"color": "#FFED4F"}}>{price}</p>
          </Modal.Title><br/>
          </Modal.Header>

          <Form onSubmit={getSubPlus} name="formGetSub">
          <Modal.Body className="modalStyle">

            <Container>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Date d'expiration</Form.Label>
                  <Form.Control type="date" id="subDateFrom" name="subDateFrom" required/>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Cryptogramme</Form.Label>
                    <Form.Control type="number" id="subCryptoFrom" name="subCryptoFrom" required/>
                </Form.Group>

              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Numéro de carte</Form.Label>
                    <Form.Control type="number" id="subCarteFrom" name="subCarteFrom" required/>
                </Form.Group>

              </Form.Row>

              {formule === "Formule étudiante" ?
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Certificat d'étude</Form.Label>
                    <ZoneCertif/>
                  </Form.Group>

                </Form.Row>
              : null}

            </Container>




          </Modal.Body>

          <Modal.Footer className="modalStyle" style={{borderTop: 0}}>
            <Button variant="primary" type="submit" className="bottonModal">
              S'abonner
            </Button>
          </Modal.Footer>
        </Form>

      </Modal>



    </div>
  );


}
export default MySubscription;
