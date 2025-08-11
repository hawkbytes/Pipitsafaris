import React, { useState } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  height: 600px;
  background: linear-gradient(135deg, #a8e6cf 0%, #88d8a3 100%);
  border-radius: 0.75rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

const MapOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ffffff" stroke-width="0.5" opacity="0.3"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  border-radius: 0.75rem;
`;

const MapControls = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 1000;
`;

const MapButton = styled.button`
  width: 40px;
  height: 40px;
  background: white;
  border: none;
  border-radius: 0.375rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f8f9fa;
    transform: scale(1.05);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #666;
  }
`;

const HotelMarker = styled.div<{ x: number; y: number; isActive?: boolean }>`
  position: absolute;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  width: 24px;
  height: 24px;
  background: ${props => props.isActive ? '#ef4444' : '#3b82f6'};
  border: 3px solid white;
  border-radius: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translate(-50%, -50%) scale(1.2);
    z-index: 101;
  }

  &::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 50%;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid ${props => props.isActive ? '#ef4444' : '#3b82f6'};
    transform: translateX(-50%);
  }
`;

const MarkerTooltip = styled.div<{ show: boolean }>`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 500;
  opacity: ${props => props.show ? 1 : 0};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: all 0.2s ease;
  z-index: 102;
  margin-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid white;
    transform: translateX(-50%);
  }
`;

const MapTitle = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: white;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  color: #374151;
  z-index: 100;
`;

interface Hotel {
  id: string;
  name: string;
  type: string;
  category: string;
  coordinates: { lat: number; lng: number };
}

interface HotelMapProps {
  hotels: Hotel[];
  focusedHotel?: { lat: number; lng: number };
  onMarkerClick?: (hotel: Hotel) => void;
}

const HotelMap: React.FC<HotelMapProps> = ({ hotels, focusedHotel, onMarkerClick }) => {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  // Convert lat/lng to percentage positions for display
  const getMarkerPosition = (hotel: Hotel) => {
    // Tanzania/Kenya region bounds (approximate)
    const bounds = {
      north: 5,
      south: -12,
      east: 42,
      west: 28
    };

    const x = ((hotel.coordinates.lng - bounds.west) / (bounds.east - bounds.west)) * 100;
    const y = ((bounds.north - hotel.coordinates.lat) / (bounds.north - bounds.south)) * 100;

    return { x: Math.max(10, Math.min(90, x)), y: Math.max(10, Math.min(90, y)) };
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const resetMapView = () => {
    setZoom(1);
  };

  const isFocused = (hotel: Hotel) => {
    if (!focusedHotel) return false;
    return Math.abs(hotel.coordinates.lat - focusedHotel.lat) < 0.1 &&
           Math.abs(hotel.coordinates.lng - focusedHotel.lng) < 0.1;
  };

  return (
    <MapContainer>
      <MapOverlay style={{ transform: `scale(${zoom})` }} />
      
      <MapTitle>
        Safari Hotels Map
      </MapTitle>
      
      {hotels.map((hotel) => {
        const position = getMarkerPosition(hotel);
        const isActive = isFocused(hotel);
        
        return (
          <HotelMarker
            key={hotel.id}
            x={position.x}
            y={position.y}
            isActive={isActive}
            onMouseEnter={() => setHoveredMarker(hotel.id)}
            onMouseLeave={() => setHoveredMarker(null)}
            onClick={() => onMarkerClick?.(hotel)}
            style={{ transform: `translate(-50%, -50%) scale(${zoom})` }}
          >
            <MarkerTooltip show={hoveredMarker === hotel.id}>
              {hotel.name}
            </MarkerTooltip>
          </HotelMarker>
        );
      })}
      
      <MapControls>
        <MapButton onClick={handleZoomIn} title="Zoom In">
          <svg viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </MapButton>
        <MapButton onClick={handleZoomOut} title="Zoom Out">
          <svg viewBox="0 0 24 24">
            <path d="M19 13H5v-2h14v2z"/>
          </svg>
        </MapButton>
        <MapButton onClick={resetMapView} title="Reset View">
          <svg viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
        </MapButton>
      </MapControls>
    </MapContainer>
  );
};

export default HotelMap;
