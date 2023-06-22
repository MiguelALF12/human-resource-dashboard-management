import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { filterOffers } from "../utilities/components";

const FilterOffers = (props) => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (searchQuery) => {
        const offerFromSearch = filterOffers(props.offers, searchQuery)
        console.log("offer from search: ", offerFromSearch)
        props.offersFromQuery(offerFromSearch)
    }

    return (<>
        <h2 className="text-center py-4"> Ofertas de trabajo activas</h2>
        <InputGroup className="my-3">
            <Form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                <Row className="mb-3">
                    <Col md={8} lg={8}>
                        <Form.Control placeholder="Caracteristica de filtrado" defaultValue="" {...register("pattern")} />
                    </Col>
                    <Col md={4} lg={4}>
                        <Form.Select {...register("parameter")}>
                            <option>Seleccione</option>
                            <option value="nombre">Nombre</option>
                            <option value="salario">Salario</option>
                            <option value="experiencia">Experiencia</option>
                            <option value="vacantes">Vacantes</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type="submit"> Buscar </Button>
                    </Col>
                </Row>
            </Form>

        </InputGroup >
    </>)
};

export default FilterOffers;