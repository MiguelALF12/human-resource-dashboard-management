import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/esm/Col';
const Offers = () => {
    console.log("moduleOneHome")
    return (
        <>
            <Col>
                <ListGroup horizontal>
                    <ListGroup.Item>
                        <Link to="preselection">Preselección</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Link to="selectionPerfilation">Selección y perfilación</Link>
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