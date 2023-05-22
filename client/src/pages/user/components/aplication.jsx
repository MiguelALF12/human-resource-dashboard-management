import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import '../../../styles/userAplications.css';

/**
 * #TODO: Cargar condicionalmente los detalles de oferta para usuario que aplicó y para que un usuario aplique. Esto esta relacionado con obtener parametros para cargar diferentes ofertas (react-router). 
 */

const Application = () => {
    return (
        <Link to="/offer/:id">
            <Card style={{ width: '18rem' }} id="offer">
                <Card.Body>
                    <Card.Title>Nombre del puesto</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Lugar</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Salario</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Experiencia</Card.Subtitle>
                    {/* <Card.Link href="#">Card Link</Card.Link> */}
                </Card.Body>
            </Card>
        </Link>
    )
};
export default Application;