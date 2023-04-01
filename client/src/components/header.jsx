import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import About from '../pages/about.jsx'

const Header = ({ session = false }) => {
    const [showAbout, setShowAbout] = useState(false);
    const handleCloseAbout = () => setShowAbout(false);
    const handleShowAbout = () => setShowAbout(true);
    return (
        <Row className="pt-2 border border-1">
            <Col xs={12} md={6} >
                <Nav defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/home">
                            <Link to="/">
                                <Image src="https://plchldr.co/i/85x65?&bg=1111111&fc=ffffff&text=placeholderLogo" fluid rounded />
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="my-auto">
                        <Nav.Link eventKey="link-1" onClick={handleShowAbout}>Sobre nosotros</Nav.Link>
                        <About show={showAbout} handleClose={handleCloseAbout} />
                    </Nav.Item>
                    <Nav.Item as="li" className="my-auto">
                        <Nav.Link eventKey="link-2">
                            <Link to="/">Ver ofertas</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col className="text-end my-auto" xs={12} md={6} >
                {(() => {
                    if (session === true) {
                        return (
                            <>
                                <Image src='client/src/styles/img/user.png' alt="user photo" fluid roundedCircle />
                                <DropdownButton id="dropdown-basic-button" title="Bienvenido usuario">
                                    <Dropdown.Item href="#/action-1">Configuración del perfil</Dropdown.Item>
                                    <Dropdown.Item href="/">Salir</Dropdown.Item>
                                </DropdownButton>
                            </>
                        )
                    } else {
                        return (<>
                            <Link to="/registro" className="mx-2">Registrarse</Link>
                            <Link to="/loggin" className="mx-2">Ingresar</Link>
                        </>)
                    }
                })()}
            </Col>
        </Row>
    )
};

export default Header;