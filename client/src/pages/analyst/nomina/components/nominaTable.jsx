/**?
 * solo se muestran empleados activos. PAra busquedas de empleados retirados ,se hace como filtro en la parte de busqueda. para ampliar información de documentos, se selecciona un aplicante.
 */
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";

const NominaTable = (props) => {
    console.log(props)
    return (<Table striped bordered hover responsive="md">
        <thead>
            <tr>
                <th>Cedula</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th>Numero celular</th>
                <th>Cargo</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {props.employees.length > 0 ? props.employees.map((employee, index) => {
                console.log(employee.id);
                return (
                    /**?
                     *  "nombre": "Miguel Ángel",
                        "apellido": "López Fernández",
                        "cedula": "1004718953",
                        "correo": "flepard3612@gmail.com",
                        "numCelular": "3218484132",
                        "numTelefono": "3462047",
                        "ciudad": "Pereira",
                        "direccion": "PARQUE INDUSTRIAL MANZANA 6 CASA 4 SECTOR B",
                        "estado": "ACTIVO",
                        "resultadosEntrevista": "Muy buena entrevista. Excelente persona, Contratenlo porfavor!",
                        "cargo": "Software Consultant"
                     */
                    //onClick={event => props.clickedAplicant(event.currentTarget.getAttribute("id"))}
                    <tr key={"employee-" + employee.id.toString()} id={"employeeHandler-" + employee.id.toString()} >
                        <td>{employee.cedula}</td>
                        <td>{employee.nombre}</td>
                        <td>{employee.apellido}</td>
                        <td>{employee.correo}</td>
                        <td>{employee.numCelular}</td>
                        <td>{employee.cargo}</td>
                        <td className="text-center">
                            <Button id="manageEmployeeRecordBtn" size="sm" onClick={() => {
                                props.clickedEmployee("employeeHandler-" + employee.id.toString());
                            }} />
                        </td>
                    </tr>
                )
            }) : <tr>No hay registros disponibles</tr>}
        </tbody>
    </Table>)
};

export default NominaTable;