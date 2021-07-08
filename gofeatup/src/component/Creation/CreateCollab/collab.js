import React from "react";
import {  } from 'react-bootstrap'
import '../../../css/collab.css';
import ResponseRow from "./responseRow"

function Collab(props) {

  return (
    <div className="mt-3" >
      <div className="display-5 text-white" >
        {props.collab.titre}
        <span data-numbers={props.collab.response.length} className="ml-3"></span>
      </div>

        {props.collab.response.length <= 0 ? <></> : props.collab.response.map((dat, index) => (
          <ResponseRow key={index} response={dat}/>
        ))}
    </div>
  );


}
export default Collab;
