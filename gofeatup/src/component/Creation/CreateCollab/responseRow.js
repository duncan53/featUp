import React, {useState} from "react";
import { Row, Col, Modal, Form } from 'react-bootstrap'
import '../../../css/collab.css';
import UserIcon from '../../../svg/user.js';
import Chat from '../../../svg/chat.js';
import Croix from '../../../svg/croix.js';

function ResponseRow(props) {

  const [showDetail, setShowDetail] = useState(false);

  const closeShowDetail = () => setShowDetail(false);
  const showShowDetail = () => setShowDetail(true);

  return (
    <div className="mt-3">
      <Row>
        <Col><span data-numbers="RE" className="ml-3"></span></Col>
        <Col className="text-white">{props.response.user.pseudo}</Col>
        <Col xs={1}><UserIcon/></Col>
        <Col xs={1} onClick={ () =>{showShowDetail()}}><Chat/></Col>
        <Col xs={1}><Croix/></Col>
      </Row>
      <hr style={{backgroundColor: "#3E1747"}}/>

        <Modal
          show={showDetail}
          onHide={closeShowDetail}
          size="lg"

          >
            <Modal.Header closeButton className="modalStyle" style={{borderBottom: 0}}>
              <Modal.Title className="text-white ml-3">Réponse a votre collab</Modal.Title>
            </Modal.Header>

            <Modal.Body className="modalStyle">

                  <Form.Row>

                    <Form.Group as={Col}>
                      <Form.Control as="textarea" defaultValue={props.response.message} readOnly/>
                    </Form.Group>

                  </Form.Row>


            </Modal.Body>


        </Modal>

    </div>

  );


}
export default ResponseRow;
