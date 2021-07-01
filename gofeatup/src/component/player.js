import React, {useEffect, useState} from "react";
import '../css/player.css';

import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'


function Player(props) {

  const [musics, setMusics] = useState(props.musics);

  useEffect(() => {
    setMusics(props.musics);

  },[props.musics]);

  const refreshPropsMusics = (currentPlayId,audioLists,audioInfo) =>{
    console.log("test");
    console.log(audioLists);
    props.refreshMusics(audioLists)
  }

  return (
    <ReactJkMusicPlayer
      mode= "full"
      bounds={{"left": true}}
      toggleMode={true}
      audioLists={musics}
      autoPlay={false}
      showThemeSwitch={false}
      onAudioListsChange={refreshPropsMusics}
      responsive={false}
      />
  );
}

export default Player;
