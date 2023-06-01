import React from "react";
import { useForm } from "react-hook-form";

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import "../../../styles/profileConfiguration.css";

const Personals = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return <Row className="formConfigContainer">
        <Col className="">
            <Form>
                <h3 className='mt-3'>Acerca de ofertas</h3>
                <Row className='my-3'>
                    <Form.Group as={Col} controlId="formGroupUserWorkExerience">
                        <Form.Label>Experiencia verificable en años</Form.Label>
                        <Form.Control type="text" placeholder="Años" defaultValue="1" {...register("experienciaLaboral", { required: true })} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGroupUserMovilizationCapacity">
                        <Form.Label>Estaría dispuesto a trasladarse</Form.Label>
                        <Form.Select aria-label="Default select example" defaultValue="False" {...register("dispuestoTraslado", { required: true })}>
                            <option>Seleccionar</option>
                            <option value="True">Si</option>
                            <option value="False">No</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGroupUserExtraHourCapacity">
                        <Form.Label>Estaría dispuesto a trabajar horas extras en cualquier horario?</Form.Label>
                        <Form.Select aria-label="Default select example" defaultValue="False" {...register("trabajarHorasExtra", { required: true })}>
                            <option>Seleccionar</option>
                            <option value="True">Si</option>
                            <option value="False">No</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row>
                    {/* 1-"CEDULA"
                                    2-"LIBRETA_MILITAR"
                                    3-"HOJA_DE_VIDA"
                                    4-"CERTIFICADOS_EDUCACION"
                                    5-"CARTAS_EXPERIENCIA_LABORAL"
                                    6-"CERTIFICADO_EPS"
                                    7-"CERTIFICADO_PENSION"
                                    8-"BENEFICIOS"
                                    9-"OTROS" */}
                    <Col>
                        <Form.Group controlId="formFileCedula" className="mb-3">
                            <Form.Label>Cedula ampliada al 150% </Form.Label>
                            <Form.Control type="file" size="sm" {...register("files.CEDULA", { required: true })} />
                        </Form.Group>
                        <Form.Group controlId="formFileLibretaMilitar" className="mb-3">
                            <Form.Label>Libreta militar</Form.Label>
                            <Form.Control type="file" size="sm" {...register("files.LIBRETA_MILITAR", { required: true })} />
                        </Form.Group>
                        <Form.Group controlId="formFileHojaDeVida" className="mb-3">
                            <Form.Label>Hoja de vida</Form.Label>
                            <Form.Control type="file" size="sm" {...register("files.HOJA_DE_VIDA", { required: true })} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formFileCertifications" className="mb-3">
                            <Form.Label>Certificados de educación </Form.Label>
                            <Form.Control type="file" size="sm" {...register("files.CERTIFICADOS_EDUCACION", { required: true })} />
                        </Form.Group>
                        <Form.Group controlId="formFileExperienciaLaboral" className="mb-3">
                            <Form.Label>Cartas de experiencia laboral </Form.Label>
                            <Form.Control type="file" size="sm" {...register("files.CARTAS_EXPERIENCIA_LABORAL", { required: true })} />
                        </Form.Group>
                        <Form.Group controlId="formFileEps" className="mb-3">
                            <Form.Label>Certificado de EPS</Form.Label>
                            <Form.Control type="file" size="sm" {...register("files.CERTIFICADO_EPS", { required: true })} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formFilePension" className="mb-3">
                            <Form.Label>Certificado de pensión</Form.Label>
                            <Form.Control type="file" size="sm" {...register("files.CERTIFICADO_PENSION", { required: true })} />
                        </Form.Group>
                        <Form.Group controlId="formFileBeneficios" className="mb-3">
                            <Form.Label>Beneficios</Form.Label>
                            <Form.Control type="file" size="sm"  {...register("files.BENEFICIOS", { required: true })} />
                        </Form.Group>
                        <Form.Group controlId="formFileOthers" className="mb-3">
                            <Form.Label>Otros</Form.Label>
                            <Form.Control type="file" size="sm" multiple {...register("files.OTROS", { required: true })} />
                        </Form.Group>
                    </Col>
                </Row>
                <div className='pt-5 d-flex justify-content-center'>
                    <Button type="submit" className='mx-3'>Cancelar</Button>
                    <Button type="submit" className='mx-3'>Registrar</Button>
                </div>
            </Form >
        </Col >
    </Row >
};

export default Personals;