import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { deleteActivity } from "../../../../api/actividades";

const DeleteActivity = (props) => {
    const onSubmit = () => {
        deleteActivity(props.clickedActivity.id).then((data) => {
            props.editedDeletedActivity();
            alert("Eliminación realizada correctamente!");
        }).catch((err) => { console.log(err) });

    };
    console.log(props);
    return (<>
        {(() => {
            if (typeof props.clickedActivity !== "undefined") {
                return (<Modal show={props.show} onHide={props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Eliminar Oferta <mark>{props.clickedActivity.id}-{props.clickedActivity.nombre}</mark></Modal.Title>
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

export default DeleteActivity;