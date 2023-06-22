import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import About from '../pages/about.jsx'

const Header = (props) => {
    const [showAbout, setShowAbout] = useState(false);
    const handleCloseAbout = () => setShowAbout(false);
    const handleShowAbout = () => setShowAbout(true);

    return (
        <Row className="pt-2 border border-1">
            {(() => {
                let homePath;
                if (props.session === true) {
                    if (typeof (props.user) !== "undefined") {
                        //Aplicante loggeado
                        console.log(props.user)
                        homePath = `/user/${props.user.id}/${props.user.cedula}`;
                        return (
                            <>
                                <Col xs={12} md={6} >
                                    <Nav as="ul">
                                        <Nav.Item as="li">
                                            <Nav.Link href={homePath} >
                                                <Image src="https://plchldr.co/i/85x65?&bg=1111111&fc=ffffff&text=placeholderLogo" fluid rounded />
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li" className="my-auto">
                                            <Nav.Link eventKey="link-1" onClick={handleShowAbout}>Sobre nosotros</Nav.Link>
                                            <About show={showAbout} handleClose={handleCloseAbout} />
                                        </Nav.Item>
                                        {/* #TODO: Why the link is offer/:id */}
                                        <Nav.Item as="li" className="my-auto">
                                            <Nav.Link eventKey="link-2" href={homePath}>
                                                {/* <Link to="offer/:id">Ver ofertas</Link> */}
                                                Ver ofertas
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col className="text-end my-auto" xs={12} md={6} >
                                    <Image src='../styles/img/user.png' alt="user photo" fluid roundedCircle />
                                    <DropdownButton id="dropdown-basic-button" title="Bienvenido usuario">
                                        <Dropdown.Item>
                                            <Link to="myAplications">Mis aplicaciones</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link to="profile">Configuración de mi perfil</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link to="/">Salir</Link></Dropdown.Item>
                                    </DropdownButton>
                                </Col>
                            </>
                        )
                    } else {
                        //Admin loggeado
                        return (
                            <>
                                <Col className="text-end my-auto" xs={12} md={6} >
                                    <Image src='../styles/img/user.png' alt="user photo" fluid roundedCircle />
                                    <DropdownButton id="dropdown-basic-button" title="Bienvenido usuario">
                                        <Dropdown.Item>
                                            {/* #TODO: Make logout action */}
                                            <Link to="/">Salir</Link></Dropdown.Item>
                                    </DropdownButton>
                                </Col>
                            </>)

                    }
                } else {
                    //No one logged
                    homePath = '/';
                    return (
                        <>
                            <Col xs={12} md={6} >
                                <Nav as="ul">
                                    <Nav.Item as="li">
                                        <Nav.Link href={homePath}>

                                            <Image src="https://plchldr.co/i/85x65?&bg=1111111&fc=ffffff&text=placeholderLogo" fluid rounded />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="my-auto">
                                        <Nav.Link eventKey="link-1" onClick={handleShowAbout}>Sobre nosotros</Nav.Link>
                                        <About show={showAbout} handleClose={handleCloseAbout} />
                                    </Nav.Item>
                                    <Nav.Item as="li" className="my-auto">
                                        <Nav.Link eventKey="link-2" href={homePath}>
                                            Ver ofertas
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col className="text-end my-auto" xs={12} md={6} >
                                <Link to="/registro" className="mx-2">Registrarse</Link>
                                <Link to="/loggin" className="mx-2">Ingresar</Link>
                            </Col>
                        </>
                    )
                }
            })()}
        </Row>
    )
};

export default Header;