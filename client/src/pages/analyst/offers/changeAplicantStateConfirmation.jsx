import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { updateSeleccionadoState } from "../../../api/seleccionados";

const ChangeAplicantStateConfirmation = (props) => {
    const navigate = useNavigate();
    const refreshPage = () => {
        navigate(0);
    }
    // console.log(props.seleccionId);
    const { handleSubmit } = useForm();
    const onSubmit = () => {
        updateSeleccionadoState(props.seleccionId, { faseAplicante: "PRE_CONTRATACION" })
            .then((data) => {
                console.log(`El selecciónado ${data.id} esta ${data.faseAplicante}`)
            }).catch((err) => {
                console.log(err);
            });
        refreshPage();
    }
    return (<Modal show={props.show} onHide={props.close} size="md">
        <Modal.Header closeButton>
            <Modal.Title>Cambiar a estado PRE-CONTRATO</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Modal.Body>
                <p>
                    Usted está indicando que el aplicante de la selección #{props.seleccionId} será contratado una vez este
                    haya firmado,de manera física, el contrato propuesto.
                </p>
                <span><strong>Esta seguro de realizar esta acción?</strong></span>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.close}>
                    Cancelar
                </Button>
                <Button id="sendEmail" type="submit" variant="primary" onClick={props.close}>
                    Aceptar
                </Button>
            </Modal.Footer>
        </Form>
    </Modal>)
};

export default ChangeAplicantStateConfirmation;