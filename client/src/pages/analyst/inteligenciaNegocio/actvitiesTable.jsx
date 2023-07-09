import React from "react";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";


const ActivitiesTable = (props) => {
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
                {props.activities.lenght > 0 ? props.activities.map((activity) => {
                    return (
                        <tr key={"activity-" + activity.id.toString()} id={"activityHandler-" + activity.id.toString()} >
                            <td>{activity.id}</td>
                            <td>{activity.nombre}</td>
                            <td>{activity.descripcion}</td>
                            <td>{activity.estadoDisponibilidad}</td>
                            <td>{activity.vacantes}</td>
                            <td>{activity.fechaInicio}</td>
                            <td>{activity.salario}</td>
                            <td>{activity.experienciaAnos}</td>
                            <td>
                                <Button id="editActivityRecordBtn" size="sm" onClick={() => {
                                    props.clickedActivity("activityHandler-" + activity.id.toString() + "-edit");
                                }} />
                                <Button id="deleteActivityRecordBtn" variant="danger" size="sm"
                                    onClick={() => {
                                        props.clickedActivity("activityHandler-" + activity.id.toString() + "-delete");
                                    }} />
                            </td>
                        </tr>
                    )
                }) : <tr>No hay registros disponibles</tr>}
            </tbody>
        </Table>
    )
};

export default ActivitiesTable;
