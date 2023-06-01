/**
 * #TODO: useState para bloquear checkbox (Si bloquea No y al contrario)
 */
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css';

const MedicalAppointment = (props) => {
    const { register, handleSubmit } = useForm();
    const [value, onChange] = useState(new Date());
    const handleDate = (newDate) => {
        onChange(newDate)
        document.getElementById("formDayOfMedicalAppointment").value = value.getDate().toString()
        document.getElementById("formMonthYearOfMedicalAppointment").value = (value.getMonth() + 1).toString() + "-" + value.getFullYear().toString();
    }
    const handleEmail = () => {
        let sendEmailBtn = document.getElementById("sendEmail");
        let emailMsg = {
            subject: `AGENDAMIENTO CITA MÉDICA - PUESTO: ${props.aplicant[2].nombre}`,
            body: `Usted tiene cita médica en el centro NUEVA EPS - DIRECCIÓN: Av. 30 De Agosto # 35-08, Pereira, Risaralda 660002. \n La fecha de su cita es: \n\t ${value.getDate().toString()}-${(value.getMonth() + 1).toString()}-${value.getFullYear().toString()} `
        };
        console.log(sendEmailBtn)
        sendEmailBtn.addEventListener("click", props.close);
        sendEmailBtn.addEventListener("click", window.open(`mailto:${props.aplicant[1]}?subject=${emailMsg.subject}&body=${emailMsg.body}`))

    }

    return (
        <>
            <Modal show={props.show} onHide={props.close} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Preselección del candidato</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <Row>
                            <Col xs={12} md={12} lg={12} className="px-4">
                                <p>El candidato pasa al siguiente procesos?:</p>
                                <div className="d-flex flex-column px-3">
                                    <Form.Check type={'checkbox'} id="isAplicantSelected" label="Si" />
                                    <Form.Check type={'checkbox'} id="isAplicantSelected" label="No" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12} lg={12} className="px-4">
                                <p>Escoga una fecha de entrevista: </p>
                                <div className="d-flex flex-row justify-content-around px-3 pb-4">
                                    <div>
                                        <Form.Group className="mb-3" controlId="formDayOfMedicalAppointment">
                                            <Form.Label>Día</Form.Label>
                                            <Form.Control type="text" readOnly />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formMonthYearOfMedicalAppointment">
                                            <Form.Label>Mes-año</Form.Label>
                                            <Form.Control type="text" readOnly />
                                        </Form.Group>
                                    </div>
                                    <div>
                                        <Calendar value={value} onChange={handleDate} />
                                    </div>
                                </div>
                                <Form.Group controlId="formDiaOfMedicalAppointment">
                                    <Form.Label>Correo al cual se enviará la información: </Form.Label>
                                    <Form.Control type="email" defaultValue={props.aplicant[1]} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.close}>
                            Cancelar
                        </Button>
                        <Button id="sendEmail" variant="primary" onClick={handleEmail}>
                            Aceptar
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default MedicalAppointment;