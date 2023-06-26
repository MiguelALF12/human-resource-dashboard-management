import React from 'react';
import Modal from 'react-bootstrap/Modal'

// import '../../styles/home.css';

const About = (props) => {
    const { show, handleClose } = props;
    return (
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {/* <WebTitle titleLogo={titleLogo} /> */}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>SOBRE NOSOTROS</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque omnis minus assumenda consequuntur temporibus ratione. Ducimus dolorem eaque iusto ullam recusandae sit? Fuga ea, eos esse vero autem minus?</p>
            </Modal.Body>
        </Modal>
    )
};

export default About;