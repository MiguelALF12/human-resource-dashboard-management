/**
 * #TODO: useState para bloquear checkbox (Si bloquea No y al contrario)
 */
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

import SelectDate from './components/selectDate';
import AddedToActivityUser from './components/addedToActivityUser';
import NominaTableJustSelection from './components/nominaTableJustSelection';
import 'react-calendar/dist/Calendar.css';

import { list_employee_with_role } from '../../../api/empleados';
import { createActivity, createEmployeeInActivity } from '../../../api/actividades';
import { listContract } from '../../../api/contratos';


const CreateActivity = (props) => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [activityDateRange, setActivityDateRange] = useState(["", ""]);
    const [employees, setEmployees] = useState([])
    const [clickedEmployee, setClickedEmployee] = useState({});
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    const [removedSelectedEmployee, setRemovedSelectedEmployee] = useState(0);
    const refreshPage = () => {
        navigate(0);
    }
    useEffect(() => {
        let clickedEmployeeAlreadySelected = selectedEmployees.length > 0 ? selectedEmployees.find((selectedEmployee) => selectedEmployee.idEmpleado === clickedEmployee.idEmpleado) : undefined,
            currentSelectedEmployees;

        const loadEmployees = async () => {
            const employeesRes = await list_employee_with_role();
            setEmployees(employeesRes);
        }
        if (employees.length === 0) loadEmployees();

        if (Object.keys(clickedEmployee).length > 0) {
            if (clickedEmployeeAlreadySelected === undefined) {
                // The employee
                currentSelectedEmployees = [...selectedEmployees];
                currentSelectedEmployees.push(clickedEmployee);
                setSelectedEmployees(currentSelectedEmployees);
                setClickedEmployee({});
                // setRemovedSelectedEmployee({});
            }
        } else if (removedSelectedEmployee !== 0) {
            let removedSelectedEmployeeNode = document.getElementById(`selectedEmployee-${removedSelectedEmployee}`);
            if (removedSelectedEmployeeNode.style.display === "auto") removedSelectedEmployeeNode.style.display = "none";
            // console.log("Employe to remove: ", removedSelectedEmployee);
            // console.log("Node Before: ", removedSelectedEmployeeNode);
            setRemovedSelectedEmployee(0);
            setSelectedEmployees(selectedEmployees.filter(employee => employee.idEmpleado !== removedSelectedEmployee));
            // console.log("Node after: ", removedSelectedEmployeeNode);
        }
    }, [clickedEmployee, employees, selectedEmployees, removedSelectedEmployee]);

    const onSubmit = (activity) => {
        if (activity.tipoActividad !== "Seleccionar" && activityDateRange.reduce((accumulate, currentValue) => accumulate += currentValue.length, 0) > 0 && selectedEmployees.length > 0) {

            activity.fecha_inicio = activityDateRange[0];
            activity.fecha_fin = activityDateRange[1];
            console.log("Actividad a registrar", activity);
            console.log("Participantes: ", selectedEmployees);
            // Consume actividades, empleadoEnActividades API endpoints
            createActivity(activity).then(newData => {
                // Participants additions
                selectedEmployees.map(employee => {
                    delete employee.nombre;
                    delete employee.apellido;
                    return employee.idActividad = newData.id
                });
                createEmployeeInActivity(selectedEmployees).then(newData => {
                    alert("El/los empleados se han agregado correctamente!");
                    refreshPage();
                });
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
                            <Form.Group className="mb-3" controlId="formActivityDescription">
                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control type="textarea" rows={4} {...register("descripcion")} required />
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
                            <label>Fechas</label>
                            <div className="d-grid mt-1">
                                <SelectDate activityDateRange={setActivityDateRange} />
                            </div>
                        </Col>
                    </Row>
                    <Row className='px-5'>
                        <h3>Definir los participantes</h3>
                        <Col xs={12} md={7} lg={7} className="px-4">
                            <NominaTableJustSelection employees={employees} clickedEmployee={setClickedEmployee} />
                        </Col>
                        <Col xs={12} md={5} lg={5} className="px-4" id="slectedEmployeesPills">
                            {selectedEmployees.length > 0 ? selectedEmployees.map((selectedEmployee) => <AddedToActivityUser selectedEmployee={selectedEmployee} removeSelectedEmployee={setRemovedSelectedEmployee} />) : <span>No hay empleados seleccionados</span>}
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.close}>
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

export default CreateActivity;