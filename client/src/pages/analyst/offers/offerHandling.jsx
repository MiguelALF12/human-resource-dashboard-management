import React, { useState, useEffect, useMemo } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import OffersTable from "./offersTable";
import FilterOfferHandler from "./filterOfferHandler";
import Pagination from "../../home/components/pagination";
import CreateOffer from "./createOffer";
import EditOffer from "./editOffer";
import DeleteOffer from "./removeOffer";

import { getOffers } from "../../../api/ofertas";

let PageSize = 5;

const OffersHandling = () => {
    const [offers, setOffers] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [showOfferForm, setShowOfferForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [clickedOffer, setClickedOffer] = useState("0");
    const [offersFromQuery, setOffersFromQuery] = useState([]);
    const [editedDeletedOffer, setEditedDeletedOffer] = useState(false);
    const handleClickedOffer = (offerId) => {
        setClickedOffer(offerId);
        // console.log("Oferta clickeada: ", offerId);
        if (offerId.includes("edit")) {
            handleShowEditForm();
        } else if (offerId.includes("delete")) {
            handleShowDeleteModal();
        }
    }
    const handleCloseOfferForm = () => { setShowOfferForm(false); }
    const handleShowOfferForm = () => setShowOfferForm(true);
    const handleCloseEditForm = () => { setShowEditForm(false); }
    const handleShowEditForm = () => setShowEditForm(true);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);
    const handleTrueEditedDeletedOffer = () => {
        setEditedDeletedOffer(true);
    }
    const handleFalseEditedDeletedOffer = () => {
        setEditedDeletedOffer(false);
    }

    useEffect(() => {
        const loadOffers = async () => {
            const offersRes = await getOffers();
            setOffers(offersRes);
        }
        loadOffers();
        handleFalseEditedDeletedOffer();
    }, [editedDeletedOffer])

    const currentListedOffers = useMemo(() => {
        let firstPageIndex = (currentPage - 1) * PageSize;
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

    return (<>
        <Row className="preselectionSelectionContainer border border-1">
            <Col xs={12} md={4} lg={4} className="ps-4 border border-1">
                <h3>Busqueda según filtros</h3>
                <FilterOfferHandler offers={offers} offersFromQuery={setOffersFromQuery} />
            </Col>
            <Col xs={12} md={8} lg={8} className="border border-1">
                <div className="d-flex justify-content-between align-items-center">
                    <h3>Ofertas registradas </h3>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={offersFromQuery.length > 0 ? offersFromQuery.length : offers.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />

                </div>
                <OffersTable offers={currentListedOffers} clickedOffer={handleClickedOffer} />
                <div>
                    <Button onClick={handleShowOfferForm}>Registrar nueva oferta</Button>
                </div>
            </Col>
        </Row>
        <CreateOffer show={showOfferForm} close={handleCloseOfferForm} />
        {/* {console.log(clickedOffer.split('-')[2])}; */}
        <EditOffer clickedOffer={clickedOffer === "0" ? "undefined" : offers[parseInt(clickedOffer.split('-')[1]) - 1]}
            show={showEditForm} close={handleCloseEditForm} editedDeletedOffer={handleTrueEditedDeletedOffer} />
        <DeleteOffer clickedOffer={clickedOffer === "0" ? "undefined" : offers[parseInt(clickedOffer.split('-')[1]) - 1]}
            show={showDeleteModal} close={handleCloseDeleteModal} editedDeletedOffer={handleTrueEditedDeletedOffer} />
    </>
    )
};

export default OffersHandling;