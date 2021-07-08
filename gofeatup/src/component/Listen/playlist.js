import React, {useEffect, useState} from "react";
import '../../css/myBody.css';
import PlaylistService from '../../services/playlistService';
import { Tab, Tabs } from 'react-bootstrap'

function Playlist() {

  const [playlist, setPlaylist] = useState([]);


  useEffect(() => {
    getMyPlaylist();
  },[]);


  const getMyPlaylist = () =>{
    PlaylistService.getMy().then((res) => {
      if (res) {
        setPlaylist(res);
      }
    });
  }

  return (
    <div className="myBody">
      <Tabs defaultActiveKey="default" id="uncontrolled-tab-example">

          <Tab eventKey="default" title="+" >
            test
          </Tab>

          {playlist.length <= 0 ? <></> : playlist.map((dat, index) => (
            <Tab eventKey={dat.label} title={dat.label} >
              {dat.label}
            </Tab>
          ))}



      </Tabs>
    </div>
  );


}
export default Playlist;
