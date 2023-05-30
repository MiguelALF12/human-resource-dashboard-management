
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouteLoaderData } from "react-router-dom";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import "../../../styles/profileConfiguration.css";

import { updateAplicant } from "../../../api/aplicantes";
import { compareTwoWithCriteria, compareThreeWithCriteria, compareTwoObjects } from "../../../utilities/components";

const Academics = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useRouteLoaderData("userSessionHome");


    const handleSelectOptions = () => {
        let indexManejoIngles = compareTwoWithCriteria(user.manejoIngles, [true, false]);
        let indexSpeaking = compareThreeWithCriteria(user.speaking, ["BAJA", "MEDIA", "ALTA"]);
        let indexWriting = compareThreeWithCriteria(user.writing, ["BAJA", "MEDIA", "ALTA"]);
        let indexListening = compareThreeWithCriteria(user.listening, ["BAJA", "MEDIA", "ALTA"]);

        let optionsManejoIngles = [document.getElementById("manejoInglesTrue"), document.getElementById("manejoInglesFalse")];
        let optionsSpeaking = [document.getElementById("speakingBaja"), document.getElementById("speakingMedia"), document.getElementById("speakingAlta")];
        let optionsWriting = [document.getElementById("writingBaja"), document.getElementById("writingMedia"), document.getElementById("writingAlta")];
        let optionsListening = [document.getElementById("listeningBaja"), document.getElementById("listeningMedia"), document.getElementById("listeningAlta")];

        optionsManejoIngles[indexManejoIngles].setAttribute("selected", "");
        optionsSpeaking[indexSpeaking].setAttribute("selected", "");
        optionsWriting[indexWriting].setAttribute("selected", "");
        optionsListening[indexListening].setAttribute("selected", "");
    };

    useEffect(() => {
        handleSelectOptions();
    });

    const onSubmit = (newAcademicsInfo) => {

        console.log("nueva información en academics: ", newAcademicsInfo);
        if (newAcademicsInfo.manejoIngles === "Seleccionar") {
            newAcademicsInfo.manejoIngles = user.manejoIngles;
        }
        if (newAcademicsInfo.speaking === "Seleccionar") {
            newAcademicsInfo.speaking = user.speaking;
        }
        if (newAcademicsInfo.writing === "Seleccionar") {
            newAcademicsInfo.writing = user.writing;
        }
        if (newAcademicsInfo.listening === "Seleccionar") {
            newAcademicsInfo.listening = user.listening;
        }
        // { "escolaridad": "PROFESIONAL", "titulo": "Ingeniero de Sistemas y Computación telemática", "certificaciones": "Ninguna", "manejoIngles": true, "speaking": "ALTA", "writing": "MEDIA", "listening": "ALTA" }
        // { "certificaciones": "Ninguna", "escolaridad": "PROFESIONAL", "listening": "ALTA", "speaking": "ALTA", "titulo": "Ingeniero de Sistemas y Computación telemática", "writing": "MEDIA" }
        if (compareTwoObjects(newAcademicsInfo, {
            escolaridad: user.escolaridad,
            titulo: user.titulo,
            certificaciones: user.certificaciones,
            manejoIngles: user.manejoIngles,
            speaking: user.speaking,
            writing: user.writing,
            listening: user.listening,
        })) {

            updateAplicant(user.id, newAcademicsInfo)
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => { console.log(err); });
        } else {
            console.log("Información de academico no alterada.")
        }
    }

    return <Row className="formConfigContainer">
        <Col className="">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Form.Group as={Col} controlId="formGroupUserEscolarity">
                        <Form.Label>Nivel de escolaridad actual</Form.Label>
                        <Form.Select aria-label="Default select example" defaultValue={user.escolaridad} {...register("escolaridad", { required: true })}>
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
                        <Form.Control type="text" placeholder="Ej: Ingeniero de Sistemas y computación" defaultValue={user.titulo} {...register("titulo")} />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGroupUserCertifications">
                    <Form.Label>Certificaciones</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Ej: Bootcamp de programación, AWS Cloud Essentials Etc." defaultValue={user.certificaciones} {...register("certificaciones")} />
                </Form.Group>
                <Form.Group controlId="formGroupUserEnglishSecondLang">
                    <Form.Label >Manejo del idioma ingles</Form.Label>
                    <Form.Select aria-label="Default select example" {...register("manejoIngles")}>
                        <option>Seleccionar</option>
                        <option id="manejoInglesTrue" value="True">Si</option>
                        <option id="manejoInglesFalse" value="False">No</option>
                    </Form.Select>
                </Form.Group>
                <Row className='my-4'>
                    {/* #TODO: Configurar habilitado/deshabilitado */}
                    <Form.Group as={Col} controlId="formGroupUserEnglishSecondLangSpeaking">
                        <Form.Label>Nivel de speaking</Form.Label>
                        <Form.Select aria-label="Default select example" {...register("speaking")}>
                            <option>Seleccionar</option>
                            <option id="speakingBaja" value="BAJA">BAJA</option>
                            <option id="speakingMedia" value="MEDIA">MEDIA</option>
                            <option id="speakingAlta" value="ALTA">ALTA</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="UserEnglishSecondLangWritingWriting">
                        <Form.Label>Nivel de writing</Form.Label>
                        <Form.Select aria-label="Default select example" {...register("writing")}>
                            <option>Seleccionar</option>
                            <option id="writingBaja" value="BAJA">BAJA</option>
                            <option id="writingMedia" value="MEDIA">MEDIA</option>
                            <option id="writingAlta" value="ALTA">ALTA</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="UserEnglishSecondLangWritingListening">
                        <Form.Label>Nivel de listening</Form.Label>
                        <Form.Select aria-label="Default select example" {...register("listening")}>
                            <option>Seleccionar</option>
                            <option id="listeningBaja" value="BAJA">BAJA</option>
                            <option id="listeningMedia" value="MEDIA">MEDIA</option>
                            <option id="listeningAlta" value="ALTA">ALTA</option>
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