import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom';
const ModuleOneHome = () => {
    return (
        <>
            <Nav>
                <Nav.Item>
                    <Nav.Link ><Link to="preselection">Preselección</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link ><Link to="selectionPerfilation">Selección y perfilación</Link></Nav.Link>
                </Nav.Item>
            </Nav>
            <Outlet />
        </>
    )
};

export default ModuleOneHome;