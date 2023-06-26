import React, { useState, useEffect, useMemo } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Pagination from "../../home/components/pagination";
import NominaTable from './components/nominaTable';
import FilterNominaHandler from './components/filterNominaHandler';

import { listEmpleados } from '../../../api/empleados';

let PageSize = 5;

const Nomina = () => {
    const [employees, setEmployees] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const currentListedOffers = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return employees.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, employees]);

    useEffect(() => {
        const loadOffers = async () => {
            const employeesRes = await listEmpleados();
            setEmployees(employeesRes);
        }
        loadOffers();
    }, [])

    return (
        <>
            {/* <NominaInteligenciaNegocioSharedMenu showing={"nomina"} />
            <Outlet /> */}
            <>
                <Row className="preselectionSelectionContainer border border-1">
                    <Col xs={12} md={4} lg={4} className="border border-1">
                        <h3>Busqueda por filtros</h3>
                        <FilterNominaHandler />
                    </Col>
                    <Col xs={12} md={8} lg={8} className="border border-1">
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>Empleados contratados</h3>
                            <Pagination
                                className="pagination-bar"
                                currentPage={currentPage}
                                totalCount={employees.length}
                                pageSize={PageSize}
                                onPageChange={page => setCurrentPage(page)}
                            />

                        </div>
                        <NominaTable employees={currentListedOffers} />
                        <div>
                            <Button>Otra opción importante</Button>
                        </div>
                    </Col>
                </Row>
            </>
        </>
    )
};

export default Nomina;