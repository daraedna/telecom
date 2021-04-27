import React from 'react';
import { BoxArrowRight } from 'react-bootstrap-icons';
import { Nav, Navbar } from 'react-bootstrap';
import Exemple from '../../images/exemple.png';

import './header.css';

const Header = () => {

  return (
    <>
    <header>
        <Navbar expand="lg" fixed="top">
            <Navbar.Brand href="" className="ml-sm-5">
            <img
                src="/logo.png"
                className="d-inline-block align-top"
                alt="Lux Telecom"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" bg="dark" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ml-lg-auto ml-sm-5 mr-5 align-items-lg-center">
                <Nav.Link 
                  href="" 
                  className="text-white d-flex justify-content-lg-center mt-5 mt-lg-0 mr-lg-5 align-items-center"
                >
                  <img 
                    src={Exemple} 
                    width={40} 
                    height={40} 
                    style={{borderRadius:'100%'}}
                  />
                  <div>
                    <p className="m-0 ml-2"><strong>Daraédna</strong></p>
                    <p className="m-0 ml-2">Admin</p>
                  </div>
                </Nav.Link>

                <Nav.Link href="" className="text-white">
                  <BoxArrowRight />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
    </>
  );
}

export default Header;
