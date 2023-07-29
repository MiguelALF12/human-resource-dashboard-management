import React, { useState, useEffect, useMemo } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import FilterActivities from "./filterActivities";
import ActivitiesTable from "./activitiesTable";
import CreateUpdateActivity from "./createUpdateActivity";
import Pagination from "../../home/components/pagination";

import { listActivities, listEmployeeInActivity } from "../../../api/actividades";
import { list_employee_with_role } from '../../../api/empleados';

let PageSize = 5;

const BusinessInteligence = () => {
    const [activities, setActivities] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [employeesInActivity, setEmployeesInActivity] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showActivityForm, setShowActivityForm] = useState(false);
    const [activitiesFromQuery, setActivitiesFromQuery] = useState([]);
    const [clickedActivity, setClickedActivity] = useState("create");

    const handleClickedActivity = (activityId) => {
        console.log(activityId)
        setClickedActivity(activityId)
        // console.log("Oferta clickeada: ", offerId);
        if (activityId.includes("edit")) {
            setShowActivityForm(true);
        } else if (activityId.includes("delete")) {
            // handleShowDeleteModal();
            // later
        }
    }

    const currentListedActivities = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        if (activitiesFromQuery.length > 0) {
            if (firstPageIndex > activitiesFromQuery.length) {
                setCurrentPage(1);
            }
            return activitiesFromQuery.slice(firstPageIndex, lastPageIndex);
        } else {
            return activities.slice(firstPageIndex, lastPageIndex);
        }
    }, [currentPage, activities, activitiesFromQuery]);

    useEffect(() => {
        const loadActivities = async () => {
            const activitiesRes = await listActivities();
            setActivities(activitiesRes);
        }
        const loadEmployees = async () => {
            const employeesRes = await list_employee_with_role();
            setEmployees(employeesRes);
        }
        const loadEmployeesInActivity = async () => {
            const employeesInActivityRes = await listEmployeeInActivity();
            setEmployeesInActivity(employeesInActivityRes);
        }
        loadEmployees();
        loadActivities();

        loadEmployeesInActivity();

    }, [])

    return (<>
        <Row className="inteligenciaNegocioContainer border border-1">
            <Col xs={12} md={4} lg={4} className="ps-4 border border-1">
                <h3>Busqueda según filtros</h3>
                <FilterActivities activities={activities} activitiesFromQuery={setActivitiesFromQuery} employees={employees} employeesInActivity={employeesInActivity} />
            </Col>
            <Col xs={12} md={8} lg={8} className="border border-1">
                <div className="d-flex justify-content-between align-items-center">
                    <h3>Actividades registradas </h3>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={activitiesFromQuery.length > 0 ? activitiesFromQuery.length : activities.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
                <ActivitiesTable activities={currentListedActivities} clickedActivity={handleClickedActivity} />
                <div>
                    <Button onClick={() => { setClickedActivity("create"); setShowActivityForm(true) }}>Registrar nueva Actividad</Button>

                </div>
            </Col>
        </Row>
        <CreateUpdateActivity show={showActivityForm} close={() => setShowActivityForm(false)} employees={employees} clickedActivityToUpdate={[clickedActivity, activities.find(activity => activity.id === parseInt(clickedActivity.split('-')[1]))]} employeesInActivity={clickedActivity.includes("edit") ? employeesInActivity : "undefined"} />

    </>)
};

export default BusinessInteligence;