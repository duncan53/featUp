import React, {useState, useEffect} from "react";
import CardMusic from "./cardMusic";
import { Row } from 'react-bootstrap'
import '../css/myBody.css';

import MusicService from "../services/musicService.js";

function Accueil(props) {

  const [music, setMusic] = useState([]);

  useEffect(() => {
    getAllMusic();
  },[]);



  const getAllMusic = () =>{
    MusicService.getAll().then((res) => {
      if (res) {
        console.log(res);
        setMusic(res);
      }
    });
  }

  const pushMusic = (music) =>{
    props.addMusic(music);
  }

  return (
    <div className="myBody">
      <Row className="ml-2">

        {music.length <= 0 ? <></> : music.map((dat, index) => (
          <div key={index} onClick={ () =>{pushMusic(dat)}} className="mx-2 my-3">
            <CardMusic music={dat}  />
          </div>
        ))}

      </Row>
    </div>
  );


}
export default Accueil;
