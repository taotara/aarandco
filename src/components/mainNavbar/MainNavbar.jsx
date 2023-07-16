import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainNavbar.scss';

const MainNavbar = () => {

  return (
    <div className="main-navbar">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" id='main'>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <NavDropdown title="Our Services">
                <NavDropdown.Item as={Link} to="/services/audit and accounting">
                  Audit And Accounting
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/services/tax planing and compliance"
                >
                  Tax Planing And Compliance
                </NavDropdown.Item>
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
              <NavDropdown title="About Us">
                <NavDropdown.Item as={Link} to="/aboutus/the company">
                  The Company
                </NavDropdown.Item>
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
};

export default MainNavbar;