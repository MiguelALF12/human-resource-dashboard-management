import React from "react";
import { useForm } from "react-hook-form";
import { useRouteLoaderData, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import "../../../styles/profileConfiguration.css";

import { partialUpdateAplicant } from "../../../api/aplicantes";
import { compareTwoObjects } from "../../../utilities/components";

const Credentials = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useRouteLoaderData("userSessionHome");
    const navigate = useNavigate()

    const onSubmit = (newCredentialsInfo) => {

        if (compareTwoObjects(newCredentialsInfo,
            {
                cedula: user.cedula,
                correo: user.correo,
                contrasena: user.contrasena

            })) {
            partialUpdateAplicant(user.id, newCredentialsInfo).catch((err) => { console.log(err); });
            navigate(0);
        } else {
            alert("Información personal no alterada.")
        }
    }


    return <Row className="formConfigContainer">
        <Col className="text-center pt-3" xs={12} md={3} lg={3}>
            <Image src="https://placehold.co/180x220" rounded fluid />
        </Col>
        <Col className="" xs={12} md={9} lg={9}>
            <h3 className='mt-3'>Edite sus credenciales</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className='my-3'>
                    <Form.Group className="mb-3" controlId="formGroupId">
                        <Form.Label>Identificación (cédula) sin puntos, comas. Solo número</Form.Label>
                        <Form.Control type="number" placeholder="Ej: 1004718953" defaultValue={user.cedula} {...register("cedula")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Ej: miUser35@gmail.com" defaultValue={user.correo} {...register("correo", { maxLength: 100 })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="text" placeholder="Contraseña" defaultValue={user.contrasena} {...register("contrasena", { maxLenght: 50 })} />
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