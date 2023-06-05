import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FilterOffers = (props) => {

    return (<>
        <h2 className="text-center py-4"> Ofertas de trabajo activas</h2>
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
                        <option>Default select</option>
                        <option value="Nombre">Nombre</option>
                        <option value="Salario">Salario</option>
                        <option value="Experiencia">Experiencia</option>
                        <option value="Vacantes">Vacantes</option>
                    </Form.Select>
                </Col>
            </Row>

        </InputGroup>
    </>)
};

export default FilterOffers;