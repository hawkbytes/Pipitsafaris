import React from 'react';
import styled from 'styled-components';

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

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
  flex-shrink: 0;
  
  @media (min-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
  
  @media (min-width: 1024px) {
   width: 100%;
    max-width: 100%;
  }
`;

const MapLinkContainer = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 365px;
  overflow: hidden;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  background-color: #f5f5f5;
  
  @media (min-width: 1024px) {
    // height: 280px;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const MapImageContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 365px;
`;

const MapImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 365px;
  border-radius: 0.75rem;
  transition: opacity 0.3s ease;
  opacity: 1;
`;

const MapBorder = styled.div`
  position: absolute;
  inset: 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.75rem;
`;

const ContentLinkContainer = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

const TripTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: #171717;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0.25rem;
  
  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

const TripMetaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.375rem;
  color: #171717;
  font-size: 0.875rem;
  
  @media (min-width: 1280px) {
    font-size: 1rem;
  }
`;

const MetaDot = styled.div`
  height: 3px;
  width: 3px;
  background-color: #171717;
  border-radius: 50%;
`;

const TripDescription = styled.div`
  font-size: 0.75rem;
  color: #525252;
  margin-top: 0.5rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (min-width: 1280px) {
    font-size: 0.875rem;
  }
`;

const TagsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const TagsInner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: #f3f4f6;
  color: #374151;
  font-size: 0.75rem;
  // padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  white-space: nowrap;
  font-weight: 500;
  
  &:hover {
    background-color: #e5e7eb;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #fafafa;
  width: 100%;
  margin: 1rem 0;
  display: none;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 0.5rem;
`;

const PriceLabel = styled.div`
  font-size: 0.75rem;
  line-height: 1;
  color: #171717;
  margin-bottom: 0.25rem;
`;

const PriceRow = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: flex-end;
`;

const PriceAmount = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
  color: #171717;
  
  @media (min-width: 1280px) {
    font-size: 1.25rem;
  }
`;

const PriceUnit = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.875rem;
  line-height: 1;
  margin-bottom: 0.375rem;
  color: #525252;
`;

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
    <CardContainer>
      <MapLinkContainer href={tripUrl} target="_blank">
        <MapImageContainer>
          <MapImage
            src={mapImageUrl}
            alt="Trip Route Map"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.objectFit = 'contain';
              target.style.backgroundColor = '#f3f4f6';
            }}
          />
        </MapImageContainer>
        <MapBorder />
      </MapLinkContainer>
      
      <ContentLinkContainer href={tripUrl} target="_blank">
        <TripTitle>{title}</TripTitle>
        
        <TripMetaContainer>
          <div>{duration}</div>
          <MetaDot />
          <div>{location}</div>
        </TripMetaContainer>
        
        <TripDescription>{description}</TripDescription>
        
        <TagsContainer>
          <TagsInner>
            {displayTags.slice(0, 7).map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagsInner>
        </TagsContainer>
        
        <Divider />
        
        <PriceContainer>
          <PriceLabel>Starting at</PriceLabel>
          <PriceRow>
            <PriceAmount>
              ${price.toLocaleString()} <span>{currency}</span>
            </PriceAmount>
            <PriceUnit>per person</PriceUnit>
          </PriceRow>
        </PriceContainer>
      </ContentLinkContainer>
    </CardContainer>
  );
};

export default TripCard;
