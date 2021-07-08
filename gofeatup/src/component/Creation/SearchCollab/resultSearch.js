import React, {useState, useEffect} from "react";
import { Row, Col, Modal, Form, Button } from 'react-bootstrap'
import '../../../css/resultSearch.css';
import CardResult from "./cardResult"
import ServiceCollab from '../../../services/collabService';

function ResultSearch(props) {

  const [collab, setCollab] = useState([]);
  const [detail, setDetail] = useState({});

  const [showDetail, setShowDetail] = useState(false);

  const closeShowDetail = () => setShowDetail(false);
  const showShowDetail = () => setShowDetail(true);

  useEffect(() => {
    getOtherCollab();
  },[]);

  const getOtherCollab = () =>{
    ServiceCollab.getOther().then((res) => {
      if (res) {
        setCollab(res);
      }
    });
  }


  const rowEvent = e =>{
    console.log(e);
    setDetail(e);
    showShowDetail()
  }

  const addResponse = e => {
    if (e.target.name === "formAddResponse") {
      e.preventDefault();
      const formModal = new FormData(e.target);

      let responseModal = formModal.get('responseModal');

      ServiceCollab.addResponse(detail._id, responseModal)
      .then((res) => {
          if (res.status === 201) {
            closeShowDetail()
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
    <Col className="cardFont mx-4">
      <br/>
      <div className="mx-4">

        <div className="my-4">
          <center>
            <h4 className="text-white">Ils recherchent des collab</h4>
          </center>
        </div>

        <Row >

          {collab.length <= 0 ? <></> : collab.map((dat, index) => (
            <CardResult collab={dat} key={index} onSelect={rowEvent}/>
          ))}
        </Row>

        <div>
        </div>

      </div>

      <Modal
        show={showDetail}
        onHide={closeShowDetail}
        size="lg"

        >
          <Modal.Header closeButton className="modalStyle" style={{borderBottom: 0}}>
            <Modal.Title className="text-white ml-3">Répondre à la colab</Modal.Title>
          </Modal.Header>
          <Form onSubmit={addResponse} name="formAddResponse">

          <Modal.Body className="modalStyle">

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Titre</Form.Label>
                  <Form.Control type="texte" defaultValue={detail.titre} readOnly/>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Genre</Form.Label>
                  <Form.Control type="texte" defaultValue={detail.genre} readOnly/>
                </Form.Group>

              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Type de projet</Form.Label>
                  <Form.Control type="texte" defaultValue={detail.type} readOnly/>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Localisation</Form.Label>
                  <Form.Control type="texte" defaultValue={detail.location} readOnly/>
                </Form.Group>

              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" defaultValue={detail.description} readOnly/>
                </Form.Group>

              </Form.Row>

              <hr
                style={{
                    color: "#3e1747",
                    backgroundColor: "#3e1747",
                    height: 3
                }}
              />
              <h4> Votre réponse</h4>

                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Votre réponse</Form.Label>
                    <Form.Control as="textarea" name="responseModal" id="responseModal"/>
                  </Form.Group>

                </Form.Row>


          </Modal.Body>

          <Modal.Footer className="modalStyle" style={{borderTop: 0}}>
            <Button variant="primary" type="submit" className="bottonModal">
              Répondre
            </Button>
          </Modal.Footer>
        </Form>

      </Modal>


    </Col>
  );


}
export default ResultSearch;
