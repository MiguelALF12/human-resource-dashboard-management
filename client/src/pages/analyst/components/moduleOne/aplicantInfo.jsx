import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Stack from 'react-bootstrap/Stack';

const AplicantInformation = (props) => {
    // console.log("aplicant info: ", props.aplicant)
    return (
        <>
            <Row>
                {/* Foto e información de aplicacion*/}
                <Col className="d-flex py-4 px-5">
                    <Image src="https://placehold.co/140x200" rounded fluid />
                    <Stack gap={2} className="ps-4">
                        <div>
                            <h6><strong>Experiencia verificable en años</strong></h6>
                            <span>{props.aplicant.experienciaLaboral}</span>
                        </div>
                        <div>
                            <h6><strong>Estaría dispuesto a trasladarse</strong></h6>
                            <span>{props.aplicant.dispuestoTraslado ? "Si" : "No"}</span>
                        </div>
                        <div>
                            <h6><strong>Trabajaría horas </strong></h6>
                            <span>{props.aplicant.trabajarHorasExtra ? "Si" : "No"}</span>
                        </div>
                    </Stack>
                </Col>
            </Row >
            <Row>
                {/* Información académica */}
                <Col className="d-flex flex-column py-4 px-5">
                    <h5>Información académica</h5>
                    <Stack gap={3}>
                        <Stack direction="horizontal" gap={4}>
                            <div>
                                <h6><strong>Escolaridad</strong></h6>
                                <span>{props.aplicant.escolaridad}</span>
                            </div>
                            <div>
                                <h6><strong>Titulo profesional</strong></h6>
                                <span>{props.aplicant.titulo}</span>
                            </div>
                        </Stack>
                        <div>
                            <h6><strong>Certificaciones</strong></h6>
                            <span>{props.aplicant.certificaciones}</span>
                        </div>

                        <Stack direction="horizontal" gap={4}>
                            <div>
                                <h6><strong>Manejo del ingles</strong></h6>
                                <span>{props.aplicant.manejoIngles ? "Si" : "No"}</span>
                            </div>
                            <div>
                                <h6><strong>Speaking</strong></h6>
                                <span>{props.aplicant.speaking}</span>
                            </div>
                            <div>
                                <h6><strong>Writing</strong></h6>
                                <span>{props.aplicant.writing}</span>
                            </div>
                            <div>
                                <h6><strong>Listening</strong></h6>
                                <span>{props.aplicant.listening}</span>
                            </div>
                        </Stack>
                    </Stack>
                </Col>
            </Row>


        </>

    )
};

export default AplicantInformation