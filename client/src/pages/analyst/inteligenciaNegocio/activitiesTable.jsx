import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";


const ActivitiesTable = (props) => {
    return (
        <Table striped bordered hover responsive="md">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tipo</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Fecha inicio</th>
                    <th>Fecha Fin</th>
                </tr>
            </thead>
            <tbody>
                {props.activities.length > 0 ? props.activities.map((activity) => {
                    return (
                        <tr key={"activity-" + activity.id.toString()} id={"activityHandler-" + activity.id.toString()} >
                            <td>{activity.id}</td>
                            <td>{activity.tipoActividad}</td>
                            <td>{activity.nombre}</td>
                            <td>{activity.descripcion}</td>
                            <td>{activity.fecha_inicio}</td>
                            <td>{activity.fecha_fin}</td>
                            <td>
                                <Button id="editOfferRecordBtn" size="sm" onClick={() => {
                                    props.clickedActivity("activityHandler-" + activity.id.toString() + "-edit");
                                }} />
                                <Button id="deleteOfferRecordBtn" variant="danger" size="sm"
                                    onClick={() => {
                                        props.clickedActivity("activityHandler-" + activity.id.toString() + "-delete");
                                    }} />
                            </td>
                        </tr>
                    )
                }) : <tr>No hay registros disponibles</tr>}
            </tbody>
        </Table>
    )
};

export default ActivitiesTable;
