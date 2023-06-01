import React from "react";
import { useForm } from "react-hook-form";

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import "../../../styles/profileConfiguration.css";

const Credentials = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return <Row className="formConfigContainer">
        <Col className="text-center pt-3" xs={12} md={3} lg={3}>
            <Image src="https://placehold.co/180x220" rounded fluid />
        </Col>
        <Col className="" xs={12} md={9} lg={9}>
            <h3 className='mt-3'>Edite sus credenciales</h3>
            <Form>
                <Row className='my-3'>
                    <Form.Group className="mb-3" controlId="formGroupId">
                        <Form.Label>Identificación (cédula) sin puntos, comas. Solo número</Form.Label>
                        <Form.Control type="number" placeholder="Ej: 1004718953" defaultValue="1234" {...register("cedula", { required: true })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Ej: miUser35@gmail.com" defaultValue="myuser@example.com" {...register("correo", { required: true, maxLength: 100 })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" defaultValue="someDifficultPassword" {...register("contrasena", { required: true, maxLenght: 50 })} />
                    </Form.Group>

                </Row>
                <div className='pt-5 d-flex justify-content-center'>
                    <Button type="submit" className='mx-3'>Cancelar</Button>
                    <Button type="submit" className='mx-3'>Registrar</Button>
                </div>
            </Form>
        </Col>
    </Row>

};

export default Credentials;