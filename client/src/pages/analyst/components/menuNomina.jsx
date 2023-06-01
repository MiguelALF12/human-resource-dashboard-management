/**
 * #TODO: Definir operaciones por cada TAB (ofertas, nomina, inteligencia de neogio)
 */
import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../../styles/userAnalystMenu.css'
const MenuNomina = () => {
    return (
        <Row className='border border-primary my-4'>
            <Col className='d-flex justify-content-start'>
                <div className='border border-primary'>opcion 1</div>
                <div className='border border-primary'>opcion 2</div>
                <div className='border border-primary'>opcion 3</div>
                <div className='border border-primary'>opcion 4</div>
                <div className='border border-primary'>opcion 5</div>
            </Col>
        </Row>
    )
};

export default MenuNomina;