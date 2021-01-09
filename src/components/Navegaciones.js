import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Imms from './img/ppp.jpg'

export default class Navegasiones extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand >
                    <img
                        src={Imms}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse >
                    <Nav className="mr-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/portafolio" className="nav-link">
                                    CV
                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Redes" className="nav-link">
                                    Redes
                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Especialidades" className="nav-link">
                                    Especialidades
                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Trabajos" className="nav-link">
                                    Trabajos
                </Link>
                            </li>

                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
