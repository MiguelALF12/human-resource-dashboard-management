import React, { useState } from "react";
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
                {props.offers.map((offer, index) => {
                    return (
                        //onClick={event => props.clickedAplicant(event.currentTarget.getAttribute("id"))}
                        <tr key={"offer-" + index} id={"offerHandler-" + index} >
                            <td>{offer.id}</td>
                            <td>{offer.nombre}</td>
                            <td>{offer.descripcion}</td>
                            <td>{offer.estadoDisponibilidad}</td>
                            <td>{offer.vacantes}</td>
                            <td>{offer.fechaInicio}</td>
                            <td>{offer.salario}</td>
                            <td>{offer.experienciaAnos}</td>
                            <td>
                                <Button id="editOfferRecordBtn" size="sm" onClick={(event) => {
                                    props.actionAndClickedOffer("offerHandler-" + index);
                                }} />
                                <Button id="deleteOfferRecordBtn" variant="danger" size="sm" />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
};

export default OffersTable;
