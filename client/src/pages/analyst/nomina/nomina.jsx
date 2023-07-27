import React, { useState, useEffect, useMemo } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Pagination from "../../home/components/pagination";
import NominaTable from './components/nominaTable';
import FilterNominaHandler from './components/filterNominaHandler';
import ManageEmployee from './manageEmployee';

import { list_employee_with_role } from '../../../api/empleados';
import { listContract } from '../../../api/contratos';

let PageSize = 2;

const Nomina = () => {
    const [employees, setEmployees] = useState([])
    const [contracts, setContracts] = useState([]);
    const [employeesFromQuery, setEmployeesFromQuery] = useState([]);
    const [showManageEmployee, setShowManageEmployee] = useState(false);
    const [clickedEmployee, setClickedEmployee] = useState("0");
    const [currentPage, setCurrentPage] = useState(1);
    const handleClickedEmployee = (employee) => {
        let employeeId = parseInt(employee.split('-')[1])
        let employeeAndcontract = [employees.find(employee => employee.id === employeeId), contracts.find(contract => contract.idEmpleado === employeeId)]
        setClickedEmployee(employeeAndcontract);
        setShowManageEmployee(true)
        // console.log("Oferta clickeada: ", offerId);
        // if (offerId.includes("edit")) {
        //     handleShowEditForm();
        // } else if (offerId.includes("delete")) {
        //     handleShowDeleteModal();
        // }
    }

    useEffect(() => {
        const loadEmployees = async () => {
            const employeesRes = await list_employee_with_role();
            const contractsRes = await listContract();
            // getEmployeeRole(employeesRes, contractsRes);
            setContracts(contractsRes);
            setEmployees(employeesRes);
        }
        loadEmployees();
    }, []);

    const currentListedOffers = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        //     return employees.slice(firstPageIndex, lastPageIndex);
        // }, [currentPage, employees]);
        if (employeesFromQuery.length > 0) {
            if (firstPageIndex > employeesFromQuery.length) {
                setCurrentPage(1);
            }
            return employeesFromQuery.slice(firstPageIndex, lastPageIndex);
        } else {
            return employees.slice(firstPageIndex, lastPageIndex);
        }
    }, [currentPage, employees, employeesFromQuery]);

    return (
        <>
            {/* <NominaInteligenciaNegocioSharedMenu showing={"nomina"} />
            <Outlet /> */}
            <>
                <Row className="preselectionSelectionContainer border border-1">
                    <Col xs={12} md={4} lg={4} className="border border-1">
                        <h3>Busqueda por filtros</h3>
                        <FilterNominaHandler employees={employees} employeesFromQuery={setEmployeesFromQuery} />
                    </Col>
                    <Col xs={12} md={8} lg={8} className="border border-1">
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>Empleados contratados</h3>
                            <Pagination
                                className="pagination-bar"
                                currentPage={currentPage}
                                totalCount={employeesFromQuery.length > 0 ? employeesFromQuery.length : employees.length}
                                pageSize={PageSize}
                                onPageChange={page => setCurrentPage(page)}
                            />

                        </div>
                        <NominaTable employees={currentListedOffers} clickedEmployee={handleClickedEmployee} />
                        <div>
                            <Button>Otra opción importante</Button>
                        </div>
                    </Col>
                </Row>
                {/* clickedOffer === "0" ? "undefined" : offers[parseInt(clickedOffer.split('-')[1]) - 1] */}
                <ManageEmployee clickedEmployee={clickedEmployee === "0" ? "undefined" : clickedEmployee}
                    show={showManageEmployee} close={() => setShowManageEmployee(false)} />
            </>
        </>
    )
};

export default Nomina;