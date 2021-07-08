import React, {useState, useEffect} from "react";
import CollabCard from "./collabCard"
import ResponseDiv from "./responseDiv"
import { Row } from 'react-bootstrap'
import ServiceCollab from '../../../services/collabService';

function MyCollab(props) {

  const [collab, setCollab] = useState([]);

  useEffect(() => {
    getMyCollab();
  },[]);

  const getMyCollab = () =>{
    ServiceCollab.getMy().then((res) => {
      console.log(res);
      if (res) {
        setCollab(res);
      }
    });
  }


  return (
    <div className="m-5">

        <Row>



          {collab.length <= 0 ? <></> : collab.map((dat, index) => (
            <>
            <div key={index}>
              <CollabCard collab={dat}/>
            </div >


            { index === 0 ?
              <ResponseDiv collab={collab}/>
              : null}

              </>
          ))}



        </Row>

    </div>
  );


}
export default MyCollab;
