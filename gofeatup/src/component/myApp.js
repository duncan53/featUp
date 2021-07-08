import React, {useState} from "react";
import SideBar from "./sideBar"
import Header from "./header"
import Accueil from "./acceuil"
import Player from "./player"
import Playlist from "./Listen/playlist"
import MyArtiste from "./Listen/myArtiste"
import CreateCollab from "./Creation/CreateCollab/createCollab"
import SearchCollab from "./Creation/SearchCollab/searchCollab"
import MySound from "./Creation/MySounds/mySound"
import MySubscription from "./Subscription/mySubscription"
import MyParameter from "./Parameter/myParameter"
import Statistique from "./Creation/Statistique/statistique"
import { Row, Col } from 'react-bootstrap'
import '../css/myApp.css';


function MyApp() {

  const [myTitlte, setMyTitlte] = useState("Acceuil")

  const [audioSrc, setAudioSrc] = useState([]);

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
        : window.location.hash === "#mysond" ?
          <MySound  addMusic={addMusic} />
        : window.location.hash === "#myartiste" ?
          <MyArtiste  addMusic={addMusic} />
        : window.location.hash === "#messtats" ?
          <Statistique/>
        : <Accueil addMusic={addMusic} />}


        <Player musics={audioSrc} refreshMusics={refreshMusics}/>

      </Col>
    </Row>

  );
}

export default MyApp;
