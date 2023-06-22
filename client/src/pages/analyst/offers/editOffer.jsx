/**
 * #TODO: useState para bloquear checkbox (Si bloquea No y al contrario)
 */
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css';
import { updateOffer } from '../../../api/ofertas';

const EditOffer = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [value, onChange] = useState(new Date());

    const handleDate = (newDate) => {
        onChange(newDate)
        document.getElementById("formDayOfStartOffer").value = value.getFullYear().toString() + '-' + (value.getMonth() + 1).toString() + "-" + value.getDate().toString();
    }

    const onSubmit = (newOffer) => {
        newOffer.fechaInicio = document.getElementById("formDayOfStartOffer").value;
        console.log(newOffer)
        // createOffers(newOffer).then((data) => {
        //     console.log(data)
        // }).catch((err) => { console.log(err) });
    }

    return (
        <Modal show={props.show} onHide={props.close} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Edicion de ofertas</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Body>
                    <Row className='px-5'>
                        <Col>
                            {console.log(props.actionAndOffer)}
                            <Form.Group className="mb-3" controlId="formOfferName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" defaultValue={props.actionAndOffer.nombre} {...register("nombre", { required: true })} />
                                {errors.nombre && <span>Este campos es obligatorio</span>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formOfferDescription">
                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control type="textarea" rows={4} defaultValue={props.actionAndOffer.descripcion} {...register("descripcion", { required: true })} />
                                {errors.descripcion && <span>Este campo es obligatorio</span>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formOfferAvailableSeats">
                                <Form.Label>Vacantes</Form.Label>
                                <Form.Control type="text" defaultValue={props.actionAndOffer.vacantes} {...register("vacantes", { required: true })} />
                                {errors.vacantes && <span>Este campos es obligatorio</span>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formOfferSalary">
                                <Form.Label>Salario</Form.Label>
                                <Form.Control type="text" defaultValue={props.actionAndOffer.salario} {...register("salario", { required: true, maxLength: 10 })} />
                                {errors.salario && <span>Este campos es obligatorio</span>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formOfferExperience">
                                <Form.Label>Experiencia en años</Form.Label>
                                <Form.Control type="number" defaultValue={props.actionAndOffer.experienciaAnos} {...register("experienciaAnos", { required: true })} />
                                {errors.experienciaAnos && <span>Este campos es obligatorio</span>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formOfferState">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select aria-label="Default select example" defaultValue={props.actionAndOffer.estadoDisponibilidad} {...register("estadoDisponibilidad", { required: true })}>
                                    <option>Seleccionar</option>
                                    <option id="estadoDisponibilidadAbierto" value="ABIERTA">ABIERTA</option>
                                    <option id="estadoDisponibilidadCerrado" value="CERRADA">CERRADA</option>
                                </Form.Select>
                                {errors.estadoDisponibilidad && <span>Este campos es obligatorio</span>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12} className="px-4">
                            <div className="d-flex flex-row justify-content-around">
                                <div className='d-flex flex-col align-items-center'>
                                    <Form.Group className="mb-3" controlId="formDayOfStartOffer">
                                        <Form.Label>Fecha de inicio</Form.Label>
                                        <Form.Control type="text" defaultValue={props.actionAndOffer.fechaInicio} />
                                    </Form.Group>
                                </div>
                                <div>
                                    <Calendar value={value} onChange={handleDate} />
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.close}>
                        Cancelar
                    </Button>
                    <Button type="submit" variant="primary" >
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>

    );
}

export default EditOffer;