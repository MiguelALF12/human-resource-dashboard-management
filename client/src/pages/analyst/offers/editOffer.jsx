import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css';
import { partialUpdateOffer } from '../../../api/ofertas';

const EditOffer = (props) => {
    const { handleSubmit, formState: { errors } } = useForm();
    const [value, onChange] = useState(new Date());
    const [offerInputs, setOfferInputs] = useState({});
    useEffect(() => {
        let offerInputNodes = {};
        const inputs = [document.getElementById("nombre"),
        document.getElementById("descripcion"),
        document.getElementById("vacantes"),
        document.getElementById("salario"),
        document.getElementById("experienciaAnos"),
        document.getElementById("estadoDisponibilidad"),
        document.getElementById("fechaInicio"),
        document.getElementById("id")]
        inputs.forEach((input) => {
            if (input !== null) {
                input.value = props.clickedOffer[input.getAttribute("id")];
                offerInputNodes[input.getAttribute("id")] = input;
            }
        });
        setOfferInputs(offerInputNodes);
    }, [props.clickedOffer])

    const handleDate = (newDate) => {
        onChange(newDate)
        document.getElementById("fechaInicio").value = value.getFullYear().toString() + '-' + (value.getMonth() + 1).toString() + "-" + value.getDate().toString();
    }

    const onSubmit = () => {
        let newOffer = {};
        for (let offerProp in offerInputs) {
            // console.log(offerProp);
            newOffer[offerProp] = offerInputs[offerProp].value;
        }
        partialUpdateOffer(newOffer.id, newOffer).then((data) => {
            props.editedOffer(true);
        }).catch((err) => { console.log(err) });
        // #TODO: Como podemos cerrar el modal desde aquí una vez enviada la actualización? document.getElementById("updateOfferBtn").addEventListener("click", props.close)
        alert("Actualización realizada correctamente!");


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
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" defaultValue={props.clickedOffer.nombre} id="nombre" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control type="textarea" rows={4} defaultValue={props.clickedOffer.descripcion} id="descripcion" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Vacantes</Form.Label>
                                <Form.Control type="text" defaultValue={props.clickedOffer.vacantes} id="vacantes" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Salario</Form.Label>
                                <Form.Control type="text" defaultValue={props.clickedOffer.salario} id="salario" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Experiencia en años</Form.Label>
                                <Form.Control type="number" defaultValue={props.clickedOffer.experienciaAnos} id="experienciaAnos" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select aria-label="Default select example" defaultValue={props.clickedOffer.estadoDisponibilidad} id="estadoDisponibilidad">
                                    <option>Seleccionar</option>
                                    <option id="estadoDisponibilidadAbierto" value="ABIERTA">ABIERTA</option>
                                    <option id="estadoDisponibilidadCerrado" value="CERRADA">CERRADA</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12} className="px-4">
                            <div className="d-flex flex-row justify-content-around">
                                <div className='d-flex flex-column justify-content-center'>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Fecha de inicio</Form.Label>
                                        <Form.Control type="text" defaultValue={props.clickedOffer.fechaInicio} id="fechaInicio" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Identificador</Form.Label>
                                        <Form.Control type="number" readOnly defaultValue={props.clickedOffer.id} id="id" />
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
                    <Button type="submit" variant="primary" id="updateOfferBtn">
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>

    );
}

export default EditOffer;