import Table from 'react-bootstrap/Table';

const NominaTableJustSelection = (props) => {
    return (
        // <div>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    {/* <th>Cedula</th> */}
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>Numero celular</th>
                    <th>Cargo</th>
                    {/* <th>Fecha de inicio</th> */}
                </tr>
            </thead>
            <tbody>
                {props.employees.length > 0 ? props.employees.map((employee, index) => {
                    return (
                        /**?
                         * "nombre": "Miguel Ángel",
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

                        <tr key={"employeeOnActivity-" + employee.id.toString()} id={"employeeOnActivityHandler-" + employee.id.toString()} onClick={() => {
                            props.clickedEmployee({
                                "idEmpleado": employee.id,
                                "nombre": employee.nombre,
                                "apellido": employee.apellido
                            });
                        }}>
                            {/* <td>{employee.cedula}</td> */}
                            <td>{employee.nombre}</td>
                            <td>{employee.apellido}</td>
                            <td>{employee.correo}</td>
                            <td>{employee.numCelular}</td>
                            <td>{employee.cargo}</td>
                            {/* <td>{employee.fechaInicio}</td> */}
                        </tr>
                    )
                }) : <tr>No hay registros disponibles</tr>}
            </tbody>
        </Table>
        // </div>
    )
};

export default NominaTableJustSelection;