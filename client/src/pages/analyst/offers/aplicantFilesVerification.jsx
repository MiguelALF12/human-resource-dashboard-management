import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'
import { useNavigate, useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InterviewAndPsicologicalTest from './interviewAndPsicologicalTest'
import { getAplicantDocuments } from "../../../api/documentos";
import { loadReturnedAplicantDocs } from "../../../utilities/files";
import { renameFile } from "../../../utilities/files";
import { addDataIntoLocalStorage } from "../../../utilities/components";

export let userInfoPreHiring;



const AplicantFilesVerification = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit } = useForm();
    const [disableCheck, setDisableCheck] = useState([false, false]);
    const handleCheck = () => {
        const hiringType = [document.getElementById("isDirectHiring").checked, document.getElementById("isIndirectHiring").checked]

        if (hiringType[0]) {
            setDisableCheck([false, true]);
        } else {
            if (hiringType[1]) {
                setDisableCheck([true, false]);
            } else {
                setDisableCheck([false, false]);
            }
        }

    }
    useEffect(() => {
        async function getDocuments() {
            const res = await getAplicantDocuments(props.aplicant.id);
            loadReturnedAplicantDocs(res);
        };
        getDocuments()

    })
    const refreshPage = () => {
        navigate(0);
    }
    // console.log("Aplicante seleccionado", props.aplicant);
    const onSubmit = (userValidationPreHiring) => {
        // Solo continuamos con la contratación si esta es directa
        console.log("validación de usuario pre hiring: ", userValidationPreHiring);
        if (!disableCheck[0] && props.aplicant.faseAplicante === "PRE_CONTRATACION" && userValidationPreHiring.hojaDeVidaCheck && userValidationPreHiring.cedulaCheck) {
            const formData = new FormData();
            for (const [key, value] of Object.entries(userValidationPreHiring)) {
                // console.log(key, value);
                if (key !== "files") {
                    formData.append(key, value);
                } else {
                    for (let keyObj in userValidationPreHiring.files) {
                        formData.append(keyObj, renameFile(keyObj, userValidationPreHiring.files[keyObj][0]));
                    }
                }
            }
            addDataIntoLocalStorage(formData);
            document.location.href = `${props.aplicant.id}/hiringProcess/`;
        } else {
            // Queda la duda de que hacer cuando la contratación es indirecta.
            alert("El aplicante no puede pasar al siguiente proceso. La contratación debe ser DIRECTA, su estado debe ser PRE-CONTRATACION y tanto los documentos de HOJA DE VIDA como CEDULA deben ser validos (check).")
            refreshPage();
        }

    }
    return (<>
        <Row>
            {/* 1-"CEDULA" ✔
                                    2-"LIBRETA_MILITAR"✔
                                    3-"HOJA_DE_VIDA" ✔
                                    4-"CERTIFICADOS_EDUCACION"✔
                                    5-"CARTAS_EXPERIENCIA_LABORAL"✔
                                    6-"CERTIFICADO_EPS"
                                    7-"CERTIFICADO_PENSION"
                                    8-"BENEFICIOS"
                                    9-"OTROS" */}
            {/* Foto y documentos principales*/}
            <Col className="d-flex pt-2 px-3">
                <Image src="https://placehold.co/140x200" rounded fluid />
                <Stack gap={2} className="ps-4">
                    <h5>Principales</h5>
                    <div>
                        <Stack direction="horizontal" gap={3}>
                            <h6><strong>Hoja de vida</strong></h6>
                            <Form.Check type={'checkbox'} {...register("hojaDeVidaCheck")} />
                        </Stack>
                        <div id="hoja_de_vidaViewer"></div>
                    </div>
                    <div>
                        <Stack direction="horizontal" gap={3}>
                            <h6><strong>Cedula</strong></h6>
                            <Form.Check type={'checkbox'} {...register("cedulaCheck")} />
                        </Stack>
                        <div id="cedulaViewer"></div>
                    </div>
                    <div>
                        <Stack direction="horizontal" gap={3}>
                            <h6><strong>Certificado de educación</strong></h6>
                            <Form.Check type={'checkbox'} {...register("certificadoEducacionCheck")} />
                        </Stack>
                        <div id="certificados_educacionViewer"></div>
                    </div>
                </Stack>
            </Col>
        </Row >
        <Row>
            {/* otros documentos*/}
            <Col className="d-flex flex-column py-2 px-3">
                <h5>Otros documentos</h5>
                <Stack gap={3}>
                    <div>
                        <Stack direction="horizontal" gap={3}>
                            <h6><strong>Libreta militar</strong></h6>
                            <Form.Check type={'checkbox'} {...register("isAplicantSelectedYes")} />
                        </Stack>
                        <div id="libreta_militarViewer"></div>
                    </div>
                    <div>
                        <Stack direction="horizontal" gap={3}>
                            <h6><strong>Cartas experiencia laboral</strong></h6>
                            <Form.Check required type={'checkbox'} {...register("cartaExperienciaLaboralCheck")} />
                        </Stack>
                        <div id="cartas_experiencia_laboralViewer"></div>
                    </div>

                    <div>
                        <Stack direction="horizontal" gap={3}>
                            <h6><strong>Certificado EPS</strong></h6>
                            <Form.Check type={'checkbox'} {...register("certificadoEpsCheck")} />
                        </Stack>
                        <div id="certificado_epsViewer"></div>
                    </div>
                    <div>
                        <Stack direction="horizontal" gap={3}>
                            <h6><strong>Certificado pensión</strong></h6>
                            <Form.Check type={'checkbox'} {...register("certificadoPensionCheck")} />
                        </Stack>
                        <div id="certificado_pensionViewer"></div>
                    </div>
                    <div>
                        <Stack direction="horizontal" gap={3}>
                            <h6><strong>Beneficios</strong></h6>
                            <Form.Check type={'checkbox'} {...register("beneficiosCheck")} />
                        </Stack>

                        <div id="beneficiosViewer"></div>
                    </div>
                    <div>
                        <Stack direction="horizontal" gap={3}>
                            <h6><strong>Otros</strong></h6>
                            <Form.Check type={'checkbox'} {...register("otrosCheck")} />
                        </Stack>
                        <div id="otrosViewer"></div>
                    </div>
                </Stack>
            </Col>
            <Col className="d-flex flex-column py-2 border border-1">
                <h5>Resultados de entrevista</h5>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Digite de manera resumida los resultados de la entrevista:</Form.Label>
                        <Form.Control as="textarea" rows={4} required {...register("resultadosEntrevista", { required: true })} />
                    </Form.Group>
                    <Form.Group controlId="formFileHojaDeVida" className="mb-3">
                        <Form.Label>Resultados de entrevista</Form.Label>
                        <Form.Control type="file" size="sm" required {...register("files.RESULTADOS_ENTREVISTA", { required: true })} />
                        {/* {...register("files.HOJA_DE_VIDA", { required: true })} */}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Tipo de contratación:</Form.Label>
                        <Stack>
                            <Stack direction="horizontal" gap={3}>
                                <Form.Check type={'checkbox'} id="isDirectHiring" onChange={handleCheck} disabled={disableCheck[0]} />
                                <span>Directa</span>
                            </Stack>
                            <Stack direction="horizontal" gap={3}>
                                <Form.Check type={'checkbox'} id="isIndirectHiring" onChange={handleCheck} disabled={disableCheck[1]} />
                                <span>Indirecta (empresa tercera)</span>
                            </Stack>
                        </Stack>
                    </Form.Group>
                    <Button type="submit" variant="success" className='mx-3'>Contratar</Button>
                    <Button type="submit" variant="danger" className='mx-3'>Dar de baja</Button>
                </Form>
            </Col>

        </Row>
        {/* <div className='flex-fill'><InterviewAndPsicologicalTest /></div> */}
    </>)
};

export default AplicantFilesVerification;