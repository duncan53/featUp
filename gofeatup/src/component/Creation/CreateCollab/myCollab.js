import React from "react";
import CollabCard from "./collabCard"
import { Row } from 'react-bootstrap'

function MyCollab(props) {

  return (
    <div className="m-5">

        <Row>
          <CollabCard/>
        </Row>

    </div>
  );


}
export default MyCollab;
