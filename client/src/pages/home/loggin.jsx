import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AlertMessage from './components/alertMessage';
import { authenticateUser } from '../../api/aplicantes';

const Loggin = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [loginAlert, setLoginAlert] = useState([false, "", "", ""]);

    const handleLoginAlert = (show, id, variant, message) => setLoginAlert([show, id, variant, message]);
    const onSubmit = async (credentials) => {
        const res = await authenticateUser(credentials);
        if (res.status === 'authenticated') {
            handleLoginAlert(false, "", "", "");
            let redirection = `/${res.type}/${res.id}/${res.username}`;
            navigate(redirection, { replace: true });
        } else if (res.status === 'unauthenticated') {
            // alert("Usuario/contraseña incorrectos. Verifique!")
            handleLoginAlert(true, "Bad user", "danger", "Usario/Contraseña incorrectos. Reintente!");
        }
    }
    const onError = (e) => {
        handleLoginAlert(true, "No given information", "warning", "Ingrese usuario y contraseña.")
        console.log(e)
        // Al enviar el form con errores y mostrar e, se muestra el objeto de campos, con los campos que presentan error.
    }
    return (<div id="logginContainer">
        <AlertMessage show={loginAlert[0]} id={loginAlert[1]} variant={loginAlert[2]} message={loginAlert[3]} />
        <div id="logginAreaDiv">
            <Row className="mt-5 shadow" id="logginArea">
                <Col xs={12} md={6} className="bg-primary">

                </Col>
                <Col xs={12} md={6} className="bg-white">

                    <h2 className="fw-bold text-center pt-5 pb-3">Bienvenido al portal</h2>
                    <p className="mb-3">Inicie sesión con sus credenciales</p>

                    <Form onSubmit={handleSubmit(onSubmit, onError)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Cedula</Form.Label>
                            <Form.Control type="number" placeholder="Ej: 1004718953" {...register("cedula", { required: true })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" {...register("password", { required: true })} />
                        </Form.Group>

                        <Button variant="primary" onClick={() => {
                            navigate(-1);
                        }}>
                            Cancelar
                        </Button>
                        <Button type="submit">Ingresar</Button>
                        {/* Its here where we need to make validation of user identity */}
                        {/* <Link to="/admin/000/home">Iniciar</Link> */}
                    </Form>
                </Col>
            </Row>
        </div>
    </div>
    )
};
export default Loggin;