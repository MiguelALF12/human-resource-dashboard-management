import React, { useState, useEffect, useMemo } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import FilterActivities from "./filterActivities";
import ActivitiesTable from "./activitiesTable";
import CreateActivity from "./createActivity";
import Pagination from "../../home/components/pagination";

import { listActivities } from "../../../api/actividades";
let PageSize = 2;

const BusinessInteligence = () => {
    const [activities, setActivities] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [showActivityForm, setShowActivityForm] = useState(false);
    const [clickedActivity, setClickedActivity] = useState("0");

    const handleClickedActivity = (offerId) => setClickedActivity(offerId);

    const currentListedActivities = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        // if (offersFromQuery.length > 0) {
        //     if (firstPageIndex > offersFromQuery.length) {
        //         setCurrentPage(1);
        //     }
        //     return offersFromQuery.slice(firstPageIndex, lastPageIndex);
        // } else {
        //     return offers.slice(firstPageIndex, lastPageIndex);
        // }
        return activities.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, activities]);

    useEffect(() => {
        const loadActivities = async () => {
            const activitiesRes = await listActivities();
            setActivities(activitiesRes);
        }
        loadActivities();

    }, [])

    return (<>
        <Row className="inteligenciaNegocioContainer border border-1">
            <Col xs={12} md={4} lg={4} className="ps-4 border border-1">
                <h3>Busqueda según filtros</h3>
                <FilterActivities />
            </Col>
            <Col xs={12} md={8} lg={8} className="border border-1">
                <div className="d-flex justify-content-between align-items-center">
                    <h3>Actividades registradas </h3>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={activities.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
                <ActivitiesTable activities={currentListedActivities} clickedActivity={handleClickedActivity} />
                <div>
                    <Button onClick={() => setShowActivityForm(true)}>Registrar nueva Actividad</Button>

                </div>
            </Col>
        </Row>
        <CreateActivity show={showActivityForm} close={() => setShowActivityForm(false)} />

    </>)
};

export default BusinessInteligence;