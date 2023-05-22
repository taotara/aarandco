import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../assets/logo.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainNavbar.scss';


const MainNavbar = () => {

  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  return (
    <div className="main-navbar">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="justify-content-end me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <NavDropdown
                title="Our Services"
                id="services"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item as={Link} to="/services/audit and accounting">
                  Audit And Accounting
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/services/tax planing and compliance"
                >
                  Tax Planing And Compliance
                </NavDropdown.Item>
                <NavDropdown.Item />
                <NavDropdown.Item as={Link} to="/services/company secretarial">
                  Company Secretarial
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/human resources">
                  Human Resources
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/financial advisory">
                  Financial Advisory
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="About Us"
                id="aboutUs"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item as={Link} to="/aboutus/the company">
                  The Company
                </NavDropdown.Item>
                <NavDropdown.Item />
                <NavDropdown.Item as={Link} to="/aboutus/our team">
                  Our Team
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/Clientele">
                Clientele
              </Nav.Link>
              <Nav.Link as={Link} to="/career">
                Career
              </Nav.Link>
              <Nav.Link as={Link} to="/Contact Us">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainNavbar