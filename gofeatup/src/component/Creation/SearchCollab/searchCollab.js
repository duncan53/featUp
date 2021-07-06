import React, {useEffect, useState} from "react";
import { Row } from 'react-bootstrap'
import CritereCollab from "./critere"
import ResultSearch from "./resultSearch"
import RoleService from "../../../services/roleService.js";

function SearchCollab(props) {

  const [roleSearch, setRoleSearch] = useState([]);

  useEffect(() => {
    getAllRole();
  },[]);

  const getAllRole = () =>{
    RoleService.getAll().then((res) => {
      if (res) {
        setRoleSearch(res);
      }
    });
  }


  return (
    <div className="myBody">

      <div className="ml-5">
        <br/>
        <Row >

          <CritereCollab role={roleSearch}/>
          <ResultSearch/>

        </Row>
      </div>


    </div>
  );


}
export default SearchCollab;
