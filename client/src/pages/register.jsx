import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

import Header from '../components/header';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';

import "../styles/bodyInfo.css";



async function submit(data) {
    console.log(data.get('files'))
    await fetch("http://localhost:3001/user/auth/register", {
        "method": "POST",
        "body": data,
        "Content-Type": "multipart/form-data"
    }).then(() => console.log("User has been recorded succesfully!"))
        .catch((err) => ("Error occured", err));

};

const Register = () => {

    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        const formData = new FormData();
        // Credentials and Personal Info
        formData.append("identification", form.formGroupId.value);
        formData.append("name", form.formGroupUserName.value);
        formData.append("lastName", form.formGroupUserLastname.value);
        formData.append("userName", form.formGroupUserAccountName.value);
        formData.append("email", form.formGroupEmail.value);
        formData.append("password", form.formGroupPassword.value);
        formData.append("phoneNumber", form.formGroupUserPhone.value);
        formData.append("telephone", form.formGroupUserTelephone.value);
        // Location    
        formData.append("country", form.formGroupCountry.value);
        formData.append("state", form.formGroupState.value);
        formData.append("city", form.formGroupCity.value);
        // Academics
        formData.append("escolarity", form.formGroupUserEscolarity.value);
        formData.append("title", form.formGroupUserProfessionalTitle.value);
        formData.append("certifications", form.formGroupUserCertifications.value);
        formData.append("englishSecondLang", form.formGroupUserEnglishSecondLang.value);
        formData.append("speaking", form.formGroupUserEnglishSecondLangSpeaking.value);
        formData.append("writingListening", form.UserEnglishSecondLangWritingListening.value);

        // Application
        formData.append("workingExperience", form.formGroupUserWorkExerience.value);
        formData.append("ableToTransfer", form.formGroupUserMovilizationCapacity.value);
        formData.append("ableToWorkExtraHours", form.formGroupUserExtraHourCapacity.value);
        // files 
        formData.append("files", form.formFileIdentification.files[0], "identification");
        formData.append("files", form.formFileEducationCertificates.files[0], "eduactionCertificates");
        formData.append("files", form.formFilePension.files[0], "pension");
        formData.append("files", form.formFileMilitarCard.files[0], "militarCard");
        formData.append("files", form.formFileWorkExperienceLetters.files[0], "workExperienceLetters");
        formData.append("files", form.formFileUserPenalBackground.files[0], "penalBackground");
        formData.append("files", form.formFileResume.files[0], "resume");
        formData.append("files", form.formFileHealthInsurance.files[0], "healthInsurance");

        const testObject = {
            "identification": "1004718953",
            "name": "Miguel",
            "lastName": "Lopez",
            "userName": "miguellopez25",
            "email": "miguel.lopez@utp.edu.co",
            "password": "miguel3612",
            "phoneNumber": "3218484132",
            "telephone": "0",
            "location": {
                "country": "Colombia",
                "state": "Risaralda",
                "city": "Pereira"
            },
            "academic": {
                "escolarity": "Bachiller",
                "title": "Cursando",
                "certifications": "Ninguna",
                "englishSecondLang": {
                    "handle": true,
                    "fluentness": {
                        "speaking": "3",
                        "writingListening": "3"
                    }
                }
            },
            "workingExperience": "0",
            "ableToTransfer": false,
            "ableToWorkExtraHours": true,
            "files": [
                { name: "identification", data: form.formFileIdentification.files },
                { name: "studyCertificates", data: form.formFileEducationCertificates.files },
                { name: "pension", data: form.formFilePension.files },
                { name: "militarCard", data: form.formFileMilitarCard.files },
                { name: "workingExperience", data: form.formFileWorkExperienceLetters.files },
                { name: "penalBackground", data: form.formFileUserPenalBackground.files },
                { name: "resume", data: form.formFileResume.files },
                { name: "healthInsurance", data: form.formFileHealthInsurance.files }
            ]
        }
        submit(formData);
        // navigate("/");
    }



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
                        <Form id="registrationForm" noValidate validated={validated} onSubmit={handleSubmit}>
                            <h3 className='mt-3'>Cree sus credenciales</h3>
                            <Row className='my-3'>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupId">
                                        <Form.Label>Identificación (cédula) sin puntos, comas. Solo número</Form.Label>
                                        <Form.Control type="number" placeholder="Ej: 1004718953" defaultValue="" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupUserAccountName">
                                        <Form.Label>Nombre de usuario</Form.Label>
                                        <Form.Control type="text" placeholder="Ej: miUser35" defaultValue="" required />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label>Correo electrónico</Form.Label>
                                        <Form.Control type="email" placeholder="Ej: miUser35@gmail.com" defaultValue="" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" placeholder="Contraseña" defaultValue="" required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <h3 className='mt-3'>Información personal</h3>
                            <Row className='my-3'>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupUserName">
                                        <Form.Label>Nombres</Form.Label>
                                        <Form.Control type="text" placeholder="Ej: Juan Esteban" defaultValue="" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupUserLastname">
                                        <Form.Label>Apellidos</Form.Label>
                                        <Form.Control type="text" placeholder="Ej: Aldana Solarte" defaultValue="" required />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupUserPhone">
                                        <Form.Label>Celular</Form.Label>
                                        <Form.Control type="number" placeholder="Ej: 3218484132" defaultValue="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupUserTelephone">
                                        <Form.Label>Telefono fijo (opcional)</Form.Label>
                                        <Form.Control type="number" placeholder="Ej: 3462047" defaultValue="" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <h3 className='mt-3'>Información de ubicación</h3>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupCountry">
                                        <Form.Label>País</Form.Label>
                                        <Form.Control type="text" placeholder="Ej: Colombia" defaultValue="" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupState">
                                        <Form.Label>Estado/Provincia</Form.Label>
                                        <Form.Control type="email" placeholder="Ej: Risaralda" defaultValue="" required />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formGroupCity">
                                        <Form.Label>Ciudad</Form.Label>
                                        <Form.Control type="text" placeholder="Ej: Pereira" defaultValue="" required />
                                    </Form.Group>
                                </Col>
                            </Row>
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
                                <Form.Select aria-label="Default select example" defaultValue="false">
                                    <option>Seleccionar</option>
                                    <option value="true">Si</option>
                                    <option value="false">No</option>
                                </Form.Select>
                            </Form.Group>
                            <Row className='my-4'>
                                <Form.Group as={Col} controlId="formGroupUserEnglishSecondLangSpeaking">
                                    <Form.Label>Nivel de speaking</Form.Label>
                                    <Form.Select aria-label="Default select example" defaultValue="low">
                                        <option>Seleccionar</option>
                                        <option value="low">Bajo</option>
                                        <option value="mid">Medio</option>
                                        <option value="fluent">Fluido</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="UserEnglishSecondLangWritingListening">
                                    <Form.Label>Nivel de writing/listening</Form.Label>
                                    <Form.Select aria-label="Default select example" defaultValue="low">
                                        <option>Seleccionar</option>
                                        <option value="low">Bajo</option>
                                        <option value="mid">Medio</option>
                                        <option value="fluent">Fluido</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <h3 className='mt-3'>Información de aplicación</h3>
                            <Row className='my-3'>
                                <Form.Group as={Col} controlId="formGroupUserWorkExerience">
                                    <Form.Label>Experiencia verificable en años</Form.Label>
                                    <Form.Select aria-label="Default select example" defaultValue="low" required>
                                        <option>Seleccionar</option>
                                        <option value="low">Bajo</option>
                                        <option value="mid">Medio</option>
                                        <option value="fluent">Fluido</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGroupUserMovilizationCapacity">
                                    <Form.Label>Estaría dispuesto a trsaladarse</Form.Label>
                                    <Form.Select aria-label="Default select example" defaultValue="false" required>
                                        <option>Seleccionar</option>
                                        <option value="true">Si</option>
                                        <option value="false">No</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGroupUserExtraHourCapacity">
                                    <Form.Label>Estaría dispuesto a trabajar horas extras en cualquier horario?</Form.Label>
                                    <Form.Select aria-label="Default select example" defaultValue="false" required>
                                        <option>Seleccionar</option>
                                        <option value="true">Si</option>
                                        <option value="false">No</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
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