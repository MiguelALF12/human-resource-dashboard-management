import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FilterActivities = (props) => {

    return (<>
        <p className="py-4"> Ingrese cualquier palabra y luego seleccione una categoría de filtrado.</p>
        <InputGroup className="my-3">
            <Row className="w-100">
                <Col md={8} lg={8}>
                    <Form.Control
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                </Col>
                <Col md={4} lg={4}>
                    <Form.Select>
                        <option>Seleccione</option>
                        <option value="id">Id</option>
                        <option value="nombre">Nombre</option>
                        <option value="descripcion">Descripcion</option>
                        <option value="estado">Estado</option>
                        <option value="vacantes">Vacantes</option>
                        <option value="fechaInicio">Fecha de inicio</option>
                        <option value="salario">Salario</option>
                        <option value="experiencia">Experiencia</option>
                        <option value="acciones">Acciones</option>

                    </Form.Select>
                </Col>
            </Row>

        </InputGroup>
        <div className="text-center">
            <Button> Aplicar filtro </Button>
        </div>

    </>)
};

export default FilterActivities;