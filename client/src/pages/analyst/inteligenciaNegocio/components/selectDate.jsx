import React, { useEffect, useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Calendar from 'react-calendar'

const SelectDate = (props) => {
    let formattedActivityStartDate = useRef(""), formattedActivityFinishDate = useRef("");
    const [dateValue, setDateValue] = useState(new Date());
    const [formattedDateForLargeBtn, setFormattedDateForLargeBtn] = useState("");
    const [cleanDates, setCleanDates] = useState(false);
    useEffect(() => {

        if (cleanDates === true) {
            document.getElementById("activityStartDate").value = "";
            document.getElementById("activityFinishDate").value = "";
            setFormattedDateForLargeBtn("");
            formattedActivityFinishDate.current = "";
            formattedActivityStartDate.current = "";
            setCleanDates(false);
        } else {
            if (formattedDateForLargeBtn !== "") {

            }
        }
    }, [cleanDates]);
    const handleDate = (newDate) => {
        setDateValue(newDate)
        let activityStartDate = document.getElementById("activityStartDate");
        let activityFinishDate = document.getElementById("activityFinishDate");
        formattedActivityStartDate.current = newDate[0].getFullYear().toString() + '-' + (newDate[0].getMonth() + 1).toString() + "-" + newDate[0].getDate().toString();;
        formattedActivityFinishDate.current = newDate[1].getFullYear().toString() + '-' + (newDate[1].getMonth() + 1).toString() + "-" + newDate[1].getDate().toString();
        setFormattedDateForLargeBtn(`${formattedActivityStartDate.current} → ${formattedActivityFinishDate.current}`);
        // activityStartDate.value = formattedActivityStartDate.current;
        // activityFinishDate.value = formattedActivityFinishDate.current;
        // props.activityDateRange([formattedActivityStartDate, formattedActivityFinishDate]);
    }
    const onSubmit = () => {
        if (formattedActivityStartDate.current === "" && formattedActivityFinishDate.current === "") {
            alert("Debe seleccionar un rango de fechas!");
        } else {
            console.log("fechas finales: ", formattedActivityStartDate, formattedActivityFinishDate)
            props.activityDateRange([formattedActivityStartDate.current, formattedActivityFinishDate.current]);
        }
    }
    return (
        <OverlayTrigger
            trigger="click"
            key="bottom"
            placement="bottom"
            overlay={
                <Popover id={`popover-positioned-bottom`}>
                    {/* <Popover.Header as="h3">{`Popover bottom`}</Popover.Header> */}
                    <Popover.Body>
                        <strong>Escoge</strong> tus fechas.
                        <InputGroup className="mb-3">
                            <Form.Control id="activityStartDate" placeholder="Inicio" readOnly value={formattedActivityStartDate.current} />
                            <Form.Control id="activityFinishDate" placeholder="Fin" readOnly value={formattedActivityFinishDate.current} />
                            <button onClick={() => setCleanDates(true)} id="cleanDatesBuisnessInteligence"></button>
                        </InputGroup>
                        <Calendar value={dateValue} onChange={handleDate} selectRange={true} goToRangeStartOnSelect={true} />
                        <div className="d-flex justify-content-center">
                            <Button onClick={onSubmit} className="m-2">Aceptar</Button>
                        </div>
                    </Popover.Body>
                </Popover>
            }
        >
            <Button size="lg" id="activityDatesBtn">
                {formattedDateForLargeBtn === "" ? "Escoge un rango de fechas" : formattedDateForLargeBtn}
            </Button>
        </OverlayTrigger>
    )
};

export default SelectDate;