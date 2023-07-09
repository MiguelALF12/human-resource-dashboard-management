import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown';

import About from '../about'

import { htmlStrToElement } from '../../../utilities/components';

const Header = (props) => {
    const [showAbout, setShowAbout] = useState(false);
    const handleCloseAbout = () => setShowAbout(false);
    const handleShowAbout = () => setShowAbout(true);
    useEffect(() => {
        if (props.session === true && typeof (props.user) !== "undefined") {
            let profileImgElem = htmlStrToElement(props.user.user.imagenPerfil);
            let container = document.getElementById("aplicantProfileImg");
            if (container.childElementCount < 2) {
                let aplicantProfileMenuElem = document.getElementById("aplicantProfileMenu")
                container.insertBefore(profileImgElem, aplicantProfileMenuElem);
            }
        }
    }, [props]);
    return (
        <Navbar expand="md">
            <Container fluid>
                {(() => {
                    let homePath;
                    if (props.session === true) {
                        if (typeof (props.user) !== "undefined") {
                            homePath = `/user/${props.user.user.id}/${props.user.user.cedula}`;
                            return (
                                //Aplicante loggeado
                                <>
                                    <Navbar.Brand href={homePath}>
                                        <Image src="https://plchldr.co/i/85x65?&bg=1111111&fc=ffffff&text=placeholderLogo" fluid rounded />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="navbarScroll" />
                                    <Navbar.Collapse id="navbarScroll">
                                        <Nav className="w-100" as="ul">
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
                                        <div className="d-flex flex-column align-items-center pe-4" id="aplicantProfileImg">
                                            <Dropdown id="aplicantProfileMenu">
                                                <Dropdown.Toggle size='sm'>
                                                    ${props.user.user.nombre}`
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item>
                                                        <Link to="myAplications">Mis aplicaciones</Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <Link to="profile">Configuración</Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <Link to="/">Salir</Link></Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </Navbar.Collapse>
                                </>
                            )
                        } else {
                            //Admin loggeado
                            return (
                                <>
                                    <Navbar.Toggle aria-controls="navbarScroll" />
                                    <Navbar.Collapse id="navbarScroll">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" size='sm'>
                                                Hola administrador
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>

                                                <Dropdown.Item>
                                                    <Link to="/">Salir</Link></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Navbar.Collapse>
                                </>
                            )
                        }
                    } else {
                        //No one logged
                        homePath = '/';
                        return (
                            // <>
                            //     <Col xs={12} sm={12} md={6} >
                            //         <Nav as="ul">
                            //             <Nav.Item as="li">
                            //                 <Nav.Link href={homePath}>
                            //                     <Image src="https://plchldr.co/i/85x65?&bg=1111111&fc=ffffff&text=placeholderLogo" fluid rounded />
                            //                 </Nav.Link>
                            //             </Nav.Item>
                            //             <Nav.Item as="li" className="my-auto">
                            //                 <Nav.Link eventKey="link-1" onClick={handleShowAbout}>Sobre nosotros</Nav.Link>
                            //                 <About show={showAbout} handleClose={handleCloseAbout} />
                            //             </Nav.Item>
                            //             <Nav.Item as="li" className="my-auto">
                            //                 <Nav.Link eventKey="link-2" href={homePath}>
                            //                     Ver ofertas
                            //                 </Nav.Link>
                            //             </Nav.Item>
                            //         </Nav>
                            //     </Col>
                            //     <Col className="text-end my-auto" xs={12} sm={12} md={6} >
                            //         <Link to="/registro" className="mx-2">Registrarse</Link>
                            //         <Link to="/loggin" className="mx-2">Ingresar</Link>
                            //     </Col>
                            // </>

                            <>
                                <Navbar.Brand href={homePath}>
                                    <Image src="https://plchldr.co/i/85x65?&bg=1111111&fc=ffffff&text=placeholderLogo" fluid rounded />
                                </Navbar.Brand>
                                <Navbar.Toggle />
                                <Navbar.Collapse className="justify-content-end">
                                    <Nav className="me-auto">
                                        <Nav.Link onClick={handleShowAbout}>Sobre nosotros</Nav.Link>
                                        <About show={showAbout} handleClose={handleCloseAbout} />
                                        <Nav.Link href={homePath}>
                                            Ver ofertas
                                        </Nav.Link>
                                    </Nav>
                                    <Navbar.Text>
                                        <Link to="/registro" className="me-2">Registrarse</Link>
                                        <span>|</span>
                                        <Link to="/loggin" className="mx-2">Ingresar</Link>
                                    </Navbar.Text>
                                </Navbar.Collapse>
                            </>
                        )
                    }
                })()}
            </Container >
        </Navbar>
    )
};

export default Header;