import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import '../styles/offer.css';

/**
 * #TODO: Cargar condicionalmente los detalles de oferta para usuario que aplicó y para que un usuario aplique 
 */


const Offer = (props) => {
    return (
        <Link to={`offer/${props.offer.id}`}>
            <Card style={{ width: '18rem' }} id="offer">
                <Card.Body>
                    <Card.Title>{props.offer.nombre}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">${props.offer.salario}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{props.offer.experienciaAnos} años de experiencia</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{props.offer.vacantes} Puestos</Card.Subtitle>
                </Card.Body>
            </Card>
        </Link>
    )
};
export default Offer;