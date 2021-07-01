import React from "react";
import { Tab, Tabs } from 'react-bootstrap'
import AddCollab from "./addCollab";
import MyCollab from "./myCollab";
import '../../../css/createCollab.css';

function CreateCollab(props) {

  return (
    <div className="myBody">
      <Tabs defaultActiveKey="addCollab" id="uncontrolled-tab-example">

          <Tab eventKey="addCollab" title="Créer une annonce" >
            <AddCollab />
          </Tab>

          <Tab eventKey="myCollab" title="Antécédent" >
            <MyCollab />
          </Tab>

      </Tabs>
    </div>
  );


}
export default CreateCollab;
