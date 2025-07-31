import React from 'react';
import { Button } from 'react-bootstrap';

interface Hotel {
  name: string;
  type: string;
  category: string;
  image: string;
  meals?: string;
}

interface HotelTabProps {
  hotel: Hotel;
}

const HotelTab: React.FC<HotelTabProps> = ({ hotel }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', color: '#1a1a1a' }}>
      <div style={{
        width: '100%',
        height: '300px',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        marginBottom: '1rem'
      }}>
        <img 
          src={hotel.image} 
          alt={hotel.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      
      <h4 style={{
        fontSize: '1.25rem',
        fontWeight: 500,
        marginBottom: '0.5rem',
        color: '#1a1a1a',
        paddingTop: '1rem'
      }}>
        {hotel.name}
      </h4>
      
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '2rem',
        paddingTop: '0.5rem',
        marginBottom: '1rem'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem'
        }}>
          <i className="fas fa-hotel" style={{ fontSize: '0.875rem', color: '#1a1a1a' }}></i>
          <span style={{ fontSize: '1rem', color: '#1a1a1a' }}>{hotel.type}</span>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem'
        }}>
          <i className="fas fa-utensils" style={{ fontSize: '0.875rem', color: '#1a1a1a' }}></i>
          <span style={{ fontSize: '1rem', color: '#1a1a1a' }}>{hotel.meals || ''}</span>
        </div>
      </div>
      
      <div style={{ paddingTop: '1rem' }}>
        <p style={{
          fontSize: '1rem',
          lineHeight: 1.6,
          color: '#1a1a1a',
          marginBottom: '0.5rem'
        }}>
          Located on the Southern slopes of Kilimanjaro near Moshi, Tanzania, Springlands Hotel serves as an optimal starting point for mountain walking excursions and safaris to Kilimanjaro and various Northern...
        </p>
        <Button 
          variant="link" 
          style={{
            fontWeight: 500,
            textDecoration: 'underline',
            padding: '0.5rem 0 0 0',
            color: '#1a1a1a',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            marginTop: '0.5rem'
          }}
        >
          Show more
          <i className="fas fa-chevron-down ms-2" style={{ fontSize: '0.875rem', marginLeft: '0.375rem' }}></i>
        </Button>
      </div>
      
      <div style={{ display: 'flex', paddingTop: '1rem' }}>
        <Button style={{
          fontWeight: 500,
          fontSize: '0.875rem',
          color: '#1a1a1a',
          backgroundColor: 'rgba(243, 244, 246, 0.5)',
          border: 'none',
          borderRadius: '0.375rem',
          padding: '0.5rem 1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          width: 'fit-content',
          transition: 'background-color 0.2s ease'
        }}>
          <span>View hotel</span>
          <i className="fas fa-chevron-right" style={{ fontSize: '0.75rem' }}></i>
        </Button>
      </div>
    </div>
  );
};

export default HotelTab;
