import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';

import '../styles/bodyInfo.css';

const OfferDetails = () => {
  const { id } = useParams();
  const [offer, setOffer] = useState(null);

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/aplicant_employee_api/api/v1/ofertas/${id}`);
        setOffer(response.data);
      } catch (error) {
        console.error('Error al obtener la oferta:', error);
      }
    };

    fetchOffer();
  }, [id]);

  if (!offer) {
    return null; // Mostrar un indicador de carga o un mensaje mientras se obtiene la oferta
  }

  return (
    <>
      <Header />
      <Row id="bodyInfoContainer">
        <Col className="mx-auto my-5" xs={12} md={6}>
          <h2 className="text-center p-3">{offer.nombre}</h2>
          <div className="d-flex flex-xs-wrap">
            <div className="flex-fill px-5">
              <h4>Descripción</h4>
              <p>{offer.descripcion}</p>
            </div>
            <div className="flex-fill text-nowrap px-5">
              <h4>Detalles</h4>
              <div className="flex-row pt-2">
                <div className="py-2">
                  <h6>Fecha de inicio</h6>
                  <span className="text-muted">&emsp;{offer.fechaInicio}&ensp;</span>
                </div>
                <div className="py-2">
                  <h6>Salario</h6>
                  <span className="text-muted">&emsp;{offer.salario}&ensp;</span>
                </div>
                <div className="py-2">
                  <h6>Experiencia requerida</h6>
                  <span className="text-muted">&emsp;{offer.experienciaAnos}&ensp;</span>
                </div>
                <div className="py-2">
                  <h6>Vacantes</h6>
                  <span className="text-muted">&emsp;{offer.vacantes}&ensp;</span>
                </div>
              </div>
            </div>
          </div>
          <Button variant="primary" className="mt-3">
            Aplicar a oferta
          </Button>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default OfferDetails;
