import React from 'react';
import { useEffect, useState } from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Aplication from './components/aplication';

import "../../styles/bodyInfo.css";

import { getAplicationsByAplicantId } from '../../api/aplicaciones';
import { getSeleccionados } from '../../api/seleccionados';
import { searchAplicationIn } from '../../utilities/components';


const Aplications = () => {
    const [aplications, setAplications] = useState([]);
    const { user } = useRouteLoaderData("userSessionHome");


    useEffect(() => {
        const loadAplications = async () => {
            const currentAplications = await getAplicationsByAplicantId(user.id);
            const selectedAplications = await getSeleccionados();
            searchAplicationIn(currentAplications, selectedAplications);
            setAplications(currentAplications);
        };
        loadAplications()
    }, [user]);
    console.log(aplications);
    return (
        <Row id="bodyInfoContainer">
            <Col className="mx-auto my-5" xs={12} md={9}>
                <Row>
                    <Col className='mb-4'>
                        <h2 className='text-center'>Mis aplicaciones</h2>
                    </Col></Row>
                <Row>
                    <Col className="d-flex flex-wrap justify-content-center">
                        {aplications.map((aplication) => <Aplication aplication={aplication} />)}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Aplications;
