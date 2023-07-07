import React from "react";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";


const OffersTable = (props) => {
    return (
        <Table striped bordered hover responsive="md">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Estado</th>
                    <th>Vacantes</th>
                    <th>Fecha de inicio</th>
                    <th>Salario</th>
                    <th>Experiencia</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {props.offers.map((offer) => {
                    return (
                        <tr key={"offer-" + offer.id.toString()} id={"offerHandler-" + offer.id.toString()} >
                            <td>{offer.id}</td>
                            <td>{offer.nombre}</td>
                            <td>{offer.descripcion}</td>
                            <td>{offer.estadoDisponibilidad}</td>
                            <td>{offer.vacantes}</td>
                            <td>{offer.fechaInicio}</td>
                            <td>{offer.salario}</td>
                            <td>{offer.experienciaAnos}</td>
                            <td>
                                <Button id="editOfferRecordBtn" size="sm" onClick={() => {
                                    props.clickedOffer("offerHandler-" + offer.id.toString() + "-edit");
                                }} />
                                <Button id="deleteOfferRecordBtn" variant="danger" size="sm"
                                    onClick={() => {
                                        props.clickedOffer("offerHandler-" + offer.id.toString() + "-delete");
                                    }} />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
};

export default OffersTable;
