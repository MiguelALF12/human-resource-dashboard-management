import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { deleteOffer } from "../../../api/ofertas";
import { nullOfferObj } from '../../../utilities/components';

const DeleteOffer = (props) => {
    const onSubmit = () => {
        deleteOffer(props.clickedOffer.id).then((data) => {
            props.editedDeletedOffer();
        }).catch((err) => { console.log(err) });
        alert("Eliminación realizada correctamente!");

    };
    return (<>
        {(() => {
            if (typeof props.clickedOffer != "undefined") {
                return (<Modal show={props.show} onHide={props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Eliminar Oferta <mark>{props.clickedOffer.id}-{props.clickedOffer.nombre}</mark></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>ATENCIÓN!, estas a punto de eliminar una oferta registrada. Estas seguro de realizar esta acción?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.close}>
                            Cancelar
                        </Button>
                        <Button variant="danger" onClick={() => {
                            props.close();
                            onSubmit()
                        }}>
                            Eliminar
                        </Button>
                    </Modal.Footer>
                </Modal>)
            }
        })()}
    </>);
}

export default DeleteOffer;