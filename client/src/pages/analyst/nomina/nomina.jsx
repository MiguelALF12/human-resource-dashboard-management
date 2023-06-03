/**
 * #TODO: Definir operaciones por cada TAB (ofertas, nomina, inteligencia de neogio)
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../../styles/nomina.css'

import NominaInteligenciaNegocioSharedMenu from '../components/nominaInteligenciaNegocioSharedMenu';

const Nomina = () => {
    // ASS - Afiliación Seguridad Social
    // const [showASSinstructions, setShowASSinstructions] = useState(false)

    // const handleShowSeguridadSocialInstructions = (show) => setShowASSinstructions(show);

    return (
        <>
            <NominaInteligenciaNegocioSharedMenu showing={"nomina"} />
            <Outlet />
        </>
    )
};

export default Nomina;