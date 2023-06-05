import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import About from '../pages/about.jsx'

const Header = (props) => {
    let location = useLocation();
    const [showAbout, setShowAbout] = useState(false);
    const handleCloseAbout = () => setShowAbout(false);
    const handleShowAbout = () => setShowAbout(true);
    let homePath = "/";
    // if (props.session === true) {
    //     homePath = `/user/${props.user.id}/${props.user.cedula}`;
    // } else {
    //     homePath = "/";
    // }

    console.log("properties of heading: ", location.pathname);
    console.log("is user loaded on header? ", props.user);
    return (
        <Row className="pt-2 border border-1">
            {(() => {
                if (props.session === true) {
                    console.log("on change: ", props.user);
                    homePath = `/user/:id/:cedula`;
                    console.log("homePath: ", homePath)
                    return (
                        <>
                            <Col xs={12} md={6} >
                                <Nav as="ul">
                                    <Nav.Item as="li">
                                        <Nav.Link >
                                            <Link to={homePath}>
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
                                            <Link to="offer/:id">Ver ofertas</Link>
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
                    homePath = '/';
                    return (
                        <>
                            <Col xs={12} md={6} >
                                <Nav as="ul">
                                    <Nav.Item as="li">
                                        <Nav.Link >
                                            <Link to={homePath}>
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
                                            <Link to={homePath} >Ver ofertas</Link>
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
            {/* <Col xs={12} md={6} >
                <Nav as="ul">
                    <Nav.Item as="li">
                        <Nav.Link >
                            <Link to={homePath}>
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
                            <Link to={
                                props.session === true ?
                                    `/user/${props.user.id}/${props.user.cedula}` :
                                    `/`
                            }>Ver ofertas</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col className="text-end my-auto" xs={12} md={6} >
                {(() => {
                    if (props.session === true) {

                        return (
                            <>
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
                            </>
                        )
                    } else {
                        return (<>
                            <Link to="/registro" className="mx-2">Registrarse</Link>
                            <Link to="/loggin" className="mx-2">Ingresar</Link>
                        </>)
                    }
                })()}
            </Col> */}
        </Row>
    )
};

export default Header;