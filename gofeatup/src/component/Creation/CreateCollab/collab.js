import React from "react";
import {  } from 'react-bootstrap'
import '../../../css/collab.css';
import ResponseRow from "./responseRow"

function Collab(props) {

  return (
    <div className="mt-3" >
      <div className="display-5 text-white" >
        Recherche d'un beatmaker
        <span data-numbers="4" className="ml-3"></span>
      </div>
      <ResponseRow/>
      <ResponseRow/>
    </div>
  );


}
export default Collab;
