import React, {useState, useEffect} from "react";
import {  } from 'react-bootstrap'
import LogoName from "./logoName"
import Account from "./account"
import Mention from "./mention"
import '../../css/parameter.css';
import UserService from '../../services/userService';

function MyParameter(props) {

  const [info, setInfo] = useState({"pseudo": "", "email": "", "dateNaissance": "", "featUpPlus": false, "image": "/images/defaultUser.png"});

  useEffect(() => {
    getMyInfo();
  },[]);



  const getMyInfo = () =>{
    UserService.getMyInfo().then((res) => {
      if (res) {
        setInfo(res);
      }
    });
  }

  const onReload = e =>{
    getMyInfo();
  }

  return (
    <div className="myBody">

      <LogoName info={info} reload={onReload}/>

      <Account info={info}/>

      <Mention/>

    </div>
  );


}
export default MyParameter;
