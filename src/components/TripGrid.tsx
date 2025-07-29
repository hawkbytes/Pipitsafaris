import React from 'react';
import styled from 'styled-components';
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;

const TripGrid: React.FC<TripGridProps> = ({ trips }) => {
  return (
    <GridContainer>
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
    </GridContainer>
  );
};

export default TripGrid;
