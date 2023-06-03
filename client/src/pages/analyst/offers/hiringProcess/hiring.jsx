import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { loadFilesFromLocalStorage } from "../../../../utilities/files";

const Hiring = (props) => {

    useEffect(() => {
        loadFilesFromLocalStorage([props.files, props.preHiringInfo["RESULTADOS_ENTREVISTA"]]);
    })
    return (
        <Form className="w-100">
            <Row className=" scrollableAssArea px-5 py-5">
                <Col xs={12} md={6} lg={6} className="border border-1">
                    <h3 className="text-center">FORMULARIO DE CREACIÓN DE CONTRATO</h3>
                    <Form.Group className="mb-3" controlId="formGroupId">
                        <Form.Label>Fecha de inicio</Form.Label>
                        <Form.Control type="text" placeholder="Ej: 1004718953" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupId">
                        <Form.Label>Fecha de Finalización</Form.Label>
                        <Form.Control type="text" placeholder="Ej: 1004718953" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupId">
                        <Form.Label>Tipo de contrato</Form.Label>
                        <Form.Select aria-label="Default select example" placeholder="FIJO, PARCIAL">
                            <option>Seleccionar</option>
                            <option value="FIJO"> Fijo</option>
                            <option value="PARCIAL"> Parcial</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupId">
                        <Form.Label>Salario</Form.Label>
                        <Form.Control type="text" defaultValue={props.aplicant.salarioOferta} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupId">
                        <Form.Label>Cargo</Form.Label>
                        <Form.Control type="text" defaultValue={props.aplicant.nombreOferta} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupId">
                        <Form.Label>Descripcion cargo</Form.Label>
                        <Form.Control type="textarea" rows={4} defaultValue={props.aplicant.descripcionOferta} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupId">
                        <Form.Label>ID del empleado contratado</Form.Label>
                        <Form.Control readOnly type="number" defaultValue={props.aplicant.id} />
                    </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={6} className="border border-1">
                    <h3 className="text-center">FORMULARIO DE CREACIÓN DE EMPLEADO</h3>
                    <Form.Group className="mb-3" controlId="formGroupId">
                        <Form.Label>Nombre y apellidos</Form.Label>
                        <Form.Control readOnly type="text" defaultValue={props.aplicant.nombre + props.aplicant.apellido} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupId">
                        <Form.Label>Cedula</Form.Label>
                        <Form.Control readOnly type="number" defaultValue={props.aplicant.cedula} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupId">
                        <Form.Label>Número de celular</Form.Label>
                        <Form.Control readOnly type="number" defaultValue={props.aplicant.numCelular} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupId">
                        <Form.Label>direccion</Form.Label>
                        <Form.Control readOnly type="text" defaultValue={props.aplicant.direccion} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupId">
                        <Form.Label>Resultados de entrevista</Form.Label>
                        <Form.Control readOnly type="textarea" defaultValue={props.preHiringInfo.resultadosEntrevista} />
                    </Form.Group>
                    <hr class="border border-2 opacity-50" />
                    <h4>Documentación de afiliación a seguridad social y entrevista</h4>
                    <div id="arlViewer"></div>
                    <div id="caja_compensacionViewer"></div>
                    <div id="epsViewer"></div>
                    <div id="resultados_entrevistaViewer"></div>

                </Col>
            </Row>
            <Row>
                <Col className="text-center p-3">
                    <Button type="submit">Enviar</Button>
                </Col>
            </Row>
        </Form>
    )
};

export default Hiring;