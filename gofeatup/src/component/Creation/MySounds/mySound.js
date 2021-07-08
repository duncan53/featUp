import React, {useState, useEffect} from "react";
import CardMusic from "../../cardMusic";
import { Row, Col, Card, Modal, Form, Button } from 'react-bootstrap'
import '../../../css/myBody.css';
import '../../../css/mySound.css';
import AddMusicModal from '../../../svg/addMusicModal';
import MusicService from "../../../services/musicService.js";
import Select from 'react-select'


import ZoneSon from "./zoneSon"
import ZoneCover from "./zoneCover"



function MySound(props) {

  const [music, setMusic] = useState([]);

  const [cover, setCover] = useState(null);
  const [son, setSon] = useState(null);

  const [addMusic, setAddMusic] = useState(false);

  const [tabColla, setTabColla] = useState([]);
  const [allColla] = useState([]);

  const closeAddMusic = () => setAddMusic(false);
  const showAddMusic = () => setAddMusic(true);

  useEffect(() => {
    getMyMusic();
  },[]);

  const tabCollaChange = e => {
    setTabColla(e);
  }


  const getMyMusic = () =>{
    MusicService.getMy().then((res) => {
      if (res) {
        setMusic(res);
      }
    });
  }

  const pushMusic = (music) =>{
    props.addMusic(music);
  }

  const sonChange = e => {
    setSon(e);
  }

  const coverChange = e => {
    setCover(e);
  }

  const addMusicToDB = e => {
    if (e.target.name === "formAddMusic") {
      e.preventDefault();
      const formModal = new FormData(e.target);

      let tempName = formModal.get('nomAddMusic');
      let tempCollab = formModal.get('collabAddMusic');

      MusicService.addMusic(tempName, tempCollab, son, cover)
      .then((res) => {
          if (res.status === 201) {
            closeAddMusic()
            getMyMusic();
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
      <Row className="ml-2">

        <div className="mx-2 my-3" onClick={ () =>{showAddMusic()}}>
          <Col>
            <Card style={{ width: '9rem' }} className="border-0">
              <Card.Img variant="top" src="/images/addMusic.png"/>
                <Card.Text className="backgroundCard">
                  <center>
                    <p className="ptilte text-white">Ajouter une musique</p>
                  </center>
                </Card.Text>
            </Card>
          </Col>
        </div>

        {music.length <= 0 ? <></> : music.map((dat, index) => (
          <div key={index} onClick={ () =>{pushMusic(dat)}} className="mx-2 my-3">
            <CardMusic music={dat}  />
          </div>
        ))}

      </Row>

      <Modal
        show={addMusic}
        onHide={closeAddMusic}
        size="lg"

        >
          <Modal.Header closeButton className="modalStyle" style={{borderBottom: 0}}>
            <span><AddMusicModal/></span>
            <Modal.Title className="text-white ml-3">Ajouter un Son</Modal.Title>
          </Modal.Header>
          <Form onSubmit={addMusicToDB} name="formAddMusic">

          <Modal.Body className="modalStyle">

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Nom</Form.Label>
                  <Form.Control type="texte" placeholder="Nom de la musique" id="nomAddMusic" name="nomAddMusic" required/>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Collaborateur(s)</Form.Label>
                    <Select
                      closeMenuOnSelect={false}
                      value={tabColla}
                      isMulti
                      onChange={tabCollaChange}
                      placeholder="Sélectionner"
                      options={allColla}
                      id="collabAddMusic"
                      name="collabAddMusic"
                    />
                </Form.Group>

              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Son</Form.Label>
                    <ZoneSon son={sonChange}/>

                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Cover</Form.Label>
                    <ZoneCover cover={coverChange}/>
                </Form.Group>

              </Form.Row>




          </Modal.Body>

          <Modal.Footer className="modalStyle" style={{borderTop: 0}}>
            <Button variant="primary" type="submit" className="bottonModal">
              Ajouter le <br/> nouveau son
            </Button>
          </Modal.Footer>
        </Form>

      </Modal>
    </div>



  );


}
export default MySound;
