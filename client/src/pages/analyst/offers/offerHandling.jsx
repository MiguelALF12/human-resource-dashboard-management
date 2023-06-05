import React, { useState, useEffect, useMemo } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../../../styles/offers.css';

import OffersTable from "./offersTable";
import FilterOfferHandler from "./filterOfferHandler";
import Pagination from "../../../components/pagination";

import { getOffers } from "../../../api/ofertas";

let PageSize = 5;

const OffersHandling = () => {
    const [offers, setOffers] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const currentListedOffers = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return offers.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, offers]);

    useEffect(() => {
        const loadOffers = async () => {
            const offersRes = await getOffers();
            setOffers(offersRes);
        }
        loadOffers();
    }, [])

    return (<>
        <Row className="preselectionSelectionContainer border border-1">
            <Col xs={12} md={4} lg={4} className="ps-4 border border-1">
                <h3>Busqueda según filtros</h3>
                <FilterOfferHandler />
            </Col>
            <Col xs={12} md={8} lg={8} className="border border-1">
                <div className="d-flex justify-content-between align-items-center">
                    <h3>Ofertas registradas </h3>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={offers.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />

                </div>
                <OffersTable offers={currentListedOffers} />
                <div>
                    <Button>Registrar nueva oferta</Button>
                </div>
            </Col>
        </Row>
    </>)
};

export default OffersHandling;