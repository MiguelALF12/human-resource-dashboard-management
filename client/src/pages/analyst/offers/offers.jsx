import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';

const Offers = () => {
    // console.log(document.getElementById("offersTabs").classList);
    return (
        <>
            <Col id="offersTabs">
                <ListGroup horizontal>
                    <ListGroup.Item action>
                        <Link to="offersHandling" className='d-block'>Gestión de ofertas</Link>
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        <Link to="preselection" className='d-block'>Preselección</Link>
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        <Link to="selectionPerfilation" className='d-block'>Selección y perfilación</Link>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col sm={12} md={12} lg={12}>
                <Outlet />
            </Col>
        </>

    )
};

export default Offers;