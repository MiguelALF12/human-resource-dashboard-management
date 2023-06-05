import React, { useEffect, useState, useMemo } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

import Offer from './offer.jsx'
import Pagination from './pagination.jsx';
import FilterOffers from './filterOffers.jsx';
import "../styles/bodyInfo.css";

import { filteredOffers } from '../utilities/components.js';
import { getOffers } from '../api/ofertas.js';

let PageSize = 6;

const BodyInfo = () => {
    const [offers, setOffers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    // const [searchResults, setSearchResults] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filterOption, setFilterOption] = useState('');
    const handleSearchText = (searchText) => {
        setSearchText(searchText);

    }
    const handleFilterOption = (filter) => { setFilterOption(filter); }

    useEffect(() => {
        const loadOffers = async () => {
            let res = await getOffers();
            setOffers(res);
        }
        loadOffers();
    }, []);

    const currentListedOffers = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return offers.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, offers]);


    return (
        <Row id="bodyInfoContainer">
            <Col className="m-auto" xs={12} md={9}>
                <Row>
                    <Col id="filterArea">
                        <FilterOffers offers={offers}
                            searchText={handleSearchText} filterOption={handleFilterOption} />
                    </Col>
                </Row>
                <Row>

                    <Col className="mt-2">
                        <span>Resultados de la busqueda: {currentListedOffers.length}</span>
                    </Col>
                    <Col xs={12} md={12} className="d-flex flex-wrap justify-content-center g-5">
                        {currentListedOffers.map((offer) => <Offer offer={offer} />)}
                    </Col>
                    <Col xs={12} md={12} className="d-flex justify-content-center g-5">
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={offers.length}
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