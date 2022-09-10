import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="" expand="lg">
                <Container>
                    <Navbar.Brand  className='fw-bold fs-3 ' href="#home"><img
                        src="https://i.ibb.co/0CcJJGB/salad.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top mx-2"
                        alt="React Bootstrap logo"
                    />FoodHub
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto fs-5 ">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Features</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            <Nav.Link href="#link">Blog</Nav.Link>
                        </Nav>
                        <Button className='fs-5 rounded-pill'>Contact Us</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;