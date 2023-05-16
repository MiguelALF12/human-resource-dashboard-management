import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

import Header from '../components/header';
import Footer from '../components/footer';
import { createAplicant } from '../api/aplicantes';


import "../styles/bodyInfo.css";

// Yup y Zod
// librerias para valiaciones mas complejas

const Register = () => {

    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        // const form = data.currentTarget;
        // if (form.checkValidity() === false) {
        //     data.preventDefault();
        //     data.stopPropagation();
        // }
        // setValidated(true);
        // const formData = new FormData();
        // // Credentials and Personal Info
        // formData.append("identification", form.formGroupId.value);
        // formData.append("name", form.formGroupUserName.value);
        // formData.append("lastName", form.formGroupUserLastname.value);
        // formData.append("userName", form.formGroupUserAccountName.value);
        // formData.append("email", form.formGroupEmail.value);
        // formData.append("password", form.formGroupPassword.value);
        // formData.append("phoneNumber", form.formGroupUserPhone.value);
        // formData.append("telephone", form.formGroupUserTelephone.value);
        // // Location    
        // formData.append("country", form.formGroupCountry.value);
        // formData.append("state", form.formGroupState.value);
        // formData.append("city", form.formGroupCity.value);
        // // Academics
        // formData.append("escolarity", form.formGroupUserEscolarity.value);
        // formData.append("title", form.formGroupUserProfessionalTitle.value);
        // formData.append("certifications", form.formGroupUserCertifications.value);
        // formData.append("englishSecondLang", form.formGroupUserEnglishSecondLang.value);
        // formData.append("speaking", form.formGroupUserEnglishSecondLangSpeaking.value);
        // formData.append("writingListening", form.UserEnglishSecondLangWritingListening.value);

        // // Application
        // formData.append("workingExperience", form.formGroupUserWorkExerience.value);
        // formData.append("ableToTransfer", form.formGroupUserMovilizationCapacity.value);
        // formData.append("ableToWorkExtraHours", form.formGroupUserExtraHourCapacity.value);
        // // // files 
        // // formData.append("files", form.formFileIdentification.files[0], "identification");
        // // formData.append("files", form.formFileEducationCertificates.files[0], "eduactionCertificates");
        // // formData.append("files", form.formFilePension.files[0], "pension");
        // // formData.append("files", form.formFileMilitarCard.files[0], "militarCard");
        // // formData.append("files", form.formFileWorkExperienceLetters.files[0], "workExperienceLetters");
        // // formData.append("files", form.formFileUserPenalBackground.files[0], "penalBackground");
        // // formData.append("files", form.formFileResume.files[0], "resume");
        // // formData.append("files", form.formFileHealthInsurance.files[0], "healthInsurance");

        // // const testObject = {
        // //     "cedula": "1004718953",
        // //     "nombre": "Miguel",
        // //     "apellido": "Lopez",
        // //     "correo": "miguel.lopez@utp.edu.co",
        // //     "contrasena": "miguel3612",
        // //     "numCelular": "3218484132",
        // //     "numTelefono": "0",
        // //     "ciudad": "Pereira",
        // //     "academic": {
        // //         "escolarity": "Bachiller",
        // //         "title": "Cursando",
        // //         "certifications": "Ninguna",
        // //         "englishSecondLang": {
        // //             "handle": true,
        // //             "fluentness": {
        // //                 "speaking": "3",
        // //                 "writingListening": "3"
        // //             }
        // //         }
        // //     },
        // //     "workingExperience": "0",
        // //     "ableToTransfer": false,
        // //     "ableToWorkExtraHours": true
        // //     // "files": [
        // //     //     { name: "identification", data: form.formFileIdentification.files },
        // //     //     { name: "studyCertificates", data: form.formFileEducationCertificates.files },
        // //     //     { name: "pension", data: form.formFilePension.files },
        // //     //     { name: "militarCard", data: form.formFileMilitarCard.files },
        // //     //     { name: "workingExperience", data: form.formFileWorkExperienceLetters.files },
        // //     //     { name: "penalBackground", data: form.formFileUserPenalBackground.files },
        // //     //     { name: "resume", data: form.formFileResume.files },
        // //     //     { name: "healthInsurance", data: form.formFileHealthInsurance.files }
        // //     // ]
        // // }
        // const testObject = {
        //     "cedula": "1004718953",
        //     "nombre": "Miguel",
        //     "apellido": "Lopez",
        //     "correo": "miguel.lopez@utp.edu.co",
        //     "contrasena": "miguel3612",
        //     "numCelular": "3218484132",
        //     "numTelefono": "0",
        //     "ciudad": "Pereira",
        //     "direccion": "PArque industrial manzana 6 casa 4 sector B",
        //     "escolaridad": "BACHILLER",
        //     "manejoIngles": true,
        //     "speaking": "MEDIA",
        //     "writing": "MEDIA",
        //     "listening": "MEDIA",
        //     "experienciaLaboral": "0",
        //     "dispuestoTraslado": false,
        //     "trabajarHorasExtra": true
        //     // "files": [
        //     //     { name: "identification", data: form.formFileIdentification.files },
        //     //     { name: "studyCertificates", data: form.formFileEducationCertificates.files },
        //     //     { name: "pension", data: form.formFilePension.files },
        //     //     { name: "militarCard", data: form.formFileMilitarCard.files },
        //     //     { name: "workingExperience", data: form.formFileWorkExperienceLetters.files },
        //     //     { name: "penalBackground", data: form.formFileUserPenalBackground.files },
        //     //     { name: "resume", data: form.formFileResume.files },
        //     //     { name: "healthInsurance", data: form.formFileHealthInsurance.files }
        //     // ]
        // }
        await createAplicant(data)
            .then((res) => console.log(res))
            .catch((err) => {
                if (err.response) {
                    // La respuesta fue hecha y el servidor respondió con un código de estado
                    // que esta fuera del rango de 2xx
                    console.log("response")
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else if (err.request) {
                    // La petición fue hecha pero no se recibió respuesta
                    // `err.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
                    // http.ClientRequest en node.js
                    console.log("request")
                    console.log(err.request);
                } else {
                    // Algo paso al preparar la petición que lanzo un err
                    console.log("err in request")
                    console.log('err', err.message);
                }
                console.log(err.config);
            });
        // submit(formData);
        // navigate("/");
    });




    return (
        <>
            <Header />
            <Row id="bodyInfoContainer" className='m-4'>
                <Col className='ps-5' xs={12} md={2}><Button onClick={() => {
                    navigate(-1);
                }}>Regresar</Button></Col>
                <Col xs={12} md={10}>
                    <h2 className='text-center'>Formulario de <strong>Registro</strong></h2>
                    <div className='mx-auto w-75'>
                        {/* Need to ad border to separate each part with id="formSection" */}
                        <Form id="registrationForm" noValidate validated={validated} onSubmit={onSubmit}>
                            <h3 className='mt-3'>Cree sus credenciales</h3>
                            <Row className='my-3'>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupId">
                                        <Form.Label>Identificación (cédula) sin puntos, comas. Solo número</Form.Label>
                                        <Form.Control type="number" placeholder="Ej: 1004718953" defaultValue="1234" required {...register("cedula")} />
                                    </Form.Group>
                                    {/* <Form.Group className="mb-3" controlId="formGroupUserAccountName">
                                        <Form.Label>Nombre de usuario</Form.Label>
                                        <Form.Control type="text" placeholder="Ej: miUser35" defaultValue="" required {...register("nombre")} />
                                    </Form.Group> */}
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label>Correo electrónico</Form.Label>
                                        <Form.Control type="email" placeholder="Ej: miUser35@gmail.com" defaultValue="myuser@example.com" required {...register("correo")} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" placeholder="Contraseña" defaultValue="someDifficultPassword" required {...register("contrasena")} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <h3 className='mt-3'>Información personal</h3>
                            <Row className='my-3'>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupUserName">
                                        <Form.Label>Nombres</Form.Label>
                                        <Form.Control type="text" placeholder="Ej: Juan Esteban" defaultValue="Miguel Angel" required {...register("nombre")} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupUserLastname">
                                        <Form.Label>Apellidos</Form.Label>
                                        <Form.Control type="text" placeholder="Ej: Aldana Solarte" defaultValue="Lopez Fernandez" required {...register("apellido")} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupUserPhone">
                                        <Form.Label>Celular</Form.Label>
                                        <Form.Control type="number" placeholder="Ej: 3218484132" defaultValue="1234567" {...register("numCelular")} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupUserTelephone">
                                        <Form.Label>Telefono fijo (opcional)</Form.Label>
                                        <Form.Control type="number" placeholder="Ej: 3462047" defaultValue="7654321" {...register("numTelefono")} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <h3 className='mt-3'>Información de ubicación</h3>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupCountry">
                                        <Form.Label>Ciudad</Form.Label>
                                        <Form.Control type="text" placeholder="Ej: Colombia" defaultValue="Pereira" required {...register("ciudad")} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupState">
                                        <Form.Label>Dirección</Form.Label>
                                        <Form.Control type="email" placeholder="Ej: Parque industrial Manzana 6 Casa 4" defaultValue="Una casa" required {...register("direccion")} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <h3 className='mt-3'>Información academica</h3>
                            <Row>
                                <Form.Group as={Col} controlId="formGroupUserEscolarity">
                                    <Form.Label>Nivel de escolaridad actual</Form.Label>
                                    <Form.Select aria-label="Default select example" defaultValue="PROFESIONAL" required {...register("escolaridad")}>
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
                            <h3 className='mt-3'>Información de aplicación</h3>
                            <Row className='my-3'>
                                <Form.Group as={Col} controlId="formGroupUserWorkExerience">
                                    <Form.Label>Experiencia verificable en años</Form.Label>
                                    <Form.Control type="text" placeholder="Años" defaultValue="1" {...register("experienciaLaboral")} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGroupUserMovilizationCapacity">
                                    <Form.Label>Estaría dispuesto a trasladarse</Form.Label>
                                    <Form.Select aria-label="Default select example" defaultValue="False" required {...register("dispuestoTraslado")}>
                                        <option>Seleccionar</option>
                                        <option value="True">Si</option>
                                        <option value="False">No</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGroupUserExtraHourCapacity">
                                    <Form.Label>Estaría dispuesto a trabajar horas extras en cualquier horario?</Form.Label>
                                    <Form.Select aria-label="Default select example" defaultValue="False" required {...register("trabajarHorasExtra")}>
                                        <option>Seleccionar</option>
                                        <option value="True">Si</option>
                                        <option value="False">No</option>
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
                                        <Form.Control type="file" size="sm" {...register("files.0")} />
                                    </Form.Group>
                                    <Form.Group controlId="formFileLibretaMilitar" className="mb-3">
                                        <Form.Label>Libreta militar</Form.Label>
                                        <Form.Control type="file" size="sm" {...register("files.1")} />
                                    </Form.Group>
                                    <Form.Group controlId="formFileHojaDeVida" className="mb-3">
                                        <Form.Label>Hoja de vida</Form.Label>
                                        <Form.Control type="file" size="sm" {...register("files.2")} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formFileCertifications" className="mb-3">
                                        <Form.Label>Certificados de educación </Form.Label>
                                        <Form.Control type="file" size="sm" {...register("files.3")} />
                                    </Form.Group>
                                    <Form.Group controlId="formFileExperienciaLaboral" className="mb-3">
                                        <Form.Label>Cartas de experiencia laboral </Form.Label>
                                        <Form.Control type="file" size="sm" {...register("files.4")} />
                                    </Form.Group>
                                    <Form.Group controlId="formFileEps" className="mb-3">
                                        <Form.Label>Certificado de EPS</Form.Label>
                                        <Form.Control type="file" size="sm" {...register("files.5")} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formFilePension" className="mb-3">
                                        <Form.Label>Certificado de pensión</Form.Label>
                                        <Form.Control type="file" size="sm" {...register("files.6")} />
                                    </Form.Group>
                                    <Form.Group controlId="formFileBeneficios" className="mb-3">
                                        <Form.Label>Beneficios</Form.Label>
                                        <Form.Control type="file" size="sm"  {...register("files.7")} />
                                    </Form.Group>
                                    <Form.Group controlId="formFileOthers" className="mb-3">
                                        <Form.Label>Otros</Form.Label>
                                        <Form.Control type="file" size="sm" multiple {...register("files.8")} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mt-4">
                                <Form.Check
                                    label="Agree to terms and conditions"
                                />
                            </Form.Group>
                            <div className='py-5 w-50 mx-auto'>
                                <Button type="submit" className='mx-3'>Cancelar</Button>
                                <Button type="submit" className='mx-3'>Registrar</Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
            <Footer />
        </>
    )
};

export default Register;