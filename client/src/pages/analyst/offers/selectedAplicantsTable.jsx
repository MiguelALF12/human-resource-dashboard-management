import React from "react";
import Table from "react-bootstrap/Table"
const SelectedAplicantsTable = (props) => {
    // console.log("Selected aplicants: ", props.selected)
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Cedula</th>
                    <th>Oferta</th>
                    <th>Descripcion</th>
                    <th>Experiencia</th>
                    <th>Fase</th>
                </tr>
            </thead>
            <tbody>
                {props.selected.length > 0 ? props.selected.map((aplicant, index) => {
                    return (
                        <tr key={"selection-" + aplicant.idSeleccion} id={"selection-" + aplicant.idSeleccion} onClick={event => props.clickedSelectedAplicant(event.currentTarget.getAttribute("id"))}>
                            <td>{aplicant.idSeleccion}</td>
                            <td>{aplicant.nombre}</td>
                            <td>{aplicant.apellido}</td>
                            <td>{aplicant.cedula}</td>
                            <td>{aplicant.nombreOferta}</td>
                            <td>{aplicant.descripcionOferta}</td>
                            <td>{aplicant.experienciaAnosOferta}</td>
                            <td>{aplicant.faseAplicante}</td>

                        </tr>
                    )
                }) : <tr><td colSpan={12} className='text-center'>No hay seleccionados aún</td></tr>}
            </tbody>
        </Table>)
};

export default SelectedAplicantsTable;