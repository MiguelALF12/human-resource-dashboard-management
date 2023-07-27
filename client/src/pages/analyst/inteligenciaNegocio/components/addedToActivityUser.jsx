import CloseButton from 'react-bootstrap/CloseButton';

const AddedToActivityUser = (props) => {
    return (
        //key={`selectedEmployee-${props.selectedEmployee.id}`}
        <div id={`selectedEmployee-${props.selectedEmployee.idEmpleado}`} className={`border border-1 pill-container d-auto`}>
            <span id="pill">{props.selectedEmployee.nombre}</span>
            {/* <button id="pill-btn">x</button> */}
            <CloseButton id="pill-btn" onClick={() => {
                props.removeSelectedEmployee(props.selectedEmployee.idEmpleado);
            }} />
        </div>
    )
};

export default AddedToActivityUser;
