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
`;

const GoogleMapDiv = styled.div`
  width: 100%;
  height: 100%;
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
    fill: #333;
  }
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  z-index: 10;
`;

const LoadingText = styled.div`
  font-size: 1rem;
  color: #6b7280;
  text-align: center;
`;

const ErrorMessage = styled.div`
  background: #fee2e2;
  color: #dc2626;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  margin: 1rem;
`;

// Declare global google variable
declare global {
  interface Window {
    google: any;
    initGoogleMaps: () => void;
  }
}

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

const HotelMap: React.FC<HotelMapProps> = ({ hotels, focusedHotel, onMarkerClick }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load Google Maps script
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (window.google) {
        initializeMap();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initGoogleMaps`;
      script.async = true;
      script.defer = true;
      
      window.initGoogleMaps = () => {
        initializeMap();
      };

      script.onerror = () => {
        setError('Failed to load Google Maps. Please check your API key.');
        setIsLoading(false);
      };

      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current) return;

      try {
        // Create map centered on Tanzania/Kenya region
        const mapInstance = new window.google.maps.Map(mapRef.current, {
          zoom: 6,
          center: { lat: -3.0, lng: 37.0 }, // Tanzania/Kenya region
          styles: [
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#a2daf2' }]
            },
            {
              featureType: 'landscape',
              elementType: 'geometry',
              stylers: [{ color: '#f5f5f2' }]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{ color: '#ffffff' }]
            }
          ],
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          zoomControl: false
        });

        setMap(mapInstance);
        createMarkers(mapInstance);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to initialize map');
        setIsLoading(false);
      }
    };

    loadGoogleMapsScript();
  }, []);

  // Create markers for hotels
  const createMarkers = (mapInstance: any) => {
    const newMarkers = hotels.map((hotel) => {
      const marker = new window.google.maps.Marker({
        position: hotel.coordinates,
        map: mapInstance,
        title: hotel.name,
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="8" fill="#059669" stroke="white" stroke-width="3"/>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(24, 24),
          anchor: new window.google.maps.Point(12, 12)
        }
      });

      // Add click listener
      marker.addListener('click', () => {
        onMarkerClick?.(hotel);
      });

      // Create info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; font-family: Arial, sans-serif;">
            <h3 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 600;">${hotel.name}</h3>
            <p style="margin: 0; font-size: 12px; color: #666;">${hotel.type} • ${hotel.category}</p>
          </div>
        `
      });

      marker.addListener('click', () => {
        // Close other info windows
        markers.forEach(m => m.infoWindow?.close());
        infoWindow.open(mapInstance, marker);
      });

      marker.infoWindow = infoWindow;
      return marker;
    });

    setMarkers(newMarkers);
  };

  // Update marker styles when focusedHotel changes
  useEffect(() => {
    if (!map || markers.length === 0) return;

    markers.forEach((marker, index) => {
      const hotel = hotels[index];
      const isFocused = focusedHotel && 
        Math.abs(hotel.coordinates.lat - focusedHotel.lat) < 0.1 && 
        Math.abs(hotel.coordinates.lng - focusedHotel.lng) < 0.1;

      const color = isFocused ? '#dc2626' : '#059669';
      
      marker.setIcon({
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="${isFocused ? '12' : '10'}" fill="${color}" stroke="white" stroke-width="3"/>
            ${isFocused ? '<circle cx="16" cy="16" r="4" fill="white"/>' : ''}
          </svg>
        `),
        scaledSize: new window.google.maps.Size(32, 32),
        anchor: new window.google.maps.Point(16, 16)
      });

      if (isFocused) {
        map.panTo(hotel.coordinates);
        map.setZoom(8);
      }
    });
  }, [focusedHotel, map, markers, hotels]);

  const handleZoomIn = () => {
    if (map) {
      const currentZoom = map.getZoom();
      map.setZoom(currentZoom + 1);
    }
  };

  const handleZoomOut = () => {
    if (map) {
      const currentZoom = map.getZoom();
      map.setZoom(currentZoom - 1);
    }
  };

  const resetMapView = () => {
    if (map) {
      map.setCenter({ lat: -3.0, lng: 37.0 });
      map.setZoom(6);
    }
  };

  if (error) {
    return (
      <MapContainer>
        <ErrorMessage>
          <strong>Map Error:</strong> {error}
          <br />
          <small>Please ensure you have a valid Google Maps API key configured.</small>
        </ErrorMessage>
      </MapContainer>
    );
  }

  return (
    <MapContainer>
      {isLoading && (
        <LoadingOverlay>
          <LoadingText>Loading map...</LoadingText>
        </LoadingOverlay>
      )}
      
      <GoogleMapDiv ref={mapRef} />
      
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
