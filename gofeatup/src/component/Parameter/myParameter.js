import React from "react";
import {  } from 'react-bootstrap'
import LogoName from "./logoName"
import Account from "./account"
import Mention from "./mention"
import '../../css/parameter.css';

function MyParameter(props) {

  return (
    <div className="myBody">

      <LogoName/>

      <Account/>

      <Mention/>

    </div>
  );


}
export default MyParameter;
