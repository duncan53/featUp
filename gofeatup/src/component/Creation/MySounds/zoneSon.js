import React, {useState} from "react";
import FileGood from '../../../svg/fileGood';
import DropFile from '../../../svg/dropFile';

import { useDropzone } from "react-dropzone"


function ZoneSon(props) {


  //___________________________FILE___________________________

  const [son, setSon] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: "audio/*",
    onDrop: (acceptedFiles) => {
      props.son(acceptedFiles[0])
      setSon(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })



  //___________________________FILE___________________________

  return (
    <div {...getRootProps()} className="dropZoneStyle">
      <input {...getInputProps()} required/>
      <center>
        <br/>
        {son.length > 0 ?
          <div>
            <br/>
            <FileGood/>
          </div>
        :
        <div>
          <DropFile/>
          <p className="darkPurple">Déposez un fichier ou cliquez pour en rechercher</p>
        </div>
        }

        <br/>
      </center>

    </div>

  );


}
export default ZoneSon;
