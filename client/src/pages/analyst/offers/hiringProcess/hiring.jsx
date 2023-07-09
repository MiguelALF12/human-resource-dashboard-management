import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { freeLocalStorage, renameFile, loadFilesFromLocalStorage } from "../../../../utilities/files";
import { removeSeleccionado } from "../../../../api/seleccionados";
import { removeAplication } from "../../../../api/aplicaciones";
import { partialUpdateAplicant } from "../../../../api/aplicantes";
import { createEmpleado } from "../../../../api/empleados";
import { createEmpleadoSocialAfiliationDocuments } from "../../../../api/documentos";
import { createContract } from "../../../../api/contratos";

const Hiring = (props) => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate();

    useEffect(() => {
        loadFilesFromLocalStorage([props.files, props.preHiringInfo["RESULTADOS_ENTREVISTA"]]);
    });

    const onSubmit = (someContractFields) => {
        console.log(someContractFields);
        let newEmpleado = {
            id: props.aplicant.id,
            resultadosEntrevista: someContractFields.resultadosEntrevista
        }
        let newContract = {
            fechaInicio: props.aplicant.fechaInicioOferta,
            tipoContrato: someContractFields.tipoContrato,
            salario: props.aplicant.salarioOferta,
            cargo: props.aplicant.nombreOferta,
            descripcionCargo: props.aplicant.descripcionOferta,
            cedula: props.aplicant.cedula,
        }
        console.log((newContract.tipoContrato === "1" || newContract.tipoContrato === "2") && someContractFields.documentosEmpleado["CONTRATO"].length === 1)
        if ((newContract.tipoContrato === "1" || newContract.tipoContrato === "2") && someContractFields.documentosEmpleado["CONTRATO"].length === 1) {
            //Crear documentos
            const employeeDocs = new FormData();
            for (const pair of props.files.entries()) {
                if (pair[1] instanceof File) {
                    //En este punto los docuemntos ya estan renombrados
                    // console.log(`${pair[0]}, ${pair[1]}`);
                    employeeDocs.append(pair[0], pair[1]);
                }
            }
            employeeDocs.append("cedula", props.aplicant.cedula);
            employeeDocs.append("CONTRATO", renameFile("CONTRATO", someContractFields.documentosEmpleado["CONTRATO"][0]));

            // createEmpleado(newEmpleado).then((data) => {
            //     return data
            // }).then((data) => {
            //     return createEmpleadoSocialAfiliationDocuments(employeeDocs);
            // }).then((loadFilesData) => {
            //     console.log("documentos de nuevo Empleado: ", loadFilesData)
            //     return createContract(newContract);
            // }).then((contractData) => {
            //     console.log("Contrato creado: ", contractData)
            // }).catch(err => {
            //     console.warn(err);
            // });


            createEmpleado(newEmpleado).then((data) => {
                console.log("Empleado creado", data)
                return createEmpleadoSocialAfiliationDocuments(employeeDocs);
            }).then((loadFilesData) => {
                console.log("Empleado afiliado a seguridad social: ", loadFilesData);
                return createContract(newContract);
            }).then((newContractRes) => {
                console.log("Contrato creado: ", newContractRes);
                return removeSeleccionado(props.preHiringInfo.idSeleccion)
            }).then((removedSelectionRes) => {
                console.log("Seleccion eliminada con exito!", removedSelectionRes);
                // Aquí debería eliminar la cuenta del aplicante.
                return partialUpdateAplicant(props.aplicant.id, { contratado: true });
            }).then((updatedAplicantRes) => {
                console.log("Estado de aplicante actualizado", updatedAplicantRes);
                freeLocalStorage();
                navigate(-1);
            }).catch(err => {
                console.warn(err);
            });
        } else {
            alert("Recuerde que debe seleccionar el tipo de contrato y subir el respectivo documento ");
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="w-100">
            <Row className=" scrollableAssArea px-5 py-5">
                <Col xs={12} md={6} lg={6} className="border border-1">
                    <h3 className="text-center">FORMULARIO DE CREACIÓN DE CONTRATO</h3>
                    <Form.Group className="mb-3" controlId="fechaInicioContractInfo">
                        <Form.Label>Fecha de inicio</Form.Label>
                        <Form.Control readOnly type="text" defaultValue={props.aplicant.fechaInicioOferta} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="tipoContratoContractInfo">
                        <Form.Label>Tipo de contrato</Form.Label>
                        <Form.Select {...register("tipoContrato", { required: true })}>
                            <option>Seleccionar</option>
                            <option value="1"> Fijo</option>
                            <option value="2"> Parcial</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="salarioContractInfo">
                        <Form.Label>Salario</Form.Label>
                        <Form.Control readOnly type="text" defaultValue={props.aplicant.salarioOferta} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cargoContractInfo">
                        <Form.Label>Cargo</Form.Label>
                        <Form.Control readOnly type="text" defaultValue={props.aplicant.nombreOferta} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="descripcionCargoContractInfo">
                        <Form.Label>Descripcion cargo</Form.Label>
                        <Form.Control readOnly type="textarea" rows={4} defaultValue={props.aplicant.descripcionOferta} />
                    </Form.Group>
                    <Form.Group controlId="formFileOthers" className="mb-3">
                        <Form.Label>Contrato</Form.Label>
                        <Form.Control type="file" size="sm" {...register("documentosEmpleado.CONTRATO")} />
                    </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={6} className="border border-1">
                    <h3 className="text-center">FORMULARIO DE CREACIÓN DE EMPLEADO</h3>
                    <Form.Group className="mb-3" controlId="nombreEmpleadoInfo">
                        <Form.Label>Nombres</Form.Label>
                        <Form.Control readOnly type="text" defaultValue={props.aplicant.nombre} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="apellidoEmpleadoInfo">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control readOnly type="text" defaultValue={props.aplicant.apellido} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cedulaEmpleadoInfo">
                        <Form.Label>Cedula</Form.Label>
                        <Form.Control readOnly type="number" defaultValue={props.aplicant.cedula} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="numCelularempleadoInfo">
                        <Form.Label>Número de celular</Form.Label>
                        <Form.Control readOnly type="number" defaultValue={props.aplicant.numCelular} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ciudadEmpleadoInfo">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control readOnly type="text" defaultValue={props.aplicant.ciudad} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="direccionEmpleadoInfo">
                        <Form.Label>direccion</Form.Label>
                        <Form.Control readOnly type="text" defaultValue={props.aplicant.direccion} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="resultadosEntrevistaEmpleadoInfo">
                        <Form.Label>Resultados de entrevista</Form.Label>
                        <Form.Control readOnly type="textarea" defaultValue={props.preHiringInfo.resultadosEntrevista} {...register("resultadosEntrevista", { required: true })} />
                    </Form.Group>
                    <hr className="border border-2 opacity-50" />
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