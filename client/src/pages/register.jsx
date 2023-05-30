/*
    #TODO: Crear validacion, basarme en el sigueinte tutorial https://www.freecodecamp.org/news/add-form-validation-in-react-app-with-react-hook-form/ ; https://www.react-hook-form.com/api/useform/seterror/
    #TODO: Validar cantidad de documentos enviados
    #TODO: Crear un objeto de test, cambiando los valores default 
    #TODO: Por que o aparece en consola el registro de usuario antes del cargue de documentos
    #TODO: Crear alerta cuando se crea nuevo usuario
    #TODO: Colocar un warning al subir archivos que indique que el nombre de achivos no puede contener putnos, solo la extensión. aunque creo que esto ya es de por si un warning
*/


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Header from '../components/header';
import Footer from '../components/footer';
import "../styles/bodyInfo.css";

import { createAplicant } from '../api/aplicantes';
import { createDocuments } from '../api/documentos';
import { renameFile } from '../utilities/files';

const Register = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (user) => {
        createAplicant(user)
            .then((data) => {
                console.log("usuario creado: ", data);
            })
            .catch((err) => { console.log(err); });

        const formData = new FormData();
        formData.append("cedula", user.cedula);
        for (let key in user.files) {
            // console.log(key, renameFile(key, user.files[key][0]));
            formData.append(key, renameFile(key, user.files[key][0]));
        }
        createDocuments(formData)
            .then((data) => { console.log("Documentos subidos!", data); })
            .catch((err) => { console.log(err); });
    }

    const onError = (e) => {
        alert("Tiene errores en su registro. Reviselo!")
        console.log(e)
    }



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
                        <Form id="registrationForm" onSubmit={handleSubmit(onSubmit, onError)}>
                            <h3 className='mt-3'>Cree sus credenciales</h3>
                            <Row className='my-3'>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupId">
                                        <Form.Label>Identificación (cédula) sin puntos, comas. Solo número</Form.Label>
                                        <Form.Control type="number" placeholder="Ej: 1004718953" defaultValue="1234" {...register("cedula", { required: true })} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label>Correo electrónico</Form.Label>
                                        <Form.Control type="email" placeholder="Ej: miUser35@gmail.com" defaultValue="myuser@example.com" {...register("correo", { required: true, maxLength: 100 })} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" placeholder="Contraseña" defaultValue="someDifficultPassword" {...register("contrasena", { required: true, maxLenght: 50 })} />
                                    </Form.Group>
                                    {errors.contrasena && <p>Introduzca una contraseña menor a 50 caracteres</p>}
                                </Col>
                            </Row>
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
                                </Col>
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
                            </Row>
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
                            <h3 className='mt-3'>Información academica</h3>
                            <Row>
                                <Form.Group as={Col} controlId="formGroupUserEscolarity">
                                    <Form.Label>Nivel de escolaridad actual</Form.Label>
                                    <Form.Select aria-label="Default select example" defaultValue="PROFESIONAL" {...register("escolaridad", { required: true })}>
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
                                        <option value="BAJA">BAJA</option>
                                        <option value="MEDIA">MEDIA</option>
                                        <option value="ALTA">ALTA</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="UserEnglishSecondLangWritingWriting">
                                    <Form.Label>Nivel de writing</Form.Label>
                                    <Form.Select aria-label="Default select example" defaultValue="BAJA" {...register("writing")}>
                                        <option>Seleccionar</option>
                                        <option value="BAJA">BAJA</option>
                                        <option value="MEDIA">MEDIA</option>
                                        <option value="ALTA">ALTA</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="UserEnglishSecondLangWritingListening">
                                    <Form.Label>Nivel de listening</Form.Label>
                                    <Form.Select aria-label="Default select example" defaultValue="BAJA" {...register("listening")}>
                                        <option>Seleccionar</option>
                                        <option value="BAJA">BAJA</option>
                                        <option value="MEDIA">MEDIA</option>
                                        <option value="ALTA">ALTA</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <h3 className='mt-3'>Información de aplicación</h3>
                            <Row className='my-3'>
                                <Form.Group as={Col} controlId="formGroupUserWorkExerience">
                                    <Form.Label>Experiencia verificable en años</Form.Label>
                                    <Form.Control type="text" placeholder="Años" defaultValue="1" {...register("experienciaLaboral", { required: true })} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGroupUserMovilizationCapacity">
                                    <Form.Label>Estaría dispuesto a trasladarse</Form.Label>
                                    <Form.Select aria-label="Default select example" defaultValue="False" {...register("dispuestoTraslado", { required: true })}>
                                        <option>Seleccionar</option>
                                        <option value="True">Si</option>
                                        <option value="False">No</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGroupUserExtraHourCapacity">
                                    <Form.Label>Estaría dispuesto a trabajar horas extras en cualquier horario?</Form.Label>
                                    <Form.Select aria-label="Default select example" defaultValue="False" {...register("trabajarHorasExtra", { required: true })}>
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
                                        <Form.Control type="file" size="sm" {...register("files.CEDULA", { required: true })} />
                                    </Form.Group>
                                    <Form.Group controlId="formFileLibretaMilitar" className="mb-3">
                                        <Form.Label>Libreta militar</Form.Label>
                                        <Form.Control type="file" size="sm" {...register("files.LIBRETA_MILITAR", { required: true })} />
                                    </Form.Group>
                                    <Form.Group controlId="formFileHojaDeVida" className="mb-3">
                                        <Form.Label>Hoja de vida</Form.Label>
                                        <Form.Control type="file" size="sm" {...register("files.HOJA_DE_VIDA", { required: true })} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formFileCertifications" className="mb-3">
                                        <Form.Label>Certificados de educación </Form.Label>
                                        <Form.Control type="file" size="sm" {...register("files.CERTIFICADOS_EDUCACION", { required: true })} />
                                    </Form.Group>
                                    <Form.Group controlId="formFileExperienciaLaboral" className="mb-3">
                                        <Form.Label>Cartas de experiencia laboral </Form.Label>
                                        <Form.Control type="file" size="sm" {...register("files.CARTAS_EXPERIENCIA_LABORAL", { required: true })} />
                                    </Form.Group>
                                    <Form.Group controlId="formFileEps" className="mb-3">
                                        <Form.Label>Certificado de EPS</Form.Label>
                                        <Form.Control type="file" size="sm" {...register("files.CERTIFICADO_EPS", { required: true })} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formFilePension" className="mb-3">
                                        <Form.Label>Certificado de pensión</Form.Label>
                                        <Form.Control type="file" size="sm" {...register("files.CERTIFICADO_PENSION", { required: true })} />
                                    </Form.Group>
                                    <Form.Group controlId="formFileBeneficios" className="mb-3">
                                        <Form.Label>Beneficios</Form.Label>
                                        <Form.Control type="file" size="sm"  {...register("files.BENEFICIOS", { required: true })} />
                                    </Form.Group>
                                    <Form.Group controlId="formFileOthers" className="mb-3">
                                        <Form.Label>Otros</Form.Label>
                                        <Form.Control type="file" size="sm" multiple {...register("files.OTROS", { required: true })} />
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