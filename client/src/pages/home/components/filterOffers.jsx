import React from "react";
import { useForm } from 'react-hook-form'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { filterRecords } from "../../../utilities/components";

const FilterOffers = (props) => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (searchQuery) => {
        const offerFromSearch = filterRecords(props.offers, searchQuery)
        props.offersFromQuery(offerFromSearch)
    }

    return (<>
        <h2 className="text-center mt-3"> Ofertas de trabajo activas</h2>
        <InputGroup className="my-3">
            <Form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                <Row className="mb-3">
                    <Col className="px-4 my-1" xs={12} md={6} lg={6}>
                        <Form.Control placeholder="Caracteristica de filtrado" defaultValue="" {...register("pattern")} />
                    </Col>
                    <Col className="px-4 my-1" xs={8} md={4} lg={4}>
                        <Form.Select {...register("parameter")}>
                            <option>Seleccione</option>
                            s 2 my-1 <option value="nombre">Nombre</option>
                            <option value="salario">Salario</option>
                            <option value="experiencia">Experiencia</option>
                            <option value="vacantes">Vacantes</option>
                        </Form.Select>
                    </Col>
                    <Col className="d-flex px-4 my-1" xs={4} md={2} lg={2}>
                        <Button type="submit"> Buscar </Button>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Form>

        </InputGroup >
    </>)
};

export default FilterOffers;