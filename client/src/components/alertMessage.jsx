import React from "react";
import Alert from 'react-bootstrap/Alert';

const AlertMessage = ({ show, id, variant, message }) => {

    // const [loginAlert, setLoginAlert] = useState([false, "", ""]);
    // const handleLoginAlert = (show, variant, message) => setLoginAlert([show, variant, message]);

    return (
        <Alert show={show} key={id} variant={variant}>
            {message}
        </Alert>
    )
};

export default AlertMessage;