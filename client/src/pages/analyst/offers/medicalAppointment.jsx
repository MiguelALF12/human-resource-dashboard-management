/**
 * #TODO: useState para bloquear checkbox (Si bloquea No y al contrario)
 */
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css';
import { addDataIntoLocalStorage } from '../../../utilities/components';
import { createSeleccionado } from '../../../api/seleccionados';

const MedicalAppointment = (props) => {
    const { handleSubmit } = useForm();
    const [value, onChange] = useState(new Date());
    const [disableCheck, setDisableCheck] = useState([false, false]);
    let aplicantId = props.aplicant[0];
    let aplicantEmail = props.aplicant[1];
    let offer = props.aplicant[2];
    let aplicationId;
    if (typeof (props.aplicationsObjects) == "object") {
        for (let aplication of props.aplicationsObjects) {
            if (aplication.idAplicante === aplicantId && aplication.idOferta === offer.id) {
                aplicationId = aplication.id;
            }
        }
    }
    // console.log("aplicationID: ", aplicationId);
    const handleDate = (newDate) => {
        onChange(newDate)
        document.getElementById("formDayOfMedicalAppointment").value = value.getDate().toString()
        document.getElementById("formMonthYearOfMedicalAppointment").value = (value.getMonth() + 1).toString() + "-" + value.getFullYear().toString();
    }
    const handleEmail = () => {
        let sendEmailBtn = document.getElementById("sendEmail");
        let emailMsg = {
            subject: `RECURSOS HUMANOS - CITA MÉDICA y ENTREVISTA - APLICAION A PUESTO: ${offer.nombre}`,
            body: `Bu%C3%A9n%20d%C3%ADa%20Sr.%20aplicante%2C%20en%20este%20mensaje%20se%20le%20indica%20que%20ha%20pasado%20satisfactoriamente%20a%20la%20fase%20de%20Selecci%C3%B3n%20en%20su%20aplicaci%C3%B3n%20al%20puesto%20mencionado.%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20En%20esta%20fase%20usted%20deber%C3%A1%20atender%20a%20lo%20siguiente%3A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20-%20CITA%20M%C3%89DICA%20para%20comprobaci%C3%B3n%20de%20estado%20optimo%20de%20salud%20en%20caso%20tal%20de%20ser%20contratado.%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20-%20ENTREVISTA%20con%20personal%20encargados%20en%20la%20instalaci%C3%B3n%20de%20la%20empresa%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20Cada%20una%20de%20estas%20actividades%20se%20definen%20a%20continuaci%C3%B3n%3A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20Sobre%20la%20CITA%20M%C3%89DICA%3A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Usted%20deber%C3%A1%20dirigirse%20al%20centro%20de%20atenci%C3%B3n%20hospitalaria%20NUEVA%20EPS%20ubicado%20en%20la%20DIRECCI%C3%93N%20Av.%2030%20De%20Agosto%20%23%2035-08%2C%20Pereira%2C%20Risaralda%20660002.%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20La%20fecha%20de%20su%20cita%20es%3A${value.getDate().toString()}-${(value.getMonth() + 1).toString()}-${value.getFullYear().toString()}%20%20%0D%0A%0D%0APuede%20acercarse%20en%20cualquiera%20de%20los%20horarios%20de%20atenci%C3%B3n%20dispuestos%3A%20lunes%20a%20viernes%20de%207%3A30%20a%2017%3A00%20y%20s%C3%A1bados%20de%208%3A00%20a%2012%3A00%20(esto%20depender%C3%A1%20de%20su%20fecha%20asignada).%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Una%20vez%20tenga%20los%20resultados%2C%20los%20cuales%20se%20le%20entregar%C3%A1n%20a%20usted%20de%20manera%20fisica%2C%20o%20en%20su%20defecto%20virtual%20seg%C3%BAn%20como%20acuerde%20usted%20con%20los%20auxiliares%20en%20el%20centro%20de%20atenci%C3%B3n%20hospitalario%2C%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20los%20cuales%20ser%C3%A1n%20entregados%201%20d%C3%ADa%20habil%20despues%20de%20la%20cita%20en%20d%C3%ADas%20laborales%2C%20y%202%20d%C3%ADas%20habiles%20para%20citas%20en%20d%C3%ADas%20sabados%2C%20usted%20deber%C3%A1%20subir%20dichos%20resultados%20a%20la%20plataforma%20por%20la%20cual%20aplic%C3%B3%20a%20la%20oferta%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20en%20el%20apartado%20de%20configuraci%C3%B3n%20de%20ofertas%2C%20en%20el%20campo%20OTROS%20de%20subida%20de%20archivos.%20El%20archivo%20deber%C3%A1%20ser%20enviado%20con%20el%20siguiente%20patron%20de%20nombre%20(sin%20tildes%20ni%20otros%20caracteres%20no%20indicados)%20-resultados_medicos_precontrato-%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Una%20vez%20realizado%20esto%2C%20deber%C3%A1%20pasar%20a%20la%20siguiente%20actividad.%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20IMPORTANTE%3A%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20-No%20puede%20faltar%20a%20la%20cita%20m%C3%A9dica.%20Si%20no%20la%20atiende%20se%20entender%C3%A1%20que%20desiste%20del%20proceso%20y%20por%20ende%20ser%C3%A1%20eliminado.%20Deber%C3%A1%20volver%20a%20aplicar.%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20-Una%20vez%20obtenidos%20los%20resultados%20de%20la%20cita%20m%C3%A9dica%2C%20usted%20dispone%20de%202%20d%C3%ADas%20h%C3%A1biles%20para%20ingresarlos%20en%20plataforma.%20Subidas%20realizadas%20en%20tiempos%20posteriores%20al%20mencionado%20no%20ser%C3%A1n%20tenidas%20en%20cuenta%20y%20se%20entender%C3%A1%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20se%20entender%C3%A1%20que%20desiste%20del%20proceso%20y%20por%20ende%20ser%C3%A1%20eliminado.%20Deber%C3%A1%20volver%20a%20aplicar.%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20Sobre%20la%20ENTREVISTA%3A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Una%20vez%20realizado%20la%20subida%20del%20documento%20de%20cita%20m%C3%A9dica%2C%20usted%20dispondr%C3%A1%20de%204%20d%C3%ADas%20h%C3%A1biles%20para%20acercarse%20a%20nuestras%20instalaciones%20y%20realizar%20el%20proceso%20de%20entrevista.%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Las%20instalaciones%20de%20EMPRESA%20S.A%20est%C3%A1n%20ubicada%20en%20la%20DIRECCI%C3%93N%20Calle%201%20No.%2012%20-%2018%20Barrio%20Popular%20Modelo%2C%20Pereira%2C%20Risaralda%2C%20Colombia.%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Al%20llegar%20e%20ingresar%20al%20sitio%2C%20hablar%C3%A1%20con%20nuestor%20asesor%20principal%20quien%20luego%20le%20dar%C3%A1%20instrucciones%20sobre%20como%20proceder.%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Una%20vez%20realizada%20la%20entrevista%2C%20usted%20deber%C3%A1%20esperar%20maximo%202%20d%C3%ADas%20habiles%20mientras%20nuestro%20equipo%20de%20Recursos%20y%20Humanos%20hace%20las%20respectivas%20consideraciones.%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Usted%20recibir%C3%A1%20una%20llamada%20en%20caulquier%20caso%2C%20de%20ser%20o%20no%20aceptado%20para%20el%20puesto%20y%20continuar%20con%20el%20proceso%20de%20contrataci%C3%B3n.%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20PORFAVOR%3A%20Espere%20atentamente%20el%20tiempo%20indicado%2C%20no%20sea%20precoz!.%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20IMPORTANTE%3A%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20-No%20puede%20faltar%20a%20entrevista.%20Si%20no%20la%20atiende%20se%20entender%C3%A1%20que%20desiste%20del%20proceso%20y%20por%20ende%20ser%C3%A1%20eliminado.%20Deber%C3%A1%20volver%20a%20aplicar.%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20Cualquier%20inquietud%20sobre%20las%20respectivas%20actividades%2C%20enviar%20un%20correo%20como%20respuesta%20a%20este.%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20Feliz%20d%C3%ADa%20le%20desea%20EMPRESA%20S.A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%22Soluciones%20a%20tu%20alcance%22`
        };
        sendEmailBtn.addEventListener("click", props.close);
        sendEmailBtn.addEventListener("click", window.open(`mailto:${aplicantEmail}?subject=${emailMsg.subject}&body=${emailMsg.body}`))

    }
    const handleCheck = () => {
        const isAplicantSelected = [document.getElementById("isAplicantSelectedYes").checked, document.getElementById("isAplicantSelectedNo").checked]

        if (isAplicantSelected[0]) {
            setDisableCheck([false, true]);
        } else {
            if (isAplicantSelected[1]) {
                setDisableCheck([true, false]);
            } else {
                setDisableCheck([false, false]);
            }
        }

    }

    const onSubmit = () => {
        let selectedAplicant = {};
        selectedAplicant.idAplicacion = aplicationId;
        selectedAplicant.faseAplicante = "SELECCION";
        const formData = new FormData();
        formData.append("idAplicacion", aplicationId)
        if (disableCheck[1]) { //Si usuario es seleccionado (check a la caja Sí)
            createSeleccionado(selectedAplicant).then((data) => {
                alert("Aplicante seleccionado con exito!")
            }).catch((err) => { console.log(err) });
            addDataIntoLocalStorage(formData);
        }
    }


    return (

        <Modal show={props.show} onHide={props.close} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Preselección del candidato</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Body>
                    <Row>
                        <Col xs={12} md={12} lg={12} className="px-4">
                            <p>El candidato pasa al siguiente procesos?:</p>
                            <div className="d-flex flex-column px-3">
                                <Form.Check type={'checkbox'} id="isAplicantSelectedYes" label="Si" onChange={handleCheck} disabled={disableCheck[0]} />
                                <Form.Check type={'checkbox'} id="isAplicantSelectedNo" label="No" onChange={handleCheck} disabled={disableCheck[1]} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12} className="px-4">
                            <p>Escoga una fecha de entrevista: </p>
                            <div className="d-flex flex-row justify-content-around px-3 pb-4">
                                <div>
                                    <Form.Group className="mb-3" controlId="formDayOfMedicalAppointment">
                                        <Form.Label>Día</Form.Label>
                                        <Form.Control type="text" readOnly />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formMonthYearOfMedicalAppointment">
                                        <Form.Label>Mes-año</Form.Label>
                                        <Form.Control type="text" readOnly />
                                    </Form.Group>
                                </div>
                                <div>
                                    <Calendar value={value} onChange={handleDate} />
                                </div>
                            </div>
                            <Form.Group controlId="formDiaOfMedicalAppointment">
                                <Form.Label>Correo al cual se enviará la información: </Form.Label>
                                <Form.Control type="email" defaultValue={props.aplicant[1]} readOnly />
                            </Form.Group>
                        </Col>
                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.close}>
                        Cancelar
                    </Button>
                    <Button id="sendEmail" type="submit" variant="primary" onClick={handleEmail}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>

    );
}

export default MedicalAppointment;