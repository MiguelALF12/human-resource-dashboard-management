/*
 * #TODO: HAcer fecth con endpoint de DocumentosEmpleados, en el apartado de otros. 
 */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { renameFile } from "../../../../utilities/files";

const Ass = (props) => {
    const { register, handleSubmit } = useForm();
    let emailMsg = {
        subject: "Afiliaci%C3%B3n%20a%20COOMEVA-%20SANITAS-%20NUEVA%20EPS",
        body: `Muy%20buen%20d%C3%ADa%20Luz%20Polonia%2C%0D%0A%0D%0ARelaciono%20entonces%20los%20siguientes%20datos%3A%0D%0A%0D%0ADatos%20de%20nueva%20empleada%20para%20afiliaci%C3%B3n%20a%20Eps%20Coomeva%3A%0D%0A
        %20%20%20%20-Nombre%3A${props.aplicant.nombre}%0D%0A
        %20%20%20%20-%20C%C3%A9dula%3A${props.aplicant.cedula}%0D%0A
        %20%20%20%20-%20Direcci%C3%B3n%3A${props.aplicant.direccion}%0D%0A
        %20%20%20%20-%20Fecha%20de%20ingreso%3A${props.aplicant.fechaInicioOferta}%0D%0A
        %20%20%20%20-%20Cargo%3A%${props.aplicant.nombreOferta}0D%0A
        %20%20%20%20-%20Salario%3A%0D%0A
        %20%20%20%20-%20Arl%3A%20Colpatria%0D%0A
        %20%20%20%20-%20Fondo%20de%20Pensiones%3A%20Porvenir%0D%0A
        %20%20%20%20%20%20%20%20%0D%0ADatos%20empresa%3A%0D%0A%20%20%20%20-%20Raz%C3%B3n%20social%3A%20Localizamos%20TSA%20S.A.S.%0D%0A%20%20%20%20-%20Nit%3A%20900.619.003-5%0D%0A%20%20%20%20-%20Direcci%C3%B3n%3A%20Calle%201%20No.%2012%20-%2018%20Barrio%20Popular%20Modelo%0D%0A%20%20%20%20-%20Tel%C3%A9fono%3A%203444050%0D%0A%0D%0AMil%20gracias%20por%20su%20colaboraci%C3%B3n%20y%20quedamos%20atentos%20a%20sus%20comentarios.`
    };

    const onSubmit = (socialSecurityFiles) => {
        // All this will be sent once we have the contract info ready,
        const formData = new FormData();
        formData.append("cedula", props.aplicant.cedula);
        formData.append("id", props.aplicant.id);
        for (let key in socialSecurityFiles.files) {
            // console.log(key, renameFile(key, socialSecurityFiles.files[key][0]));
            formData.append(key, renameFile(key, socialSecurityFiles.files[key][0]));
        }
        props.files(formData);
        alert("Puede continuar a la fase de contratación!");
    }

    return (
        <Row className="py-5 ps-2">
            <Col className="scrollableAssArea">
                <h1>AFILIACIÓN A SEGURIDAD A SOCIAL.</h1>
                <span>Este proceso debe considerar lo siguiente:</span>
                <ul>
                    <li>
                        Debe realizarse mínimo un día antes del ingreso de un colaborador.
                    </li>
                    <li>
                        Se debe de hacer afiliación a los servicios de ARL (Aseguradora de riesgos laborales),
                        Caja de compensación familiar y EPS (Entidad Prestadora de Salud).
                    </li>
                    <li>
                        Para toda aplicación de un colaborador se necesita:
                        <ul>
                            <li>
                                Documento de identidad
                            </li>
                            <li>
                                Nombre completo
                            </li>
                            <li>
                                Cargo
                            </li>
                            <li>
                                Salario
                            </li>
                        </ul>
                        En caso de que dicha <strong>información no se despliegue en pantalla</strong>, notificar inmediatamente al equipo técnico.
                    </li>
                </ul>
                <hr className="border border-2 opacity-50" />
                <span>
                    El usuario al cual se le asignará sus respectivas afiliaciones sociales es:
                </span>
                <br />
                <br />
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <div><strong>Documento de identidad:</strong> {props.aplicant.cedula}</div>
                        <div><strong>Nombre completo:</strong> {props.aplicant.nombre}</div>
                        <div><strong>Cargo:</strong> {props.aplicant.nombreOferta}</div>
                        <div><strong>Salario:</strong> {props.aplicant.salarioOferta}</div>
                    </div>
                </div>
                <h2>1. Afiliación en ARL (Aseguradora de Riesgos Laborales)</h2>
                <span>Se debe ingresar al siguiente link: <a href="www.axacolpatria.co">axacolpatria.co</a><br /></span>
                <span><strong>Usuario:</strong> LOCALIZA.SAS</span><br />
                <span><strong>Contraseña:</strong></span><br /><br />
                <p>Una vez allí, mediante la opción de <strong>ingreso</strong> de empleados usted deberá diligenciar los campos requeridos según los datos suministrados.<br />
                    IMPORTANTE: En los campos requeridos se utilizarán los código <code>001-administradtivos</code> y <code>004-comerciales y técnico</code>.<br />
                    Una vez finalizado el resgitro, debe descargar el comprobante de afiliación. Este lo necesitará mas adelante para anexarlo a los documentos del colaborador.
                </p>
                <h2>2. Afiliación en Caja de Compensación Familiar</h2>
                <span>Se tienen dos opciones de caja de compensación:</span><br />
                <ul style={{ textIndent: "10px" }}>
                    <li>Confamiliar</li>
                    <li>Cajasan</li>
                </ul>
                <span>El proceso para cada una de ellas es diferente: </span><br /><br />

                <h3 style={{ textIndent: "20px" }}>a. Confamiliar</h3>
                <span>Se debe ingresar al siguiente link: <a href=" www.comfamiliar.com">confamiliar.com</a><br /></span>
                <span><strong>Usuario:</strong> 900619003</span><br />
                <span><strong>Contraseña:</strong></span><br /><br />
                <span>
                    Ingresando a travez de <strong>Servicios en línea</strong> - <strong>Afiliación de trabajadores</strong>, usted deberá registrar:</span>
                <ul style={{ textIndent: "30px" }}>
                    <li>Afiliaciones y retiros</li>
                    <li>Afiliación de trabajadores y beneficiarios</li>
                    <li>Iniciar el proceso de afiliación</li>
                    <li>Ingresar todos los datos del colaborador y de los beneficiarios si aplica</li>
                    <li>Tener cedula escaneada de colaborador (En caso de los beneficiarios: Si es esposa o pareja certificado de matrimonio o extra juicio, si es hijo registro civil, tarjeta de identidad y certificado de estudio a mayores de 11 años)</li>
                    <li>Terminar proceso de afiliación</li>
                </ul>
                <p>
                    IMPORTANTE:  Una vez finalizado el resgitro, debe descargar el comprobante de afiliación. Este lo necesitará mas adelante para anexarlo a los documentos del colaborador.
                    Para obtenerlo dirigase a <strong>Afiliaciones y retiros</strong> - <strong>Constancia de afiliación a trabajadores</strong>
                </p>

                <h3 style={{ textIndent: "20px" }}>b. Cajasan</h3>
                <span>Se debe ingresar al siguiente link: <a href="www.cajasan.com">cajasan.com</a><br /> </span>
                <span><strong>Usuario:</strong> NI900619003</span><br />
                <span><strong>Contraseña:</strong></span><br /><br />
                <span>
                    Ingresando a traves de <strong>Empresas</strong> - <strong>En linea empresas</strong> - <strong>Afiliación de un trabajador</strong> e iniciando sesión, usted deberá:<br /></span>
                <ul style={{ textIndent: "30px" }}>
                    <li>Ingresar todos los datos del colaborador y los beneficios (si aplica).</li>
                    <li>Tener cedula escaneada de colaborador (En caso de los beneficiarios: Si es esposa o pareja certificado de matrimonio o extra juicio, si es hijo registro civil, tarjeta de identidad y certificado de estudio a mayores de 11 años).</li>
                    <li>Terminar con el proceso de afiliación conforme lo que se le solicite en la página.</li>
                </ul>
                <span>IMPORTANTE:  Una vez finalizado el resgitro, debe descargar el comprobante de afiliación. Este lo necesitará mas adelante para anexarlo a los documentos del colaborador.</span>

                <h2>3. Afiliación en EPS (Entidad Prestadora de Salud)</h2>
                <span>Se tienen tres opciones de caja de compensación:</span>
                <br />
                <ul style={{ textIndent: "10px" }}>
                    <li>SOS</li>
                    <li>SURA</li>
                    <li>COOMEVA- SANITAS- NUEVA EPS</li>
                </ul>
                <span>El proceso para cada una de ellas es diferente: </span><br /><br />
                <h3 style={{ textIndent: "20px" }}>a. SOS</h3>
                <span>La afiliación se realiza con la asesora que va hasta la oficina.</span>
                <h3 style={{ textIndent: "20px" }}>b. SURA</h3>
                <span>Se debe ingresar al siguiente link: <a href="www.epssura.com">epssura.com</a><br /> </span>
                <span><strong>Usuario:</strong> 25180199</span><br />
                <span><strong>Contraseña:</strong></span><br /><br />
                <p>
                    Ingresando a traves de <strong>Empleadores</strong> -<strong>Servicios en línea</strong> - <strong>Autenticacion</strong> - <strong>Transacciones</strong> - <strong>Afiliados</strong> - <strong>Reingreso</strong> usted deberá diligenciar el formulario correspondiente.<br />
                    IMPORTANTE:  Una vez finalizado el resgitro, debe descargar el comprobante de afiliación. Este lo necesitará mas adelante para anexarlo a los documentos del colaborador.
                </p>
                <h3 style={{ textIndent: "20px" }}>c. COOMEVA-SANITAS-NUEVA EPS</h3>
                <p>
                    La afiliación se realizar a través del siguiente correo electrónico: <a href={`mailto:luzclopez@hotmail.com?subject=${emailMsg.subject}&body=${emailMsg.body}`}>luzclopez@hotmail.com</a>.<br />
                    Al hacer click en el correo, se le cargará en pantalla un borrador autogenerado para enviar a este correo, con los datos del aplicante seleccionado.
                    IMPORTANTE:  Una vez finalizado el resgitro, debe descargar el comprobante de afiliación. Este lo necesitará mas adelante para anexarlo a los documentos del colaborador.
                </p>
                <hr className="border border-2 opacity-50" />

                <span>    Una vez realizado el registro según el tipo de afiliación social, y obtenido el comprobante de afiliación, usted deberá subir dichos documentos en los campos que siguen a continuación: </span> <br />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="py-5">

                        <Col>
                            <Form.Group controlId="formFileCertifications" className="mb-3">
                                <Form.Label>Comprobante ARL<br /></Form.Label>
                                <Form.Control type="file" size="sm" {...register("files.ARL", { required: true })} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formFileCertifications" className="mb-3">
                                <Form.Label>Comprobante Caja de Compensación Familiar</Form.Label>
                                <Form.Control type="file" size="sm" {...register("files.CAJA_COMPENSACION", { required: true })} />
                            </Form.Group>
                        </Col>
                        <Col><Form.Group controlId="formFileCertifications" className="mb-3">
                            <Form.Label>Comprobante EPS<br /></Form.Label>
                            <Form.Control type="file" size="sm" {...register("files.EPS", { required: true })} />
                        </Form.Group>
                        </Col>
                        <Col xs={12} md={12} lg={12} className="d-flex justify-content-between">
                            <span>IMPORTANTE: Si no suministra los comprobantes no podrá continuar.</span>
                            <Button type="submit">Enviar</Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row >
    )
};

export default Ass;