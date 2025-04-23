import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, Dropdown, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bankingImage from '../Images/Banking.png'; // ✅ Correct image import
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Navbar bg="info" expand="lg">
        <Navbar.Brand href="#home" className="fw-bold text-white">Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="banking-navbar" />
        <Navbar.Collapse id="banking-navbar">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/about" className="text-white">About Us</Nav.Link>
            <Nav.Link href="#personal" className="text-white">Personal Banking</Nav.Link>
            <Nav.Link href="#corporate" className="text-white">Corporate Banking</Nav.Link>
            <Nav.Link href="#agri" className="text-white">Agricultural & Rural Banking</Nav.Link>
            <Nav.Link href="#nri" className="text-white">NRI Services</Nav.Link>
            <Nav.Link href="#international" className="text-white">International Banking</Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center">
          <Dropdown className="me-2">
              <Dropdown.Toggle variant="light" id="login-dropdown">
                Login
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/personal-login">
                  Personal Login
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/corporate-login">
                  Corporate Login
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
           
            <FormControl type="search" placeholder="Search" className="me-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      {/* Below Navbar Content */}
      <Container className="mt-5">
        <Row className="align-items-center">
          {/* Left Side Text */}
          <Col md={6}>
            <h2>Welcome to Digital Banking</h2>
            <p>
              Experience secure and easy banking with our user-friendly platform. Whether you are a personal
              or corporate customer, we have everything you need to manage your finances.
            </p>
            <Button variant="info">Explore Services</Button>
          </Col>

          {/* Right Side Image */}
          <Col md={6}>
            <img
             src={bankingImage}
             alt="Banking Illustration"
             className="img-fluid rounded"
             
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
