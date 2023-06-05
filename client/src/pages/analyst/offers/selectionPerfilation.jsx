import React, { useEffect, useState, useMemo } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from "react-bootstrap/Button";
import SelectedAplicantsTable from './selectedAplicantsTable';
import AplicantFilesVerification from './aplicantFilesVerification';
import ChangeAplicantStateConfirmation from './changeAplicantStateConfirmation';
// import InterviewAndPsicologicalTest from './interviewAndPsicologicalTest'
import Pagination from '../../../components/pagination';

import '../../../styles/offers.css';

import { getSeleccionados } from '../../../api/seleccionados';

let PageSize = 4;

const SelectionPerfilation = () => {
    const [selectedAplicants, setSelectedAplicants] = useState([])
    const [selectedAplicant, setSelectedAplicant] = useState("0") //seleccion index
    const [currentPage, setCurrentPage] = useState(1);
    const [showChangeAplicantState, setChangeAplicantState] = useState(false)
    const handleSelectedAplicant = (aplicantPositionInSelection) => { setSelectedAplicant(aplicantPositionInSelection); }
    const handleShowChangeAplicantState = () => {
        if (selectedAplicant.includes("selection-")) {
            // console.log(clickedAplicant)
            setChangeAplicantState(true);
        };
    }
    const handleCloseChangeAplicantState = () => setChangeAplicantState(false);

    useEffect(() => {
        const loadOffersSelections = async () => {
            const selectedRes = await getSeleccionados();
            setSelectedAplicants(selectedRes);
        }
        loadOffersSelections();


    }, []);

    const currentListedOffers = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return selectedAplicants.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, selectedAplicants]);


    return (
        <>
            <Row className="preselectionSelectionContainer mx-3">
                <Col xs={12} md={7} lg={7} className='border border-1 pt-3'>
                    <div className='d-flex justify-content-between'>
                        <h4>Aplicantes seleccionados a entrevistar/entrevistados</h4>
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={selectedAplicants.length}
                            pageSize={PageSize}
                            onPageChange={page => setCurrentPage(page)}
                        />
                    </div>
                    <SelectedAplicantsTable clickedSelectedAplicant={handleSelectedAplicant} selected={currentListedOffers} />
                    <div className='d-flex justify-content-between border border-1'>
                        <span><strong>Aplicante seleccionado:</strong> {selectedAplicant === "0" ? "Ninguno" : parseInt(selectedAplicant.split('-')[1])}</span>
                        <Button onClick={handleShowChangeAplicantState}>
                            Cambiar a estado pre-contrato
                        </Button>
                    </div>
                </Col>
                <Col xs={12} md={5} lg={5} className='border border-1 d-flex flex-row pt-3'>
                    <div className='flex-fill'>
                        <h4>Validación de documentos y perfilación</h4>
                        {selectedAplicant === "0" ? "Seleccione un aplicante para visualizar su información" :
                            <AplicantFilesVerification aplicant={(() => {
                                for (let aplicant of selectedAplicants) {
                                    if (aplicant.idSeleccion === parseInt(selectedAplicant.split('-')[1])) {
                                        return aplicant;
                                    }
                                }
                            })()} />}
                    </div>
                </Col>
            </Row>
            {/* {console.log("before change: ", selectedAplicant)} */}
            <ChangeAplicantStateConfirmation show={showChangeAplicantState} close={handleCloseChangeAplicantState}
                seleccionId={selectedAplicant === "0" ? "undefined" : parseInt(selectedAplicant.split('-')[1])} />

        </>
    )
};

export default SelectionPerfilation;