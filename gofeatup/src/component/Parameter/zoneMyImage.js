import React, {useState} from "react";
import DropFile from '../../svg/dropFile';

import { useDropzone } from "react-dropzone"


function ZoneMyImage(props) {


  //___________________________FILE___________________________

  const [son, setSon] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      props.image(acceptedFiles[0])
      setSon(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const images = son.map((file) => (
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
        {son.length > 0 ?
          <div>
            <br/>
            <div>{images}</div>
          </div>
        :
        <div>
          <DropFile/>
          <p className="darkPurple">Déposez une image ou cliquez pour en rechercher</p>
        </div>
        }

        <br/>
      </center>

    </div>

  );


}
export default ZoneMyImage;
