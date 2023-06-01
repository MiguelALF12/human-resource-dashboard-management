import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/offer.css';

const Offer = ({ offer }) => {
  return (
    <Link to={`/offer/${offer.id}`}>
      <Card style={{ width: '18rem' }} className="offer-card">
        <Card.Body>
          <Card.Title>{offer.nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{offer.salario}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{offer.experienciaAnos}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Link>
  );
};

const BodyInfo = () => {
    const [offers, setOffers] = useState([]);
  
    useEffect(() => {
      const fetchOffers = async () => {
        try {
          const response = await axios.get('http://localhost:8000/aplicant_employee_api/api/v1/ofertas/');
          const reversedOffers = response.data.slice().reverse();
          setOffers(reversedOffers);
        } catch (error) {
          console.error('Error al obtener las ofertas:', error);
        }
      };
  
      fetchOffers();
    }, []);
  
    return (
      <div className="offer-container">
        <h2>Ofertas de trabajo activas</h2>
        <div className="offer-grid">
          {offers.map((offer) => (
            <Offer offer={offer} key={offer.id} />
          ))}
        </div>
      </div>
    );
  };
  

export default BodyInfo;
