import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/col";
import Menu from './components/menu'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { Outlet } from "react-router-dom";

import '../../styles/bodyInfo.css';

const AnalystBodyInfo = () => {
    return (
        <div id="analystBodyinfoArea">
            <Row >
                {/* <Col xs={12} md={2} id="menu">
                <Menu />
            </Col>
            <Col xs={12} md={10}>
                <Outlet />
            </Col> */}
                <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3"
                    justify
                >
                    <Tab eventKey="ofertas" title="Ofertas">
                        <Col></Col>
                    </Tab>
                    <Tab eventKey="nomina" title="Nomina">
                        <Col></Col>
                    </Tab>
                    <Tab eventKey="inteligencia_negocio" title="Inteligencia de Negocio">
                        <Col></Col>
                    </Tab>
                </Tabs>
            </Row>
            {/* <Row>

            </Row> */}

        </div>
    )
};

export default AnalystBodyInfo;