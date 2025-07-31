import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

interface Hotel {
  name: string;
  type: string;
  category: string;
  image: string;
  meals?: string;
}

interface OverviewTabProps {
  title: string;
  description: string;
  hotel?: Hotel;
  note?: string;
}

const OverviewTab: React.FC<OverviewTabProps> = ({
  title,
  description,
  hotel,
  note
}) => {
  return (
    <div>
      <h4 style={{ fontSize: '1.125rem', fontWeight: 500, marginBottom: '0.75rem', color: '#1a1a1a' }}>
        {title}
      </h4>
      <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#1a1a1a', marginBottom: '1.5rem' }}>
        {description}
      </p>

      {/* Hotel Information */}
      {hotel && (
        <div style={{ marginTop: '1.5rem', width: '100%' }}>
          <Row className="align-items-center g-2 g-sm-4">
            <Col xs={12} sm={4} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                position: 'relative',
                minHeight: '13rem',
                width: '100%',
                aspectRatio: '1',
                backgroundColor: '#f8f9fa',
                borderRadius: '0.75rem',
                overflow: 'hidden'
              }}>
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </Col>
            <Col xs={12} sm={8} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                padding: '0.5rem 0'
              }}>
                <div style={{
                  display: 'none',
                  color: '#6b7280',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  marginBottom: '0.25rem'
                }}>
                  {hotel.type.toUpperCase()}
                </div>
                <h5 style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  marginBottom: '0.5rem',
                  color: '#1a1a1a'
                }}>
                  {hotel.name}
                </h5>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  marginBottom: '0.5rem'
                }}>
                  <span>{hotel.type}</span>
                  <div style={{
                    width: '3px',
                    height: '3px',
                    backgroundColor: '#6b7280',
                    borderRadius: '50%'
                  }} />
                  <span>{hotel.category}</span>
                </div>
                {hotel.meals && (
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#6b7280',
                    marginBottom: '0.5rem'
                  }}>
                    {hotel.meals}
                  </p>
                )}
                <div style={{ display: 'flex', paddingTop: '0.5rem' }}>
                  <Button 
                    variant="link" 
                    style={{
                      fontWeight: 500,
                      fontSize: '1rem',
                      color: '#1a1a1a',
                      textDecoration: 'underline',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      width: 'fit-content',
                      padding: 0,
                      border: 'none',
                      background: 'none'
                    }}
                  >
                    <span>View hotel</span>
                    <i className="fas fa-chevron-right"></i>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}

      {/* Day Note */}
      {note && (
        <div style={{
          marginTop: '1.5rem',
          padding: '1rem',
          borderRadius: '0.5rem',
          backgroundColor: 'rgba(243, 244, 246, 0.5)',
          color: '#1a1a1a',
          fontSize: '0.875rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem',
            marginBottom: '0.5rem'
          }}>
            <i className="fas fa-circle-exclamation" style={{
              fontSize: '0.75rem',
              marginBottom: '0.25rem',
              color: '#1a1a1a'
            }}></i>
            <strong style={{
              fontWeight: 500,
              paddingBottom: '0.25rem',
              color: '#1a1a1a'
            }}>Note</strong>
          </div>
          <p style={{
            margin: 0,
            lineHeight: 1.5,
            fontSize: '1rem',
            color: '#1a1a1a'
          }}>
            {note}
          </p>
        </div>
      )}
    </div>
  );
};

export default OverviewTab;
