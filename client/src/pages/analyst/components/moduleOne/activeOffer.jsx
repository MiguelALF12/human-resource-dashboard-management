import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


const ActiveOffer = (props) => {

    return (
        <ListGroup>
            <ListGroup.Item
                as="li"
                id={"offer-" + props.offer.id}
                className="d-flex justify-content-between align-items-start"
                onClick={event => props.clickedOffer(event.currentTarget.getAttribute("id"))}
                action
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{props.offer.id}. {props.offer.nombre}</div>
                    {props.offer.descripcion}
                    <br />
                    Salario: {props.offer.salario}
                </div>
                <Badge bg="primary" pill>
                    {props.offer.vacantes}
                    {/* numero de vacantes*/}
                </Badge>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default ActiveOffer;