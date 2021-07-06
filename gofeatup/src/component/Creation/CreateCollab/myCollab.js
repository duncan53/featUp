import React from "react";
import CollabCard from "./collabCard"
import ResponseDiv from "./responseDiv"
import { Row } from 'react-bootstrap'

function MyCollab(props) {

  return (
    <div className="m-5">

        <Row>
          <CollabCard/>

          <ResponseDiv/>
        </Row>

    </div>
  );


}
export default MyCollab;
