import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { getOfferById } from '../api/ofertas';
import { createAplication } from '../api/aplicaciones';


import "../styles/bodyInfo.css";

const OfferDetails = () => {
    const [offerDetails, setOfferDetails] = useState({})
    const location = useLocation();
    const navigate = useNavigate();
    let pathAsArr = location.pathname.split("/");
    let offerId = pathAsArr[pathAsArr.length - 1]

    const handleAplication = () => {
        let redirection;
        if (pathAsArr.length > 3) {
            createAplication({
                idAplicante: pathAsArr[2],
                idOferta: offerId
            }).then((data) => {
                console.log(data);
                if (data.aplicationExists === true) {
                    alert("USTED Ya ha aplicado a esta oferta!")
                } else {
                    navigate(-1)
                }
            });

        } else {
            // No user Logged
            redirection = '/loggin';
            navigate(redirection, { replace: true });

        }
    }
    useEffect(() => {
        const loadOffer = async () => {
            let res = await getOfferById(offerId);
            setOfferDetails(res);
        }
        loadOffer();
    }, [location]);

    return (
        <Row id="bodyInfoContainer">
            <Col className="mx-auto my-5" xs={12} md={6}>
                <h2 className="text-center p-3">{offerDetails.nombre}</h2>
                <div className="d-flex flex-xs-wrap">
                    <div className="flex-fill px-5">
                        <h4>Descripción del puesto</h4>
                        <p>
                            {offerDetails.descripcion}
                        </p>
                    </div>
                    <div className="flex-fill text-nowrap px-5">
                        <h4>Detalles</h4>
                        <div className="flex-row pt-2">
                            <div className="py-2">
                                <h6>Salario</h6>
                                <span className="text-muted">&emsp;{offerDetails.salario}&ensp;</span>
                            </div>
                            <div className="py-2">
                                <h6>Experiencia requerida</h6>
                                <span className="text-muted">&emsp;{offerDetails.experienciaAnos}&ensp;</span>
                            </div>
                            <div className="py-2">
                                <h6>Vacantes disponibles</h6>
                                <span className="text-muted">&emsp;{offerDetails.vacantes}&ensp;</span>
                            </div>
                            <div className="py-2">
                                <h6 >Fecha de inicio</h6>
                                <span className="text-muted">&emsp;{offerDetails.fechaInicio}&ensp;</span>
                            </div>
                        </div>


                    </div>
                </div>
                <Button variant="primary" className="mt-3" onClick={handleAplication}>Aplicar a oferta</Button>
            </Col>
        </Row>
    )
};

export default OfferDetails;
