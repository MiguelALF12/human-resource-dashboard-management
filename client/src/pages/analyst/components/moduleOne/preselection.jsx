/**
 * #TODO: Fetch para crear seleccionados. Pensar en manera de como traer el ID de la aplicación.
 */
import React, { useState, useEffect, useMemo } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ActiveOffer from './activeOffer';
import AplicantsTable from "./aplicantsTable";
import AplicantInformation from './aplicantInfo';
import Pagination from '../../../../components/pagination';
import '../../../../styles/moduleOne.css';
import MedicalAppointment from './medicalAppointment';

import { getOffers } from '../../../../api/ofertas';
import { getAplications } from '../../../../api/aplicaciones';

let PageSize = 4;

const Preselection = () => {

    const [offers, setOffers] = useState([]);
    const [aplications, setAplications] = useState([]);
    const [clickedOffer, setClickedOffer] = useState("0");
    const [clickedAplicant, setClickedAplicant] = useState("0");
    const [currentPage, setCurrentPage] = useState(1);
    const [showMedicalAppointment, setShowMedicalAppointment] = useState(false);
    const handleClickedOffer = (offerId) => { setClickedOffer(offerId); }
    const handleClickedAplicant = (aplicantPositionInAplications) => { setClickedAplicant(aplicantPositionInAplications); };
    const handleCloseMedicalAppointment = () => setShowMedicalAppointment(false);
    const handleShowMedicalAppointment = () => {
        if (clickedAplicant.includes("aplicant-")) {
            console.log(clickedAplicant)

            setShowMedicalAppointment(true);
        };
    }


    useEffect(() => {
        const loadOffersApplications = async () => {
            const offersRes = await getOffers();
            const aplicationsRes = await getAplications();
            console.log(aplicationsRes)
            setOffers(offersRes);
            setAplications(aplicationsRes)
        }
        loadOffersApplications();


    }, []);


    const currentListedOffers = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return offers.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, offers]);

    return (
        <>
            <Row className="mt-3 mx-3" id="preselectionContainer">
                <Col xs={12} md={3} className="border border-1">
                    <h4>Ofertas Activas</h4>
                    {currentListedOffers.map((offer) =>
                        <ActiveOffer clickedOffer={handleClickedOffer} key={offer.id} offer={offer} />
                    )}
                </Col>
                <Col xs={12} md={5} className="border border-1">
                    <h4>Aplicantes</h4>
                    <div id="aplicantsArea">
                        {/* Table component */}
                        <AplicantsTable clickedAplicant={handleClickedAplicant} clickedOffer={clickedOffer} aplication={aplications[parseInt(clickedOffer.split('-')[1])]} />
                    </div>
                </Col>
                <Col xs={12} md={4} className="border border-1">
                    <h4>Información del aplicante</h4>
                    <div id="aplicantsArea">
                        {/* userInformationComponent */}
                        {isNaN(parseInt(clickedAplicant.split('-')[1])) ? "Seleccione un aplicante para visualizar su información" : <AplicantInformation aplicant={aplications[parseInt(clickedOffer.split('-')[1])][parseInt(clickedAplicant.split('-')[1])]} />}
                    </div>
                </Col>
            </Row>
            <Row className="mt-3 mx-3">
                <Col xs={12} md={3} className="border border-1 d-flex justify-content-center">
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={offers.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </Col>
                <Col xs={12} md={5}></Col>
                <Col xs={12} md={4}>
                    <div className='text-center'>
                        <Button onClick={handleShowMedicalAppointment}>Pasar a siguiente fase</Button>
                    </div>
                </Col>
            </Row >
            <MedicalAppointment show={showMedicalAppointment} close={handleCloseMedicalAppointment}
                aplicant={clickedAplicant === "0" ? "" :
                    [aplications[parseInt(clickedOffer.split('-')[1])][parseInt(clickedAplicant.split('-')[1])].id,
                    aplications[parseInt(clickedOffer.split('-')[1])][parseInt(clickedAplicant.split('-')[1])].correo,
                    offers.find(offer => offer.id === parseInt(clickedOffer.split('-')[1])
                    )]}
            />

        </>

    )
};

export default Preselection;