import CloseButton from 'react-bootstrap/CloseButton';

const AddedToActivityUser = (props) => {
    let selectedEmployeeId = props.selectedEmployee.hasOwnProperty("idEmpleado") === true ? props.selectedEmployee.idEmpleado : props.selectedEmployee.id
    return (
        //key={`selectedEmployee-${props.selectedEmployee.id}`}
        <div id={`selectedEmployee-${selectedEmployeeId}`} className={`border border-1 pill-container`}>
            <span id="pill">{props.selectedEmployee.nombre}</span>
            {/* <button id="pill-btn">x</button> */}
            <CloseButton id="pill-btn" onClick={() => {
                props.removeSelectedEmployee(selectedEmployeeId);
                document.getElementById(`selectedEmployee-${selectedEmployeeId}`).classList.toggle("d-none");;
                // event.target.parentElement.classList.toggle("d-none");
                // console.log(event.target.parentElement);
            }} />
        </div>
    )
};

export default AddedToActivityUser;
