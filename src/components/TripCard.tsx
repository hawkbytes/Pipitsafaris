import React from 'react';
import { Card, Col, Badge } from 'react-bootstrap';
import {
  MapImage,
  TripTitle,
  TripDescription,
  PriceAmount,
  PriceUnit,
  MetaDot
} from '../styles/TripCardStyles';

interface TripCardProps {
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

const TripCard: React.FC<TripCardProps> = ({
  id,
  title,
  duration,
  location,
  description,
  price,
  currency,
  mapImageUrl,
  slug,
  tags = [],
}) => {
  const tripUrl = `/trips/${id}/${slug}`;

  // Default tags based on trip type
  const defaultTags = [
    'Mountain Climbing',
    'Active',
    'Photography',
    'Solo',
    'Couples',
    'Family',
    'Friends'
  ];

  const displayTags = tags.length > 0 ? tags : defaultTags;

  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Card className="h-100 shadow-sm border-0 overflow-hidden">
        <div className="position-relative">
          <a href={tripUrl} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <div className="ratio ratio-16x9">
              <MapImage
                src={mapImageUrl}
                alt="Trip Route Map"
                loading="lazy"
                className="card-img-top object-fit-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.objectFit = 'contain';
                  target.style.backgroundColor = '#f3f4f6';
                }}
              />
            </div>
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-b from-transparent to-dark opacity-0 hover-opacity-25 transition-opacity"></div>
          </a>
        </div>
        
        <Card.Body className="d-flex flex-column">
          <a href={tripUrl} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
            <TripTitle className="card-title h5 mb-2 fw-bold">{title}</TripTitle>
            
            <div className="d-flex align-items-center text-muted small mb-3">
              <span>{duration}</span>
              <MetaDot className="mx-2" />
              <span>{location}</span>
            </div>
            
            <TripDescription className="card-text text-muted mb-3 flex-grow-1">
              {description}
            </TripDescription>
            
            <div className="mb-3">
              <div className="d-flex flex-wrap gap-1">
                {displayTags.slice(0, 4).map((tag, index) => (
                  <Badge key={index} bg="light" text="dark" className="small">
                    {tag}
                  </Badge>
                ))}
                {displayTags.length > 4 && (
                  <Badge bg="secondary" className="small">
                    +{displayTags.length - 4} more
                  </Badge>
                )}
              </div>
            </div>
            
            <hr className="my-3" />
            
            <div className="mt-auto">
              <div className="text-muted small mb-1">Starting at</div>
              <div className="d-flex justify-content-between align-items-center">
                <PriceAmount className="h5 mb-0 fw-bold text-primary">
                  ${price.toLocaleString()} <span className="text-muted small">{currency}</span>
                </PriceAmount>
                <PriceUnit className="text-muted small">per person</PriceUnit>
              </div>
            </div>
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TripCard;
