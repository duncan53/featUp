import React, { useState } from "react";
import '../css/sideBar.css';
import Boulon from '../svg/boulon.js';
import Musique from '../svg/musique.js';
import MyMain from '../svg/main.js';
import MusiqueTrait from '../svg/musiquetrait.js';
import FeatUp from '../svg/featUp.js';



import {Nav, Collapse } from 'react-bootstrap'


function SideBar(props) {

  const [colorBoulon] = useState('white');
  const [colorMusique] = useState('white');
  const [colorMain] = useState('white');
  const [colorTrait] = useState('white');
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const resetOpen = () => {
    setOpen2(false);
    setOpen3(false);
  }

  const myRef = (path) =>{
    window.location.hash = path;
  }

  const changePage = (ref, title) => {
    myRef(ref);
    props.changePage(title);
  }


  return (
    <div className="lefSticky">
      <Nav defaultActiveKey="/home" className="flex-column lefSticky">
        <center> <Nav.Link onClick={() => {changePage("", "Acceuil")}}><FeatUp alt="goFeat"/></Nav.Link> </center>
          <Nav.Link  value="Setting" className="mySvg" onClick={() => {resetOpen(); setOpen2(!open2)}}><Musique  color={colorMusique} alt="Setting" value="Setting"/> Écoute</Nav.Link>

          <Collapse in={open2} className="fullSecondMenu">
              <div id="example-collapse-text">
                <Nav.Link value="Setting" className="secondMenu" onClick={() => {changePage("playlist", "Playlist")}}> Ma Playlist</Nav.Link>
                <Nav.Link value="Setting" className="secondMenu" > Mes Artistes</Nav.Link>
                <Nav.Link value="Setting" className="secondMenu" > Récemment Joué</Nav.Link>
                <Nav.Link value="Setting" className="secondMenu" > Mes Statistiques</Nav.Link>
              </div>
            </Collapse>

          <Nav.Link  value="Upload" className="mySvg" onClick={() => {resetOpen(); setOpen3(!open3)}}><MyMain  color={colorMain} alt="Upload" value="Upload"/> Création</Nav.Link>

          <Collapse in={open3} className="fullSecondMenu">
            <div id="example-collapse-text">
              <Nav.Link value="Setting" className="secondMenu" > Mes Sons</Nav.Link>
              <Nav.Link value="Setting" className="secondMenu" > Mes Statistiques</Nav.Link>
              <Nav.Link value="Setting" className="secondMenu" onClick={() => {changePage("createCollab", "Créer une Collab")}}> Créer une Collab</Nav.Link>
              <Nav.Link value="Setting" className="secondMenu" onClick={() => {changePage("searchCollab", "Chercher une Collab")}}> Chercher une Collab</Nav.Link>
              <Nav.Link value="Setting" className="secondMenu" > Messagerie</Nav.Link>
            </div>
          </Collapse>

          <Nav.Link  value="Social" className="mySvg"onClick={() => {resetOpen(); changePage("abonnement", "Abonnements")}}> <MusiqueTrait  color={colorTrait} alt="Social" value="Social"/>Abonnement</Nav.Link>


        <Nav.Link value="Streaming" className="mySvg" onClick={() => {resetOpen(); changePage("parameter", "Paramètres")}} ><Boulon  color={colorBoulon} alt="Streaming" value="Streaming"/> Paramètres</Nav.Link>

      </Nav>
    </div>

  );
}

export default SideBar;
