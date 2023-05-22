import React from "react";
import { useForm } from "react-hook-form";

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const DeleteAccount = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return <Row className="formConfigContainer">
        <Col className="">
            <Form>
                <h3 className='mt-3'>Eliminar cuenta</h3>
                <p>Usted está a punto de eliminar su cuenta, si se encuentra seguro, presione el boton: </p>
                <Button type="submit">Eliminar cuenta</Button>
            </Form>
        </Col>
    </Row>
};

export default DeleteAccount;