import React, { useState, useEffect, useMemo } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import '../../../styles/inteligenciaNegocios.css'

import FilterActivities from "./filterActivities";
import CreateActivity from "./createActivity";
import Pagination from "../../../components/pagination";

let PageSize = 5;

const BusineesInteligence = () => {
    const [activities, setActvities] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [showActivityForm, setShowActivityForm] = useState(false);
    const [clickedActivity, setClickedActivity] = useState("0");

    const handleClickedActivity = (offerId) => setClickedActivity(offerId);
    const handleCloseActivityForm = () => setShowActivityForm(false);
    const handleShowActivityForm = () => setShowActivityForm(true);

    // const currentListedOffers = useMemo(() => {
    //     const firstPageIndex = (currentPage - 1) * PageSize;
    //     const lastPageIndex = firstPageIndex + PageSize;
    //     return offers.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage, offers]);

    // useEffect(() => {
    //     const loadOffers = async () => {
    //         const offersRes = await getOffers();
    //         setOffers(offersRes);
    //     }
    //     loadOffers();
    // }, [])

    return (<>
        <Row className="inteligenciaNegocioContainer border border-1">
            <Col xs={12} md={4} lg={4} className="ps-4 border border-1">
                <h3>Busqueda según filtros</h3>
                <FilterActivities />
            </Col>
            <Col xs={12} md={8} lg={8} className="border border-1">
                <div className="d-flex justify-content-between align-items-center">
                    <h3>Ofertas registradas </h3>
                    {/* <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={offers.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    /> */}

                </div>


                <div>
                    <Button>Registrar nueva oferta</Button>
                </div>
            </Col>
        </Row>
        <CreateActivity />

    </>)
};

export default BusineesInteligence;