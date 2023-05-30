import React from "react";
import { useForm } from "react-hook-form";
import { useRouteLoaderData } from "react-router-dom";

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import "../../../styles/profileConfiguration.css";

import { updateAplicant } from "../../../api/aplicantes";
import { compareTwoObjects } from "../../../utilities/components";

const Personals = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useRouteLoaderData("userSessionHome");

    const onSubmit = (newPersonalInfo) => {
        if (compareTwoObjects(newPersonalInfo,
            {
                nombre: user.nombre,
                apellido: user.apellido,
                numCelular: user.numCelular,
                numTelefono: user.numTelefono,
                direccion: user.direccion
            })) {
            updateAplicant(user.id, newPersonalInfo)
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => { console.log(err); });
        } else {
            console.log("Información personal no alterada.")
        }
    }
    return <Row className="formConfigContainer">
        <Col className="">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h3 className='mt-3'>Información personal</h3>
                <Row className='my-3'>
                    <Col>
                        <Form.Group className="mb-3" controlId="formGroupUserName">
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control type="text" placeholder="Ej: Juan Esteban" defaultValue={user.nombre} {...register("nombre", { maxLength: 100 })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupUserLastname">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control type="text" placeholder="Ej: Aldana Solarte" defaultValue={user.apellido} {...register("apellido", { maxLength: 100 })} />
                        </Form.Group>
                    </Col >
                    <Col>
                        <Form.Group className="mb-3" controlId="formGroupUserPhone">
                            <Form.Label>Celular</Form.Label>
                            <Form.Control type="number" placeholder="Ej: 3218484132" defaultValue={user.numCelular} {...register("numCelular")} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupUserTelephone">
                            <Form.Label>Telefono fijo (opcional)</Form.Label>
                            <Form.Control type="number" placeholder="Ej: 3462047" defaultValue={user.numTelefono} {...register("numTelefono")} />
                        </Form.Group>
                    </Col>
                </Row >
                <h3 className='mt-3'>Información de ubicación</h3>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formGroupState">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control type="text" placeholder="Ej: Parque industrial Manzana 6 Casa 4" defaultValue={user.direccion} required {...register("direccion")} />
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