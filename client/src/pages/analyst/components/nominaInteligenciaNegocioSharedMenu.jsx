import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const NominaInteligenciaNegocioSharedMenu = (props) => {
    if (props.showing === "nomina") {
        return (<div id="sharedMenucontainer">
            <Row className="px-5">
                <Col md={2} lg={2} className='menuOptArea mt-3 d-flex flex-column justify-content-center'>
                    <div id="menuOptBtnAreaSpecial hiringOptArea" className="d-flex justify-content-center mb-2">
                        <Dropdown as={ButtonGroup} className="pe-2">
                            <Button variant="light" className="menuOptBtn p-0 p-1">
                                <Link to="afiliacionSeguridadSocial">
                                    <Image src="https://placehold.co/45x45" rounded fluid />
                                </Link>
                            </Button>
                            <Dropdown.Toggle split variant="light" className="menuOptBtn" id="dropdown-custom-2" />
                            <Dropdown.Menu className="super-colors">
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3" active>
                                    Active Item
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <span>Nueva <br />contratación</span>
                    </div>
                </Col>
                <Col className='menuOptArea mt-3 d-flex flex-column justify-content-start'>
                    <div className="d-flex justify-content-evenly mb-2">
                        <Button className="menuOptBtn p-1">
                            <Image className="me-2" src="https://placehold.co/30x30" rounded fluid />
                            <span>Listar/Buscar</span>
                        </Button>
                        <Button className="menuOptBtn p-1">
                            <Image className="me-2" src="https://placehold.co/30x30" rounded fluid />
                            <span>Retirar</span>
                        </Button>
                    </div>
                    <div className="d-flex justify-content-evenly mb-2">
                        <Button className="menuOptBtn p-1">
                            <Image className="me-2" src="https://placehold.co/30x30" rounded fluid />
                            <span>Modificar</span>
                        </Button>
                    </div>
                </Col>
                <Col className='menuOptArea mt-3 d-flex flex-row'>
                    <div className="d-flex align-items-center flex-fill justify-content-evenly">
                        <div id="menuOptBtnAreaSpecial hiringOptArea" className="d-flex justify-content-center mb-2">
                            <Dropdown as={ButtonGroup} className="pe-2">
                                <Button variant="light" className="menuOptBtn p-0 p-1">
                                    <Image src="https://placehold.co/45x45" rounded fluid />
                                </Button>
                                <Dropdown.Toggle split variant="light" className="menuOptBtn" id="dropdown-custom-2" />
                                <Dropdown.Menu className="super-colors">
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3" active>
                                        Active Item
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <span>Nueva <br />liquidación</span>
                        </div>
                        <div id="menuOptBtnAreaSpecial hiringOptArea" className="d-flex justify-content-center mb-2">
                            <Dropdown as={ButtonGroup} className="pe-2">
                                <Button variant="light" className="menuOptBtn p-0 p-1">
                                    <Image src="https://placehold.co/45x45" rounded fluid />
                                </Button>
                                <Dropdown.Toggle split variant="light" className="menuOptBtn" id="dropdown-custom-2" />
                                <Dropdown.Menu className="super-colors">
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3" active>
                                        Active Item
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <span>Not <br />Implementes</span>
                        </div>
                    </div>
                </Col>
                <Col md={2} lg={2} className='menuOptArea mt-3 d-flex flex-column justify-content-center'>
                    <div id="menuOptBtnAreaSpecial hiringOptArea" className="d-flex justify-content-center mb-2">
                        <Dropdown as={ButtonGroup} className="pe-2">
                            <Button variant="light" className="menuOptBtn p-0 p-1">
                                <Image src="https://placehold.co/45x45" rounded fluid />
                            </Button>
                            <Dropdown.Toggle split variant="light" className="menuOptBtn" id="dropdown-custom-2" />
                            <Dropdown.Menu className="super-colors">
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3" active>
                                    Active Item
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <span>Nueva <br />contratación</span>
                    </div>
                </Col>
            </Row>
            <Row className="pb-2 px-5">
                <Col md={2} lg={2}><div className="text-center "><span className="menuOptionTitle">Contratación</span></div></Col>
                <Col><div className="text-center"><span className="menuOptionTitle">Empleados</span></div></Col>
                <Col><div className="text-center"><span className="menuOptionTitle">Liquidaciones</span></div></Col>
                <Col md={2} lg={2}><div className="text-center"><span className="menuOptionTitle">Certificados</span></div></Col>
            </Row>
        </div >)
    }
    else if (props.showing === "inteligenciaNegocio") {
        return (<>
            InteligenciaNegocio
        </>)
    } else {
        return (<>
            Nothing to show
        </>)
    }

};

export default NominaInteligenciaNegocioSharedMenu;