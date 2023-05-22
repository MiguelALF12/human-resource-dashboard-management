import React from "react";
import { useForm } from "react-hook-form";

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import "../../../styles/profileConfiguration.css";

const Academics = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return <Row className="formConfigContainer">
        <Col className="">
            <Form>
                <Row>
                    <Form.Group as={Col} controlId="formGroupUserEscolarity">
                        <Form.Label>Nivel de escolaridad actual</Form.Label>
                        <Form.Select aria-label="Default select example" defaultValue="PROFESIONAL" {...register("escolaridad", { required: true })}>
                            <option>Seleccionar</option>
                            <option value="PRIMARIA"> Primaria</option>
                            <option value="BACHILLER"> Bachiller</option>
                            <option value="TECNICO"> Técnico</option>
                            <option value="PROFESIONAL"> Profesional</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="formGroupUserProfessionalTitle">
                        {/* #TODO: Configurar habilitado/deshabilitado */}
                        <Form.Label>Titulo Profesional</Form.Label>
                        <Form.Control type="text" placeholder="Ej: Ingeniero de Sistemas y computación" defaultValue="Ingeniero de Sistemas y Computación" {...register("titulo")} />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGroupUserCertifications">
                    <Form.Label>Certificaciones</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Ej: Bootcamp de programación, AWS Cloud Essentials Etc." defaultValue="Ninguna" {...register("certificaciones")} />
                </Form.Group>
                <Form.Group controlId="formGroupUserEnglishSecondLang">
                    <Form.Label >Manejo del idioma ingles</Form.Label>
                    <Form.Select aria-label="Default select example" defaultValue="False" {...register("manejoIngles")}>
                        <option>Seleccionar</option>
                        <option value="True">Si</option>
                        <option value="False">No</option>
                    </Form.Select>
                </Form.Group>
                <Row className='my-4'>
                    {/* #TODO: Configurar habilitado/deshabilitado */}
                    <Form.Group as={Col} controlId="formGroupUserEnglishSecondLangSpeaking">
                        <Form.Label>Nivel de speaking</Form.Label>
                        <Form.Select aria-label="Default select example" defaultValue="BAJA" {...register("speaking")}>
                            <option>Seleccionar</option>
                            <option value="BAJA">Baja</option>
                            <option value="MEDIA">Media</option>
                            <option value="ALTA">Alta</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="UserEnglishSecondLangWritingWriting">
                        <Form.Label>Nivel de writing</Form.Label>
                        <Form.Select aria-label="Default select example" defaultValue="BAJA" {...register("writing")}>
                            <option>Seleccionar</option>
                            <option value="BAJA">Baja</option>
                            <option value="MEDIA">Media</option>
                            <option value="ALTA">Alta</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="UserEnglishSecondLangWritingListening">
                        <Form.Label>Nivel de listening</Form.Label>
                        <Form.Select aria-label="Default select example" defaultValue="BAJA" {...register("listening")}>
                            <option>Seleccionar</option>
                            <option value="BAJA">Baja</option>
                            <option value="MEDIA">Media</option>
                            <option value="ALTA">Alta</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <div className='pt-5 d-flex justify-content-center'>
                    <Button type="submit" className='mx-3'>Cancelar</Button>
                    <Button type="submit" className='mx-3'>Registrar</Button>
                </div>
            </Form >
        </Col >
    </Row >
};

export default Academics;