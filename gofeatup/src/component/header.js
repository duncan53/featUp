import React from "react";
import { Navbar, Nav } from 'react-bootstrap'
import '../css/header.css';

function Header(props) {


  return (
    <div className="sticky" style={{"backgroundColor": "white"}}>
      <Navbar bg="#ffffff" expand="lg" className="sticky">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home" className="Headerh3"><h3>{props.myTitle}</h3></Nav.Link>
          </Nav>

            <p className="text-light mr-2">MECHTA Mathieu</p>
            <p data-letters="MM"></p>


        </Navbar.Collapse>
      </Navbar>
    </div>

  );
}
export default Header;
