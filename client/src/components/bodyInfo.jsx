import React, { useEffect, useState } from 'react';
import { Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/offer.css';

const Offer = ({ offer }) => {
  return (
    <Link to={`/offer/${offer.id}`}>
      <Card style={{ width: '18rem' }} className="offer-card">
        <Card.Body>
          <Card.Title>{offer.nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Salario: {offer.salario}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Años de experiencia: {offer.experienciaAnos}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Link>
  );
};

const BodyInfo = () => {
  const [offers, setOffers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filterOption, setFilterOption] = useState('Nombre');

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

  const filteredOffers = offers.filter((offer) => {
    switch (filterOption) {
      case 'Nombre':
        return offer.nombre.toLowerCase().includes(searchText.toLowerCase());
      case 'Salario':
        return parseFloat(offer.salario) >= parseFloat(searchText);
      case 'Experiencia':
        return parseInt(offer.experienciaAnos) <= parseInt(searchText);
      case 'Vacantes':
        return parseInt(offer.vacantes) >= parseInt(searchText);
      default:
        return true;
    }
  });

  // Divide las ofertas en grupos de 3
  const groupedOffers = [];
  for (let i = 0; i < filteredOffers.length; i += 3) {
    groupedOffers.push(filteredOffers.slice(i, i + 3));
  }

  return (
    <div className="offer-container">
      <div className="search-filter-container">
        <input
            type="text"
            placeholder="Buscar..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className='custom-input'
        />
        <select
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
        >
            <option value="Nombre">Nombre</option>
            <option value="Salario">Salario</option>
            <option value="Experiencia">Experiencia</option>
            <option value="Vacantes">Vacantes</option>
        </select>
        </div>

      <h2>Ofertas de trabajo activas</h2>
      <Container className="carousel-container">
        <Carousel
          prevLabel={<span className="carousel-arrow carousel-arrow-green">&#8249;</span>}
          nextLabel={<span className="carousel-arrow carousel-arrow-green">&#8250;</span>}
        >
          {groupedOffers.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {group.map((offer) => (
                  <Col key={offer.id}>
                    <Offer offer={offer} />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
      {filteredOffers.length === 0 && (
        <p>No se encontraron coincidencias.</p>
      )}
    </div>
  );
};

export default BodyInfo;