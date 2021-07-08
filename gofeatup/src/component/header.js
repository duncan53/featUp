import React, {useState, useEffect} from "react";
import { Navbar, Nav } from 'react-bootstrap'
import '../css/header.css';
import UserService from "../services/userService.js";

function Header(props) {

  const [info, setInfo] = useState({"pseudo": ""});

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


  return (
    <div className="sticky" style={{"backgroundColor": "white"}}>
      <Navbar bg="#ffffff" expand="lg" className="sticky">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home" className="Headerh3"><h3>{props.myTitle}</h3></Nav.Link>
          </Nav>

            <p className="text-light mr-2">{info.pseudo}</p>
            <p data-letters={info.pseudo.substring(0, 2).toUpperCase()} onClick={ () =>{window.location = "/";}}></p>


        </Navbar.Collapse>
      </Navbar>
    </div>

  );
}
export default Header;
