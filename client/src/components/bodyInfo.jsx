import React, { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

import Offer from './offer.jsx'
import "../styles/bodyInfo.css";

const BodyInfo = () => {

    return (
        <Row id="bodyInfoContainer">
            <Col className="m-auto" xs={12} md={9}>
                <Row>
                    <Col id="filterArea">
                        <h2>Ofertas de trabajo activas</h2>
                        <Form.Group className="mb-3">
                            <Form.Label>Busqueda por filtro</Form.Label>
                            <Form.Select>
                                <option>item 1</option>
                                <option>item 2</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-2">
                        <span>Resultados de la busqueda: kjlk</span>
                    </Col>
                    <Col xs={12} md={12} className="d-flex justify-content-center g-5">
                        <Offer />
                        <Offer />
                        <Offer />
                    </Col>
                    <Col xs={12} md={12} className="d-flex justify-content-center g-5">
                        <Offer />
                        <Offer />
                        <Offer />
                    </Col>
                    {/* <Outlet /> */}
                </Row>
            </Col>
        </Row>
    );
};

export default BodyInfo;