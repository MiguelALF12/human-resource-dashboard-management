import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Ass from "./ass";
import Hiring from "./hiring";
import { getSeleccionados } from "../../../../api/seleccionados";
import { getDataFromLocalStorage, getLenghtOfFormData } from "../../../../utilities/components";

export const aplicantLoader = async ({ params }) => {
    const selectedUsers = await getSeleccionados();
    for (let user of selectedUsers) {
        if (user.id.toString() === params.id.toString()) {
            return { user };
        }
    }
}

const Entry = (props) => {
    const { user } = useLoaderData();
    const [optionToShow, setOptionToShow] = useState("");
    const [socialSecurityFiles, setSocialSecurityFiles] = useState({});
    const handleSocialSecurityFiles = (addedFiles) => { setSocialSecurityFiles(addedFiles); }

    let preHiringInfo = getDataFromLocalStorage();

    return (<Row id="hiringProcessesContainer">
        <Col className="d-flex flex-column justify-content-center border border-1 p-5 " md={3} lg={3}>
            <Button className="hiringProcessBtns" onClick={() => { setOptionToShow("ass") }}><h3>Afiliación a seguridad social</h3></Button>
            <Button className="hiringProcessBtns" onClick={() => { setOptionToShow("hiring") }}><h3>Contratación</h3></Button>

        </Col>
        <Col className="d-flex border border-1" md={9} lg={9}>
            {optionToShow !== "" ?
                (optionToShow === "ass" ?
                    <Ass aplicant={user} files={handleSocialSecurityFiles} /> :
                    optionToShow === "hiring" ?
                        // Here we need to put validation depending on Ass, if it has been already done.
                        (socialSecurityFiles instanceof FormData && getLenghtOfFormData(socialSecurityFiles) === 5 ?
                            <Hiring files={socialSecurityFiles} aplicant={user} preHiringInfo={preHiringInfo} />
                            : "Primero debe realizar el registro de seguridad social para poder acceder a esta opción!.") : "")
                : "Seleccione una opción"}
        </Col>

    </Row >)
};

export default Entry;