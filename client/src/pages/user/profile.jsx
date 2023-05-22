import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/col";
import OptionsMenu from './components/optionsMenu'

import { Outlet } from "react-router-dom";

import '../../styles/bodyInfo.css';

const Profile = () => {
    return (
        <Row id="analystBodyinfoArea">
            <Col xs={12} md={2} id="menu">
                <OptionsMenu />
            </Col>
            <Col xs={12} md={10}>
                <Outlet />
            </Col>
        </Row>

    )
};

export default Profile;