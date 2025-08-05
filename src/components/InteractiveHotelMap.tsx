import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  height: 600px;
  background: #f8f9fa;
  border-radius: 0.75rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
`;

const MapWrapper = styled.div<{ zoom: number; panX: number; panY: number }>`
  width: 100%;
  height: 100%;
  position: relative;
  transform: scale(${props => props.zoom}) translate(${props => props.panX}px, ${props => props.panY}px);
  transition: transform 0.3s ease;
  cursor: grab;
  
  &:active {
    cursor: grabbing;
  }
`;

const MapBackground = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #a2daf2 0%, #e8f5e8 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 30% 20%, rgba(139, 195, 74, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(76, 175, 80, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 85% 30%, rgba(46, 125, 50, 0.1) 0%, transparent 40%);
  }
`;

const MapMarker = styled.div<{ lat: number; lng: number; active?: boolean; zoom: number }>`
  position: absolute;
  width: ${props => props.active ? '32px' : '24px'};
  height: ${props => props.active ? '32px' : '24px'};
  background: ${props => props.active ? '#dc2626' : '#059669'};
  border: 3px solid white;
  border-radius: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 20;
  
  /* Convert real coordinates to pixel positions */
  top: ${props => 50 - (props.lat * 8)}%;
  left: ${props => 50 + (props.lng * 2.2)}%;
  
  &:hover {
    transform: translate(-50%, -50%) scale(1.2);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  }

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid ${props => props.active ? '#dc2626' : '#059669'};
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${props => props.active ? '12px' : '8px'};
    height: ${props => props.active ? '12px' : '8px'};
    background: white;
    border-radius: 50%;
    opacity: ${props => props.active ? 1 : 0.8};
  }
`;

const MapTooltip = styled.div<{ show: boolean }>`
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
  margin-bottom: 0.5rem;
  opacity: ${props => props.show ? 1 : 0};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: all 0.2s ease;
  z-index: 30;
  border: 1px solid #e5e7eb;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid white;
  }
`;

const MapControls = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 100;
`;

const MapButton = styled.button`
  width: 44px;
  height: 44px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f8f9fa;
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #374151;
  }
`;

const MapLegend = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: white;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
  border: 1px solid #e5e7eb;
`;

const LegendTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 700;
  margin: 0 0 0.75rem 0;
  color: #1f2937;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;

  &:last-child {
    margin-bottom: 0;
  }
`;

const LegendDot = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  background: ${props => props.color};
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
`;

const ZoomIndicator = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: white;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
  z-index: 100;
  border: 1px solid #e5e7eb;
`;

interface Hotel {
  id: string;
  slug: string;
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

const InteractiveHotelMap: React.FC<HotelMapProps> = ({ hotels, focusedHotel, onMarkerClick }) => {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const [mapZoom, setMapZoom] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const mapRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => {
    setMapZoom(prev => Math.min(prev + 0.3, 2.5));
  };

  const handleZoomOut = () => {
    setMapZoom(prev => Math.max(prev - 0.3, 0.5));
  };

  const resetMapView = () => {
    setMapZoom(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - panPosition.x,
      y: e.clientY - panPosition.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    setPanPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const isHotelFocused = (hotel: Hotel) => {
    return focusedHotel && 
           Math.abs(hotel.coordinates.lat - focusedHotel.lat) < 0.1 && 
           Math.abs(hotel.coordinates.lng - focusedHotel.lng) < 0.1;
  };

  // Auto-focus on hotel when focusedHotel changes
  useEffect(() => {
    if (focusedHotel) {
      // Center map on focused hotel
      const targetX = -(focusedHotel.lng * 2.2 * mapZoom);
      const targetY = (focusedHotel.lat * 8 * mapZoom);
      
      setPanPosition({ x: targetX, y: targetY });
      setMapZoom(1.5);
    }
  }, [focusedHotel]);

  return (
    <MapContainer>
      <ZoomIndicator>
        Zoom: {Math.round(mapZoom * 100)}%
      </ZoomIndicator>

      <MapWrapper 
        ref={mapRef}
        zoom={mapZoom} 
        panX={panPosition.x} 
        panY={panPosition.y}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <MapBackground />
        
        {hotels.map((hotel) => (
          <MapMarker
            key={hotel.id}
            lat={hotel.coordinates.lat}
            lng={hotel.coordinates.lng}
            active={isHotelFocused(hotel)}
            zoom={mapZoom}
            onMouseEnter={() => setHoveredMarker(hotel.id)}
            onMouseLeave={() => setHoveredMarker(null)}
            onClick={(e) => {
              e.stopPropagation();
              onMarkerClick?.(hotel);
            }}
          >
            <MapTooltip show={hoveredMarker === hotel.id}>
              {hotel.name}
            </MapTooltip>
          </MapMarker>
        ))}
      </MapWrapper>

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
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </MapButton>
      </MapControls>

      <MapLegend>
        <LegendTitle>Safari Lodges</LegendTitle>
        <LegendItem>
          <LegendDot color="#059669" />
          <span>Available Lodges</span>
        </LegendItem>
        <LegendItem>
          <LegendDot color="#dc2626" />
          <span>Selected Lodge</span>
        </LegendItem>
      </MapLegend>
    </MapContainer>
  );
};

export default InteractiveHotelMap;
