import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from "../home/components/header"
import Footer from "../home/components/footer"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/col";
import MenuNomina from "./nomina/nomina";
import MenuInteligenciaNegocio from "./inteligenciaNegocio/inteligenciaNegocio";
import ListGroup from 'react-bootstrap/ListGroup';


const AnalystHome = () => {

    return (
        <>
            <Header session={true} />
            <div id="analystBodyinfoArea">
                <Row >
                    <Col>
                        <ListGroup horizontal>
                            <ListGroup.Item action>
                                <Link to="offers" className='d-block'>Ofertas</Link>
                            </ListGroup.Item>
                            <ListGroup.Item action>
                                <Link to="nomina" className='d-block'>Nomina</Link>
                            </ListGroup.Item>
                            <ListGroup.Item action>
                                <Link to="inteligencianegocio" className='d-block'>Inteligencia de negocios</Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Outlet />
                </Row>

            </div >
            <Footer />
        </>
    )
}

export default AnalystHome;