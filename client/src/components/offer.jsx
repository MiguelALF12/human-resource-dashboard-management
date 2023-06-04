import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/offer.css';

const Offer = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    // Función asincrónica para cargar los datos de la API
    const fetchOffers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/aplicant_employee_api/api/v1/ofertas/');
        setOffers(response.data);
      } catch (error) {
        console.error('Error al obtener las ofertas:', error);
      }
    };

    fetchOffers();
  }, []);

  return (
    <>
      {offers.map((offer) => (
        <Link to={`/offer/${offer.id}`} key={offer.id}>
          <Card style={{ width: '18rem' }} id="offer">
            <Card.Body>
              <Card.Title>{offer.nombre}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{offer.salario}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">{offer.experienciaAnos}</Card.Subtitle>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default Offer;
