import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/Image/logo2.png';

const Header = () => {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="img-fluid"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />


                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-5">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;