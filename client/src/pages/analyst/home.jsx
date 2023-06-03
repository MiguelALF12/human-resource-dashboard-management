import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from "../../components/header"
import Footer from "../../components/footer"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/col";
import MenuNomina from "./nomina/nomina";
import MenuInteligenciaNegocio from "./inteligenciaNegocio/inteligenciaNegocio";
import ListGroup from 'react-bootstrap/ListGroup';


// import { getAplicant } from '../api/aplicantes';


// export const userLoader = async ({ params }) => {
//     const user = await getAplicant(params.id);
//     return { user }
// }

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