import React, {useState} from "react";
import SideBar from "./sideBar"
import Header from "./header"
import Accueil from "./acceuil"
import Player from "./player"
import Playlist from "./Listen/playlist"
import CreateCollab from "./Creation/CreateCollab/createCollab"
import SearchCollab from "./Creation/SearchCollab/searchCollab"
import MySubscription from "./Subscription/mySubscription"
import MyParameter from "./Parameter/myParameter"
import { Row, Col } from 'react-bootstrap'
import '../css/myApp.css';


function MyApp() {

  const [myTitlte, setMyTitlte] = useState("Acceuil")

  const [audioSrc, setAudioSrc] = useState([
    {
      musicSrc: "/audio/combined.wav",
      cover: "/audio/cover1.jpg",
      name: "Combined",
      singer: "Mathieu",
      key: 1
    },
    {
      musicSrc: "/audio/rap.wav",
      cover: "/audio/cover2.jpg",
      name: "Rap",
      singer: "Théo",
      key: 2
    }
  ]);

  const onPageChange = e => {
    setMyTitlte(e)
  };

  const addMusic = e => {
    setAudioSrc(audioSrc => [...audioSrc, e])
    //console.log(audioSrc);
  };

  const refreshMusics = e => {
    setAudioSrc(e)
    //console.log(audioSrc);
  };




  return (
    <Row>
      <Col sm={2} className="sideBarBack">

        <SideBar changePage={onPageChange} />

      </Col>



      <Col className="noPadding">

        <Header myTitle={myTitlte}/>

        { window.location.hash === "#playlist" ?
          <Playlist />
        : window.location.hash === "#createCollab" ?
          <CreateCollab />
        : window.location.hash === "#abonnement" ?
          <MySubscription />
        : window.location.hash === "#searchCollab" ?
          <SearchCollab />
        : window.location.hash === "#parameter" ?
          <MyParameter />
        : <Accueil addMusic={addMusic} />}


        <Player musics={audioSrc} refreshMusics={refreshMusics}/>

      </Col>
    </Row>

  );
}

export default MyApp;
