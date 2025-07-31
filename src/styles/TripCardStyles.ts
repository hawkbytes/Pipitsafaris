import styled from 'styled-components';

// Simplified styled components for Bootstrap integration
export const MapImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.375rem 0.375rem 0 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const TripTitle = styled.h5`
  color: #1a1a1a;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  
  &:hover {
    color: #0066cc;
  }
`;

export const TripDescription = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const MetaDot = styled.span`
  width: 4px;
  height: 4px;
  background-color: #d1d5db;
  border-radius: 50%;
  display: inline-block;
`;

export const PriceAmount = styled.div`
  color: #0066cc;
  font-weight: 700;
  font-size: 1.25rem;
  
  span {
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: 400;
  }
`;

export const PriceUnit = styled.div`
  color: #6b7280;
  font-size: 0.75rem;
`;
