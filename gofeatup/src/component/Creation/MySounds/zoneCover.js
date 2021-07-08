import React, {useState} from "react";
import DropFile from '../../../svg/dropFile';

import { useDropzone } from "react-dropzone"


function ZoneCover(props) {


  //___________________________FILE___________________________

  const [cover, setCover] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      props.cover(acceptedFiles[0])
      setCover(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const images = cover.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
      </div>
    </div>
  ))



  //___________________________FILE___________________________

  return (
      <div {...getRootProps()} className="dropZoneStyle">
        <input {...getInputProps()} required/>
        <center>
          <br/>
          {cover.length > 0 ?
            <div>{images}</div>
          :
          <div>
            <DropFile/>
            <p className="darkPurple">Déposez une cover ou cliquez pour en rechercher</p>
          </div>
          }

          <br/>
        </center>

      </div>

  );


}
export default ZoneCover;
