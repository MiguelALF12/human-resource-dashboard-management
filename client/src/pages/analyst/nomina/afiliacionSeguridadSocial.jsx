import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
const AfiliacioinSeguridadSocial = () => {
    return (<Row className="p-4">
        <Col id="conceptosAfiliaciónSeguridadSocial" md={3} lg={3}>
            <Button id="ARLtitle" ><h5>ADMINISTRADORA DE RIESGOS LABORALES</h5></Button>
            <Button id="cajaCompensaciontitle" ><h5>CAJA DE COMPENSACIÓN FAMILIAR</h5></Button>
            <Button id="EPStitle" ><h5>ENTIDAD PROMOTORA DE SALUD</h5></Button>
        </Col>
        <Col md={9} lg={9}>Explanation</Col>
    </Row>)
};

export default AfiliacioinSeguridadSocial;