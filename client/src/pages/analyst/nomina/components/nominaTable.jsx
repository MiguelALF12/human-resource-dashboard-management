/**?
 * solo se muestran empleados activos. PAra busquedas de empleados retirados ,se hace como filtro en la parte de busqueda. para ampliar información de documentos, se selecciona un aplicante.
 */
import React from "react";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";

const NominaTable = (props) => {
    return (<Table striped bordered hover responsive="md">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Cedula</th>
                <th>Correo</th>
                <th>Numero celular</th>
                <th>Cargo</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {props.employees.map((employee, index) => {
                return (
                    /**?
                     *  "id": 1,
                        "nombre": "Miguel Angel",
                        "apellido": "Lopez Fernández",
                        "cedula": "1004718953",
                        "correo": "miguel.lopez@utp.edu.co",
                        "numCelular": "3218484132",
                        "numTelefono": "6063462047",
                        "ciudad": "Pereira",
                        "direccion": "PARQUE INDUSTRIAL MANZANA 6 CASA 4 SECTOR B",
                        "estado": "ACTIVO",
                        "resultadosEntrevista": ""
                     */
                    //onClick={event => props.clickedAplicant(event.currentTarget.getAttribute("id"))}
                    <tr key={"offer-" + index} id={"offer-" + index} >
                        <td>{employee.id}</td>
                        <td>{employee.nombre}</td>
                        <td>{employee.apellido}</td>
                        <td>{employee.cedula}</td>
                        <td>{employee.correo}</td>
                        <td>{employee.numCelular}</td>
                        <td>{employee.cargo}</td>
                        <td className="text-center">
                            <Button id="manageEmployeeRecordBtn" size="sm" />
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </Table>)
};

export default NominaTable;