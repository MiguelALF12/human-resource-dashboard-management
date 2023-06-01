/**
 * #TODO: Posiblemente necesite paginación
 */
import React from 'react';
import Table from 'react-bootstrap/Table';

const AplicantsTable = (props) => {
    console.log("aplicants table: props.aplication ", props.aplication, " Igual a algo?", typeof (props.aplication) == "object" ? "Yes" : "No")
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Cedula</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                {typeof (props.aplication) == "object" ? props.aplication.map((aplicant, index) => {
                    return (
                        <tr key={"aplicant-" + index} id={"aplicant-" + index} onClick={event => props.clickedAplicant(event.currentTarget.getAttribute("id"))}>
                            <td>{aplicant.nombre}</td>
                            <td>{aplicant.apellido}</td>
                            <td>{aplicant.cedula}</td>
                            <td>{aplicant.correo}</td>
                        </tr>
                    )
                }) : <tr><td colSpan={12} className='text-center'>Seleccione una oferta</td></tr>}
            </tbody>
        </Table>
    )
};

export default AplicantsTable;