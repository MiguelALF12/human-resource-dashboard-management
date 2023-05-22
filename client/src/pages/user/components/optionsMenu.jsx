import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import '../../../styles/profileConfiguration.css';
const optionsMenu = () => {
    return (

        <ListGroup >
            <ListGroup.Item action variant="secondary" >
                <Link to="credentials" className='d-block'>Credenciales</Link>
            </ListGroup.Item>
            <ListGroup.Item action variant="secondary">
                <Link to="personals" className='d-block'>Información personal</Link>
            </ListGroup.Item>
            <ListGroup.Item action variant="secondary">
                <Link to="academics" className='d-block'>Información académica</Link>
            </ListGroup.Item>
            <ListGroup.Item action variant="secondary">
                <Link to="aboutOffers" className='d-block'>Aplicacion a ofertas</Link>
            </ListGroup.Item>
            <ListGroup.Item action variant="secondary">
                <Link to="deleteAccount" className='d-block'>Eliminar cuenta</Link>
            </ListGroup.Item>
        </ListGroup>
    )
};

export default optionsMenu;