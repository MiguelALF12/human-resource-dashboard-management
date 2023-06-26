/**
 * #TODO: Refactorizar la función getDocuments() en use effect poniendola en otra carpeta
 */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouteLoaderData } from "react-router-dom";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import { getAplicantDocuments, updateDocs } from "../../../api/documentos";
import { partialUpdateAplicant } from "../../../api/aplicantes";
import { renameFile, loadReturnedAplicantDocs } from "../../../utilities/files";
import { compareTwoWithCriteria, compareTwoObjects } from "../../../utilities/components";

const Personals = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useRouteLoaderData("userSessionHome");

    const handleSelectOptions = () => {
        let indexDispuestoTraslado = compareTwoWithCriteria(user.dispuestoTraslado, [true, false]);
        let indexHorasExtras = compareTwoWithCriteria(user.trabajarHorasExtra, [true, false]);
        let optionsDispuestoTraslado = [document.getElementById("dispuestoTrasladoTrue"), document.getElementById("dispuestoTrasladoFalse")];
        let optionsHorasExtras = [document.getElementById("dispuestoHorasExtrasTrue"), document.getElementById("dispuestoHorasExtrasFalse")];

        optionsDispuestoTraslado[indexDispuestoTraslado].setAttribute("selected", "");
        optionsHorasExtras[indexHorasExtras].setAttribute("selected", "");

    };

    useEffect(() => {
        async function getDocuments() {
            const res = await getAplicantDocuments(user.id);
            loadReturnedAplicantDocs(res);
        };
        handleSelectOptions();
        getDocuments()

    })

    const onSubmit = (newOffersInfo) => {
        const formData = new FormData();
        for (const [documentType, file] of Object.entries(newOffersInfo.files)) {
            if (file.length === 1) {
                formData.append(documentType, renameFile(documentType, file[0]));
            }
        }
        updateDocs(user.id, formData)
            .then((data) => {
                console.log("se cambió ", data);
            })
            .catch((err) => { console.log(err); });

        delete newOffersInfo.files;
        if (newOffersInfo.dispuestoTraslado === "Seleccionar") {
            newOffersInfo.dispuestoTraslado = user.dispuestoTraslado;
        }
        if (newOffersInfo.trabajarHorasExtra === "Seleccionar") {
            newOffersInfo.trabajarHorasExtra = user.trabajarHorasExtra;
        }
        if (compareTwoObjects(newOffersInfo, { experienciaLaboral: user.experienciaLaboral, dispuestoTraslado: user.dispuestoTraslado, trabajarHorasExtra: user.trabajarHorasExtra })) {
            partialUpdateAplicant(user.id, newOffersInfo)
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => { console.log(err); });
            // navigate(0);
        }

    }



    return <Row className="formConfigContainer">
        {/* <div id="download-container"></div> */}
        <Col className="">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h3 className='mt-3'>Acerca de ofertas</h3>
                <Row className='my-3'>
                    <Form.Group as={Col} controlId="formGroupUserWorkExerience">
                        <Form.Label>Experiencia verificable en años</Form.Label>
                        <Form.Control type="text" placeholder="Años" defaultValue={user.experienciaLaboral} {...register("experienciaLaboral")} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGroupUserMovilizationCapacity">
                        <Form.Label>Estaría dispuesto a trasladarse</Form.Label>
                        <Form.Select aria-label="Default select example" {...register("dispuestoTraslado")}>
                            <option>Seleccionar</option>
                            <option id="dispuestoTrasladoTrue" value="True">Si</option>
                            <option id="dispuestoTrasladoFalse" value="False">No</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGroupUserExtraHourCapacity">
                        <Form.Label>Estaría dispuesto a trabajar horas extras en cualquier horario?</Form.Label>
                        <Form.Select aria-label="Default select example" {...register("trabajarHorasExtra")}>
                            <option>Seleccionar</option>
                            <option id="dispuestoHorasExtrasTrue" value="True">Si</option>
                            <option id="dispuestoHorasExtrasFalse" value="False">No</option>
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
                            <Form.Control type="file" size="sm" {...register("files.CEDULA")} />
                            <div id="cedulaViewer"></div>
                        </Form.Group>
                        <Form.Group controlId="formFileLibretaMilitar" className="mb-3">
                            <Form.Label>Libreta militar</Form.Label>
                            <Form.Control type="file" size="sm" {...register("files.LIBRETA_MILITAR")} />
                            <div id="libreta_militarViewer"></div>
                        </Form.Group>
                        <Form.Group controlId="formFileHojaDeVida" className="mb-3">
                            <Form.Label>Hoja de vida</Form.Label>
                            <Form.Control type="file" size="sm" {...register("files.HOJA_DE_VIDA")} />
                            <div id="hoja_de_vidaViewer"></div>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formFileCertifications" className="mb-3">
                            <Form.Label>Certificados de educación </Form.Label>
                            <Form.Control type="file" size="sm" {...register("files.CERTIFICADOS_EDUCACION")} />
                            <div id="certificados_educacionViewer"></div>
                        </Form.Group>
                        <Form.Group controlId="formFileExperienciaLaboral" className="mb-3">
                            <Form.Label>Cartas de experiencia laboral </Form.Label>
                            <Form.Control type="file" size="sm" {...register("files.CARTAS_EXPERIENCIA_LABORAL")} />
                            <div id="cartas_experiencia_laboralViewer"></div>
                        </Form.Group>
                        <Form.Group controlId="formFileEps" className="mb-3">
                            <Form.Label>Certificado de EPS</Form.Label>
                            <Form.Control type="file" size="sm" {...register("files.CERTIFICADO_EPS")} />
                            <div id="certificado_epsViewer"></div>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formFilePension" className="mb-3">
                            <Form.Label>Certificado de pensión</Form.Label>
                            <Form.Control type="file" size="sm" {...register("files.CERTIFICADO_PENSION")} />
                            <div id="certificado_pensionViewer"></div>
                        </Form.Group>
                        <Form.Group controlId="formFileBeneficios" className="mb-3">
                            <Form.Label>Beneficios</Form.Label>
                            <Form.Control type="file" size="sm"  {...register("files.BENEFICIOS")} />
                            <div id="beneficiosViewer"></div>
                        </Form.Group>
                        <Form.Group controlId="formFileOthers" className="mb-3">
                            <Form.Label>Otros</Form.Label>
                            <Form.Control type="file" size="sm" multiple {...register("files.OTROS")} />
                            <div id="otrosViewer"></div>
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