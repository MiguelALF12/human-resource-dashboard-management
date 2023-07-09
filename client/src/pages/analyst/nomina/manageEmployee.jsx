import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ManageEmployee = (props) => {
    // const { register, handleSubmit } = useForm();
    const [employeeInputs, setEmployeeInputs] = useState({});
    // const onSubmit = () => {
    // }
    useEffect(() => {
        let employeeInputNodes = {};
        const inputs = [
            document.getElementById("cedula"),
            document.getElementById("nombre"),
            document.getElementById("apellido"),
            document.getElementById("correo"),
            document.getElementById("celular"),
            document.getElementById("fechaInicio"),
            document.getElementById("tipoContrato"),
            document.getElementById("cargo"),
            document.getElementById("descripcionCargo"),
            document.getElementById("salario")
        ]
        inputs.forEach((input) => {
            if (input !== null) {
                let propertyToFillOnShowingModal = input.getAttribute("id");
                let employeeOrContract = 0;
                if (props.clickedEmployee[0].hasOwnProperty(propertyToFillOnShowingModal)) {
                    //Employee
                    employeeOrContract = 0;
                } else if (props.clickedEmployee[1].hasOwnProperty(propertyToFillOnShowingModal)) {
                    //Contract
                    employeeOrContract = 1;
                }
                input.value = props.clickedEmployee[employeeOrContract][propertyToFillOnShowingModal];
                employeeInputNodes[propertyToFillOnShowingModal] = input;
                // Check type of contract
                if (propertyToFillOnShowingModal === "tipoContrato") {
                    if (input.value === "1") input.value += " - FIJO";
                    else if (input.value === "2") input.value += " - PARCIAL";
                }
            }
        });
        setEmployeeInputs(employeeInputNodes);
    }, [props.clickedEmployee])

    return (
        <>
            {(() => {
                if (typeof props.clickedEmployee != "undefined") {
                    return (
                        <Modal show={props.show} onHide={props.close} size="lg">
                            <Modal.Header closeButton>
                                <Modal.Title>Edicion de ofertas</Modal.Title>
                            </Modal.Header>
                            <Form>
                                <Modal.Body>
                                    <Row className='px-3'>
                                        <Col>
                                            <h3>Empleado</h3>
                                            {/* 
                         "id": 55,
                        "nombre": "Lina Maria",
                        "apellido": "Fernandez",
                        "cedula": "24928860",
                        "correo": "limafer266@hotmail.com",
                        "numCelular": "3127940880",
                        "numTelefono": "3462047",
                        "ciudad": "Pereira",
                        "direccion": "Parque industrial Mz 6 Cs 4 SB",
                        "estado": "ACTIVO",
                        "resultadosEntrevista": "Muy buena trabajadora. Excelente la entrevista, si no le dan trabajo son geis"
                        */}
                                            <Form.Group className="mb-3">
                                                <Form.Label>Cédula</Form.Label>
                                                <Form.Control type="number" readOnly defaultValue={parseInt(props.clickedEmployee[0].cedula)} id="cedula" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Nombre</Form.Label>
                                                <Form.Control type="text" defaultValue={props.clickedEmployee[0].nombre} id="nombre" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Apellidos</Form.Label>
                                                <Form.Control type="text" defaultValue={props.clickedEmployee[0].apellido} id="apellido" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Correo</Form.Label>
                                                <Form.Control type="email" defaultValue={props.clickedEmployee[0].correo} id="correo" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Celular</Form.Label>
                                                <Form.Control type="text" defaultValue={props.clickedEmployee[0].numCelular} id="celular" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            {/* 
                    "id": 1,
                    "fechaInicio": "2023-06-04",
                    "salario": "17.556.118",
                    "cargo": "Electrical Engineer",
                    "descripcionCargo": "In congue. Etiam justo. Etiam pretium iaculis justo.",
                    "tipoContrato": 1,
                    "idEmpleado": 55,
                    "idContrato": 116
                    */}
                                            <h3>Contrato</h3>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Fecha inicio</Form.Label>
                                                <Form.Control type="text" defaultValue={props.clickedEmployee[1].fechaInicio} id="fechaInicio" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Tipo contrato</Form.Label>
                                                <Form.Control type="text" defaultValue={() => props.clickedEmployee[1].tipoContrato === 1 ? "FIJO" : "PARCIAL"} id="tipoContrato" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Cargo</Form.Label>
                                                <Form.Control type="text" defaultValue={props.clickedEmployee[1].cargo} id="cargo" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Descripcion del cargo</Form.Label>
                                                <Form.Control type="text" defaultValue={props.clickedEmployee[1].descripcionCargo} id="descripcionCargo" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Salario</Form.Label>
                                                <Form.Control type="text" defaultValue={props.clickedEmployee[1].salario} id="salario" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            {/* 
                    Prestaciones sociales
                    */}
                                            <h3>Prestaciones sociales</h3>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Fecha inicio</Form.Label>
                                                <Form.Control type="text" defaultValue={props.clickedEmployee[1].fechaInicio} id="fechaInicio" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Tipo contrato</Form.Label>
                                                <Form.Control type="text" defaultValue={() => props.clickedEmployee[1].tipoContrato === 1 ? "FIJO" : "PARCIAL"} id="tipoContrato" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Cargo</Form.Label>
                                                <Form.Control type="text" defaultValue={props.clickedEmployee[1].cargo} id="cargo" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Descripcion del cargo</Form.Label>
                                                <Form.Control type="text" defaultValue={props.clickedEmployee[1].descripcionCargo} id="descripcionCargo" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Salario</Form.Label>
                                                <Form.Control type="text" defaultValue={props.clickedEmployee[1].salario} id="salario" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={props.close}>
                                        Cancelar
                                    </Button>
                                    <Button type="submit" variant="primary" id="updateOfferBtn">
                                        Aceptar
                                    </Button>
                                </Modal.Footer>
                            </Form>
                        </Modal>
                    )
                }
            })()}
        </>)
};

export default ManageEmployee;