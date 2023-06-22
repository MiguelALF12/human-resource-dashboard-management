import React from 'react';
import Card from 'react-bootstrap/Card';

const Aplication = (props) => {

    return (

        <Card style={{ width: '18rem' }} id="aplication">
            <Card.Body>
                <Card.Title>{props.aplication.oferta.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><strong>Salario: </strong>{props.aplication.oferta.salario}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted"><strong>Inicio: </strong>{props.aplication.oferta.fechaInicio}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted"><strong>Experiencia: </strong>{props.aplication.oferta.experienciaAnos}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted"><strong>Estado: </strong> {props.aplication.estadoFase}  </Card.Subtitle>
                {/* opciones de eliminar aplicacion*/}
            </Card.Body>
        </Card>
    )
};
export default Aplication;