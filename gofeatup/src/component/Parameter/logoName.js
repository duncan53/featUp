import React, {useState} from "react";
import { Image, Row, Col, Modal, Form, Button } from 'react-bootstrap'
import FeatUpPlus from '../../svg/featUpPlus';
import UserService from '../../services/userService';

import ZoneMyImage from "./zoneMyImage"


function LogoName(props) {

  const [image, setImage] = useState(null);

  const [addImage, setAddImage] = useState(false);

  const closeAddImage = () => setAddImage(false);
  const showAddImage = () => setAddImage(true);


  function myDateConverterFR(myDate){
    var tempDate = new Date(myDate);

    var month = tempDate.getMonth()+1;
    var day = tempDate.getDate();

    if (month < 10) {month = "0" + month};
    if (day < 10) {day = "0" + day};
    return day+"/"+month+"/"+tempDate.getFullYear();
  }

  const imageChange = e => {
    setImage(e);
  }

  const changeMyImage = e => {
    if (e.target.name === "formChangeMyImage") {
      e.preventDefault();

      UserService.changeMyImage(image)
      .then((res) => {
          if (res.status === 201) {
            closeAddImage()
            props.reload(true);
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
    <div className="backLogo">
      <Row>

        <Col xs={2} className="ml-5 my-5">
          <Image style={{width: "70%"}} src={props.info.image} roundedCircle onClick={ () =>{showAddImage()}} />
        </Col>

        <Col className="my-5">
          <br/>
          <span className="text-white fontName mr-2" >{props.info.pseudo}</span> {props.info.featUpPlus ? <FeatUpPlus/> : null}
          <p className="text-white mt-2" ><small>Compte créé le {myDateConverterFR(props.info.createdAt)}</small></p>
        </Col>

      </Row>

      <Modal
        show={addImage}
        onHide={closeAddImage}
        size="lg"

        >
          <Modal.Header closeButton className="modalStyle" style={{borderBottom: 0}}>
            <Modal.Title className="text-white w-100">Modification de photo de profil</Modal.Title>
          </Modal.Header>
          <Form onSubmit={changeMyImage} name="formChangeMyImage">

          <Modal.Body className="modalStyle">

              <Form.Row>

                <Form.Group as={Col}>
                  <Form.Label>Cover</Form.Label>
                    <ZoneMyImage image={imageChange}/>
                </Form.Group>

              </Form.Row>

          </Modal.Body>

          <Modal.Footer className="modalStyle" style={{borderTop: 0}}>
            <Button variant="primary" type="submit" className="bottonModal">
              Changer la  <br/> photo de profil
            </Button>
          </Modal.Footer>
        </Form>

      </Modal>
    </div>
  );


}
export default LogoName;
