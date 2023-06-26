import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/col";
import OptionsMenu from './components/optionsMenu'

import { Outlet } from "react-router-dom";

const Profile = () => {
    return (
        <Row id="configOptionArea">
            <Col xs={12} md={2} className="bg-light" id="menu">
                <OptionsMenu />
            </Col>
            <Col xs={12} md={10}>
                <Outlet />
            </Col>
        </Row>

    )
};

export default Profile;