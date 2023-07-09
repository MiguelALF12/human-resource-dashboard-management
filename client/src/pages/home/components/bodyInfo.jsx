import React, { useEffect, useState, useMemo } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Offer from './offer.jsx'
import Pagination from './pagination.jsx';
import FilterOffers from './filterOffers.jsx';
import { getOffers } from '../../../api/ofertas.js';

let PageSize = 6;


const BodyInfo = () => {
    const [offers, setOffers] = useState([]);
    const [offersFromQuery, setOffersFromQuery] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const loadOffers = async () => {
            let res = await getOffers();
            setOffers(res.filter((offer) => offer.estadoDisponibilidad === "ABIERTA"));
        }
        loadOffers();
    }, []);

    const currentListedOffers = useMemo(() => {

        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        if (offersFromQuery.length > 0) {
            if (firstPageIndex > offersFromQuery.length) {
                setCurrentPage(1);
            }
            return offersFromQuery.slice(firstPageIndex, lastPageIndex);
        } else {
            return offers.slice(firstPageIndex, lastPageIndex);
        }
    }, [currentPage, offers, offersFromQuery]);


    return (
        <Row id="bodyInfoContainer">
            <Col className="m-auto" xs={12} md={9}>
                <Row>
                    <Col id="filterArea">
                        <FilterOffers offers={offers} offersFromQuery={setOffersFromQuery} />
                    </Col>
                </Row>
                <Row>
                    <hr />
                    <Col className="m-2">
                        <span>Resultados de la busqueda: {currentListedOffers.length}</span>
                    </Col>
                    <Col xs={12} md={12} className="d-flex flex-wrap justify-content-center g-5">
                        {currentListedOffers.map((offer) => <Offer offer={offer} />)}
                    </Col>
                    <Col xs={12} md={12} className="d-flex justify-content-center g-5">
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={offersFromQuery.length > 0 ? offersFromQuery.length : offers.length}
                            pageSize={PageSize}
                            onPageChange={page => setCurrentPage(page)}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default BodyInfo;