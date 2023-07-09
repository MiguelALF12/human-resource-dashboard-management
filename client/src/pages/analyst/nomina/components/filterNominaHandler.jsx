import React from "react";
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { filterRecords } from "../../../../utilities/components";

const FilterNominaHandler = (props) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (searchQuery) => {
        const employeesFromSearch = filterRecords(props.employees, searchQuery);
        console.log(employeesFromSearch);
        props.employeesFromQuery(employeesFromSearch);

    }

    return (<>
        <p className="py-4"> Ingrese cualquier palabra y luego seleccione una categoría de filtrado.</p>
        <InputGroup>
            <Form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                <Row className="mb-3">
                    <Col md={8} lg={8}>
                        <Form.Control placeholder="Caracteristica de filtrado" defaultValue="" {...register("pattern")} />
                    </Col>
                    <Col md={4} lg={4}>
                        <Form.Select {...register("parameter")}>
                            <option>Seleccione</option>
                            <option value="nombreEmpleado">Nombre</option>
                            <option value="apellidoEmpleado">Apellido</option>
                            <option value="cedula">Cedula</option>
                            <option value="cargoEmpleado">Cargo</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type="submit"> Buscar </Button>
                    </Col>
                </Row>
            </Form>
        </InputGroup>

    </>)
};

export default FilterNominaHandler;