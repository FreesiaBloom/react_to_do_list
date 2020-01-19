import React from 'react';
import '../../styling/layoutStyle.scss';
import {Navbar, Nav, /*NavDropdown, Button, Form, FormControl*/} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function NavbarNavigation() {
    return (
        <Navbar expand="lg" className="navBar">
            <Navbar.Brand href="#home">
                <p className="brandName">React</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link>
                        <Link to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/about">About</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
