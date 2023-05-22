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
                <h3 className='mt-3'>Información personal</h3>
                <Row className='my-3'>
                    <Col>
                        <Form.Group className="mb-3" controlId="formGroupUserName">
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control type="text" placeholder="Ej: Juan Esteban" defaultValue="Miguel Angel" {...register("nombre", { required: true, maxLength: 100 })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupUserLastname">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control type="text" placeholder="Ej: Aldana Solarte" defaultValue="Lopez Fernandez" {...register("apellido", { required: true, maxLength: 100 })} />
                        </Form.Group>
                    </Col >
                    <Col>
                        <Form.Group className="mb-3" controlId="formGroupUserPhone">
                            <Form.Label>Celular</Form.Label>
                            <Form.Control type="number" placeholder="Ej: 3218484132" defaultValue="1234567" {...register("numCelular", { required: true })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupUserTelephone">
                            <Form.Label>Telefono fijo (opcional)</Form.Label>
                            <Form.Control type="number" placeholder="Ej: 3462047" defaultValue="7654321" {...register("numTelefono")} />
                        </Form.Group>
                    </Col>
                </Row >
                <h3 className='mt-3'>Información de ubicación</h3>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formGroupCountry">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control type="text" placeholder="Ej: Colombia" defaultValue="Pereira" {...register("ciudad", { required: true })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupState">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control type="text" placeholder="Ej: Parque industrial Manzana 6 Casa 4" defaultValue="Una casa" required {...register("direccion", { required: true })} />
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