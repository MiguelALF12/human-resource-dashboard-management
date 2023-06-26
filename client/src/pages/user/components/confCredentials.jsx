import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouteLoaderData } from "react-router-dom";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import { partialUpdateAplicantCredentials, partialUpdateAplicant } from "../../../api/aplicantes";
import { compareTwoObjects } from "../../../utilities/components";
import { htmlStrToElement } from "../../../utilities/components";

const Credentials = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useRouteLoaderData("userSessionHome");

    useEffect(() => {
        let profileImgElem = htmlStrToElement(user.imagenPerfil);
        let container = document.getElementById("aplicantImgOnConf");
        if (container.childElementCount < 1) {
            profileImgElem.firstChild.style.transform = "scale(3)"; // #TODO: Puede mejorar?, es decir, una manera en la que no se use inlinestyle
            console.log(profileImgElem.firstChild)
            container.appendChild(profileImgElem.firstChild);
        }
    }, [user])
    const onSubmit = (newCredentialsInfo) => {
        let oldCredentialsInfo = {
            cedula: user.cedula,
            contrasena: user.contrasena,
            correo: user.correo
        }
        if (compareTwoObjects(newCredentialsInfo, oldCredentialsInfo)) {
            newCredentialsInfo.oldUsername = oldCredentialsInfo.cedula
            partialUpdateAplicantCredentials(newCredentialsInfo).then((data) => {
                delete newCredentialsInfo.oldUsername;
                console.log(newCredentialsInfo);
                return partialUpdateAplicant(user.id, newCredentialsInfo)
            }).then((data) => {
                console.log("from updating aplicant: ", data);
            }).catch(err => {
                console.warn(err);
            });
        } else {
            alert("Información personal no alterada.")
        }
    }

    return <Row className="formConfigContainer border border-1">
        <Col className="text-center my-auto" xs={12} md={3} lg={3} id="aplicantImgOnConf">
        </Col>
        <Col className="" xs={12} md={9} lg={9}>
            <h3 className='mt-3'>Edite sus credenciales</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className='my-3'>
                    <Form.Group className="mb-3" controlId="formGroupId">
                        <Form.Label>Identificación (cédula) sin puntos, comas. Solo número</Form.Label>
                        <Form.Control type="number" placeholder="Ej: 1004718953" defaultValue={user.cedula} {...register("cedula")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="text" placeholder="Contraseña" defaultValue={user.contrasena} {...register("contrasena", { maxLenght: 50 })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Ej: miUser35@gmail.com" defaultValue={user.correo} {...register("correo", { maxLength: 100 })} />
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