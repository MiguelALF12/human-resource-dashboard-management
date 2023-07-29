/**
 * #TODO: useState para bloquear checkbox (Si bloquea No y al contrario)
 */
import { useState, useEffect, useMemo, useRef } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

import SelectDate from './components/selectDate';
// import AddedToActivityUser from './components/addedToActivityUser';
import NominaTableJustSelection from './components/nominaTableJustSelection';
import Pagination from '../../home/components/pagination';
import { addEmployeeNode, deleteEmployeeNode } from '../../../utilities/components';
import 'react-calendar/dist/Calendar.css';

// import { list_employee_with_role } from '../../../api/empleados';
import { createActivity, createEmployeeInActivity } from '../../../api/actividades';
import { listContract } from '../../../api/contratos';

let PageSize = 3;

const CreateUpdateActivity = (props) => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    let alreadyUploadValuesToUpdate = useRef(false);
    // const [cancelBtnPressed, setCancelBtnPressed] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [activityDateRange, setActivityDateRange] = useState(["", ""]);
    const [clickedEmployee, setClickedEmployee] = useState({});
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    const [removedSelectedEmployee, setRemovedSelectedEmployee] = useState(0);
    const refreshPage = () => {
        navigate(0);
    }

    useEffect(() => {
        let clickedEmployeeAlreadySelected = selectedEmployees.length > 0 ? selectedEmployees.find((selectedEmployee) => selectedEmployee.idEmpleado === clickedEmployee.idEmpleado) : undefined,
            currentSelectedEmployees, selectedEmployeeId;
        // console.log("current values: ", alreadyUploadValuesToUpdate, cancelBtnPressed)
        if (props.clickedActivityToUpdate[0].includes("edit") && alreadyUploadValuesToUpdate.current === false) {
            alreadyUploadValuesToUpdate.current = true;
            document.getElementById("formActivityName").value = props.clickedActivityToUpdate[1].nombre;
            document.getElementById("formActivityDescription").value = props.clickedActivityToUpdate[1].descripcion;
            setSelectedEmployees(props.employeesInActivity[props.clickedActivityToUpdate[1].id]);
            props.employeesInActivity[props.clickedActivityToUpdate[1].id].forEach(element => {
                addEmployeeNode(element, "selectedEmployeesPills", setRemovedSelectedEmployee)
            });

        }

        if (Object.keys(clickedEmployee).length > 0) {
            if (clickedEmployeeAlreadySelected === undefined) {
                // The employee
                currentSelectedEmployees = [...selectedEmployees];
                currentSelectedEmployees.push(clickedEmployee);
                setSelectedEmployees(currentSelectedEmployees);
                addEmployeeNode(clickedEmployee, "selectedEmployeesPills", setRemovedSelectedEmployee)
                setClickedEmployee({});
                // setRemovedSelectedEmployee({});
            }
        } else if (removedSelectedEmployee !== 0) {
            let removedSelectedEmployeeNode = document.getElementById(`selectedEmployee-${removedSelectedEmployee}`);
            // console.log("Employe to remove: ", removedSelectedEmployee);
            deleteEmployeeNode("selectedEmployeesPills", removedSelectedEmployeeNode);
            setSelectedEmployees(selectedEmployees.filter(employee => {
                if (employee.hasOwnProperty("idEmpleado") === true) selectedEmployeeId = "idEmpleado";
                else selectedEmployeeId = "id";
                return employee[selectedEmployeeId] !== removedSelectedEmployee
            }));
            // console.log("Node after: ", removedSelectedEmployeeNode);
            setRemovedSelectedEmployee(0);
        }
    }, [clickedEmployee, selectedEmployees, removedSelectedEmployee, props]);


    const currentListedEmployes = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return props.employees.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, props.employees]);

    const onSubmit = (activity) => {
        if (activity.tipoActividad !== "Seleccionar" && activityDateRange.reduce((accumulate, currentValue) => accumulate += currentValue.length, 0) > 0 && selectedEmployees.length > 0) {

            activity.fecha_inicio = activityDateRange[0];
            activity.fecha_fin = activityDateRange[1];
            console.log("Actividad a registrar", activity);
            console.log("Participantes: ", selectedEmployees);
            // Consume actividades, empleadoEnActividades API endpoints
            console.log(activity);
            console.log(selectedEmployees);
            createActivity(activity).then(newData => {
                // Participants additions
                selectedEmployees.map(employee => {
                    delete employee.nombre;
                    delete employee.apellido;
                    return employee.idActividad = newData.id
                });
                return createEmployeeInActivity(selectedEmployees);
            }).then(newData => {
                alert("El/los empleados se han agregado correctamente!");
                refreshPage();
            }).catch(err => console.warn(err));

        } else {
            alert("Rectifique que haya: \n - Seleccionado el tipo de actividad \n - Seleccionado un rango de fechas\n - Seleccionado los participantes ")
        }
    }

    return (
        <Modal show={props.show} onHide={props.close} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Creación de actividades</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Body>
                    <Row className='px-5'>
                        <h3>Definir tu actividad</h3>
                        <Col>
                            <Form.Group className="mb-3" controlId="formActivityName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" {...register("nombre")} required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formActivityState">
                                <Form.Label>Tipo de actividad</Form.Label>
                                <Form.Select {...register("tipoActividad")}>
                                    <option>Seleccionar</option>
                                    <option id="tipoActividadInducción" value="INDUCCION">INDUCCION</option>
                                    <option id="tipoActividadReinducción" value="REINDUCCION">REINDUCCION</option>
                                    <option id="tipoActividadEntrenamiento" value="ENTRENAMIENTO">ENTRENAMIENTO</option>
                                    <option id="tipoActividadCapacitación" value="CAPACITACION">CAPACITACION</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <label>Rango de fechas</label>
                            <div className="d-grid mt-1">
                                <SelectDate activityDateRange={setActivityDateRange} />
                            </div>
                        </Col>
                    </Row>
                    <Row className='px-5'>
                        <Col>
                            <Form.Group className="mb-3" controlId="formActivityDescription">
                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control type="textarea" rows={6} {...register("descripcion")} required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='px-5'>
                        <h3>Definir los participantes</h3>
                        <Col xs={12} md={7} lg={7} className="px-4">
                            <NominaTableJustSelection employees={currentListedEmployes} clickedEmployee={setClickedEmployee} />
                            <Pagination
                                className="pagination-bar"
                                currentPage={currentPage}
                                totalCount={props.employees.length}
                                pageSize={PageSize}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </Col>
                        <Col xs={12} md={5} lg={5} className="px-4" id="selectedEmployeesPills">
                            {/* {selectedEmployees.length > 0 ? selectedEmployees.map((selectedEmployee) => <AddedToActivityUser selectedEmployee={selectedEmployee} removeSelectedEmployee={setRemovedSelectedEmployee} />) : <span>No hay empleados seleccionados</span>} */}
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        alreadyUploadValuesToUpdate.current = false;
                        // setCancelBtnPressed(true);
                        props.close();
                    }}>
                        Cancelar
                    </Button>
                    <Button type="submit" variant="primary" >
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>

    );
}

export default CreateUpdateActivity;