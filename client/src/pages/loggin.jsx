import { Link, useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Img from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../styles/loggin.css'

const Loggin = () => {
    const navigate = useNavigate();
    return (
        <div id="logginAreaDiv">
            <Row className="mt-5 shadow" id="logginArea">
                <Col xs={12} md={6} className="bg-primary">
                    {/* <Img src="..." class="rounded placeholder col-12" alt="..." fluid /> */}
                </Col>
                <Col xs={12} md={6} className="bg-white">

                    <h2 class="fw-bold text-center pt-5 pb-3">Bienvenido al portal</h2>
                    <p class="mb-3">Inicie sesió con su correo electronico o credenciales</p>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electrónico/Identificación</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" onClick={() => {
                            navigate(-1);
                        }}>
                            Cancelar
                        </Button>
                        {/* Its here where we need to make validation of user identity */}
                        <Link to="/admin/000/home">Iniciar</Link>
                    </Form>
                </Col>
            </Row>
        </div>

    )
};
export default Loggin;