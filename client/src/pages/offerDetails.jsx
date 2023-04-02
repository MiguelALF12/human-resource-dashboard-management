import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Header from "../components/header";
import Footer from "../components/footer";


import "../styles/bodyInfo.css";
const OfferDetails = () => {
    return (<>
        <Header />
        <Row id="bodyInfoContainer">
            <Col className="mx-auto my-5" xs={12} md={6}>
                <h2 className="text-center p-3">Nombre del puesto</h2>
                <div className="d-flex flex-xs-wrap">
                    <div className="flex-fill px-5">
                        <h4>Descripción</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.
                        </p>
                    </div>
                    <div className="flex-fill text-nowrap px-5">
                        <h4>Detalles</h4>
                        <div className="flex-row pt-2">
                            <div className="py-2">
                                <h6>Something important</h6>
                                <span className="text-muted">&emsp;Something important&ensp;</span>
                            </div>
                            <div className="py-2">
                                <h6>Something important</h6>
                                <span className="text-muted">&emsp;Something important&ensp;</span>
                            </div>
                            <div className="py-2">
                                <h6 >Something important</h6>
                                <span className="text-muted">&emsp;Something important&ensp;</span>
                            </div>

                        </div>


                    </div>
                </div>
                <Button variant="primary" className="mt-3">Aplicar a oferta</Button>

            </Col>
        </Row>
        <Footer />
    </>
    )
};

export default OfferDetails;
