import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Header from '../components/header';
import Footer from '../components/footer';
import { useNavigate, Link } from 'react-router-dom';

import "../styles/bodyInfo.css";

const Credentials = () => {

    return (<>
        <h3 className='mt-3'>Cree sus credenciales</h3>
        <Row className='my-3'>
            <Col>
                <Form.Group className="mb-3" controlId="formGroupId">
                    <Form.Label>Identificación (cédula) sin puntos, comas. Solo número</Form.Label>
                    <Form.Control type="text" placeholder="Ej: 1004718953" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupUserName">
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type="text" placeholder="Ej: miUser35" />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Ej: miUser35@gmail.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>
            </Col>
        </Row>
    </>
    );
}

const PersonalInfo = () => {
    return (
        <>
            <h3 className='mt-3'>Información personal</h3>
            <Row className='my-3'>
                <Col>
                    <Form.Group className="mb-3" controlId="formGroupIdConfirmation">
                        <Form.Label>Confirmación de identificación</Form.Label>
                        <Form.Control type="text" placeholder="Ej: 1004718953" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmailConfirmation">
                        <Form.Label>Nombres</Form.Label>
                        <Form.Control type="email" placeholder="Ej: miUser35@gmail.com" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formGroupUserName">
                        <Form.Label>Nombres</Form.Label>
                        <Form.Control type="text" placeholder="Ej: Juan Esteban" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupUserLastname">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" placeholder="Ej: Aldana Solarte" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formGroupUserPhone">
                        <Form.Label>Celular</Form.Label>
                        <Form.Control type="number" placeholder="Ej: 3218484132" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupUserTelephone">
                        <Form.Label>Telefono fijo (opcional)</Form.Label>
                        <Form.Control type="number" placeholder="Ej: 3462047" />
                    </Form.Group>
                </Col>
            </Row>
        </>
    );

};

const Location = () => {
    return (<>
        <h3 className='mt-3'>Información de ubicación</h3>
        <Row>
            <Col>
                <Form.Group className="mb-3" controlId="formGroupCountry">
                    <Form.Label>País</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Colombia" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupState">
                    <Form.Label>Estado/Provincia</Form.Label>
                    <Form.Control type="email" placeholder="Ej: Risaralda" />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group className="mb-3" controlId="formGroupCity">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Pereira" />
                </Form.Group>
            </Col>
        </Row>
    </>)
};

const Academics = () => {
    return (
        <>
            <h3 className='mt-3'>Información academica</h3>
            <Row>
                <Form.Group as={Col} controlId="formGroupUserEscolarity">
                    <Form.Label>Nivel de escolaridad actual</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="formGroupUserProfessionalTitle">
                    <Form.Label>Titulo que posee</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Ingeniero de Sistemas y computación" />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGroupUserCertifications">
                <Form.Label>Certificaciones</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Ej: Bootcamp de programación, AWS Cloud Essentials

 Etc."/>
            </Form.Group>
            <Form.Group controlId="formGroupUserEnglishSecondLang">
                <Form.Label >Maneja el idioma ingles</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form.Group>
            <Row className='my-4'>
                <Form.Group as={Col}>
                    <Form.Label>Nivel de speaking</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Nivel de writing/listening</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
            </Row>
        </>
    )
};

const AplicationInfo = () => {
    return (
        <>
            <h3 className='mt-3'>Cree sus credenciales</h3>
            <Row className='my-3'>
                <Form.Group as={Col} controlId="formGroupUserWorkExerience">
                    <Form.Label>Experiencia verificable en años</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGroupUserMovilizationDispossal">
                    <Form.Label>Estaría dispuesto a trsaladarse</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGroupUserExtraHourDispossal">
                    <Form.Label>Estaría dispuesto a trabajar horas extras en cualquier horario?</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
            </Row>

        </>
    )
};

const Files = () => {
    return (
        <>
            <Row>
                <Col>
                    <Form.Group controlId="formFileIdentification" className="mb-3">
                        <Form.Label>Cedula ampliada al 150% </Form.Label>
                        <Form.Control type="file" size="sm" />
                    </Form.Group>
                    <Form.Group controlId="formFileEducationCertificates" className="mb-3">
                        <Form.Label>Certificados de estudio</Form.Label>
                        <Form.Control type="file" size="sm" />
                    </Form.Group>
                    <Form.Group controlId="formFilePension" className="mb-3">
                        <Form.Label>Certificado de pensión</Form.Label>
                        <Form.Control type="file" size="sm" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formFileMilitarCard" className="mb-3">
                        <Form.Label>Libreta militar </Form.Label>
                        <Form.Control type="file" size="sm" />
                    </Form.Group>
                    <Form.Group controlId="formFileWorkExperienceLetters" className="mb-3">
                        <Form.Label>Cartas de experiencia laboral </Form.Label>
                        <Form.Control type="file" size="sm" />
                    </Form.Group>
                    <Form.Group controlId="formFileUserPenalBackground" className="mb-3">
                        <Form.Label>Certificado de antecedentes penales</Form.Label>
                        <Form.Control type="file" size="sm" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formFileResume" className="mb-3">
                        <Form.Label>Hoja de vida</Form.Label>
                        <Form.Control type="file" size="sm" />
                    </Form.Group>
                    <Form.Group controlId="formFileHealthInsurance" className="mb-3">
                        <Form.Label>Cdrtificado de EPS</Form.Label>
                        <Form.Control type="file" size="sm" />
                    </Form.Group>
                </Col>
            </Row>
        </>
    )

};






const Register = () => {
    // # TODO: Add formik for Form validation
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <Row id="bodyInfoContainer" className='m-4'>
                <Col className='ps-5' xs={12} md={2}><Button onClick={() => {
                    navigate(-1);
                }}>Regresar</Button></Col>
                <Col xs={12} md={10}>
                    <h2 className='text-center'>Formulario de <bold>Registro</bold></h2>
                    <div className='mx-auto w-75'>
                        {/* Need to ad border to separate each part with id="formSection" */}
                        <Form>
                            <Credentials />
                            <PersonalInfo />
                            <Location />
                            <Academics />
                            <AplicationInfo />
                            <Files />
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