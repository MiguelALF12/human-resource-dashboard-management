import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/col";
import Menu from './components/menu'

import { Outlet } from "react-router-dom";

import '../../styles/bodyInfo.css';

const AnalystBodyInfo = () => {
    return (
        <Row id="analystBodyinfoArea">
            <Col xs={12} md={2} id="menu">
                <Menu />
            </Col>
            <Col xs={12} md={10}>
                <Outlet />
            </Col>
        </Row>

    )
};

export default AnalystBodyInfo;