import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TripCard from './TripCard';

interface Trip {
  id: string;
  title: string;
  duration: string;
  location: string;
  description: string;
  price: number;
  currency: string;
  mapImageUrl: string;
  slug: string;
  tags?: string[];
}

interface TripGridProps {
  trips: Trip[];
}

const TripGrid: React.FC<TripGridProps> = ({ trips }) => {
  return (
    <Container fluid>
      <Row className="g-4">
        {trips.map((trip) => (
          <TripCard
            key={trip.id}
            id={trip.id}
            title={trip.title}
            duration={trip.duration}
            location={trip.location}
            description={trip.description}
            price={trip.price}
            currency={trip.currency}
            mapImageUrl={trip.mapImageUrl}
            slug={trip.slug}
            tags={trip.tags}
          />
        ))}
      </Row>
    </Container>
  );
};

export default TripGrid;
