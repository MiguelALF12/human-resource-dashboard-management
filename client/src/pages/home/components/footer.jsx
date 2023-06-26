import Row from 'react-bootstrap/Row';
import React from 'react';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <Row className="border border-1" id="footer">
            <Col className="text-end " xs={12} md={6}>
                <p>Universidad Tecnológica de Pereíra, Risaralda</p>
                <p>© All Rights reserved</p>
            </Col>
            <Col className="text-start my-auto" xs={12} md={6} >
                <p>
                    Miguel Angel Lopez Fernandez <br />
                    Sebastian Aldana Solarte <br />
                    Jhon Esteban Samudios
                </p>

            </Col>
        </Row>
    )
};

export default Footer;