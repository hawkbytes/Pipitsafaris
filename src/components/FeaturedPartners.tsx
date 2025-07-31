import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FeaturedPartners: React.FC = () => {
  return (
    <div className="w-100 d-flex flex-column align-items-center bg-light py-5">
      <Container style={{ maxWidth: '1200px' }}>
        <div className="bg-light rounded-3 w-100 d-flex flex-column align-items-center gap-0 px-4 py-5">
          <h2 className="text-center h2 fw-bold mx-auto" style={{ maxWidth: '50%' }}>
            Our accommodation partners have been featured in...
          </h2>
          
          <Row className="w-100 justify-content-center align-items-center mt-4 g-4">
            <Col xs={12} md={6} lg={2} className="text-center">
              <img 
                src="https://static.cloudsafaris.com/public/TheNewYorkTimes.png?action=get" 
                alt="New York Times" 
                className="img-fluid"
                style={{ 
                  maxHeight: '64px', 
                  width: '100%', 
                  objectFit: 'contain' 
                }}
              />
            </Col>
            <Col xs={12} md={6} lg={2} className="text-center">
              <img 
                src="https://static.cloudsafaris.com/public/WSJ.png?action=get" 
                alt="Wall Street Journal" 
                className="img-fluid"
                style={{ 
                  maxHeight: '64px', 
                  width: '100%', 
                  objectFit: 'contain' 
                }}
              />
            </Col>
            <Col xs={12} md={6} lg={2} className="text-center">
              <img 
                src="https://static.cloudsafaris.com/public/NationalGeographic.png?action=get" 
                alt="National Geographic" 
                className="img-fluid"
                style={{ 
                  maxHeight: '64px', 
                  width: '100%', 
                  objectFit: 'contain' 
                }}
              />
            </Col>
            <Col xs={12} md={6} lg={2} className="text-center">
              <img 
                src="https://static.cloudsafaris.com/public/Forbes.png?action=get" 
                alt="Forbes" 
                className="img-fluid"
                style={{ 
                  maxHeight: '64px', 
                  width: '100%', 
                  objectFit: 'contain' 
                }}
              />
            </Col>
            <Col xs={12} md={6} lg={2} className="text-center">
              <img 
                src="https://static.cloudsafaris.com/public/TheTimes.png?action=get" 
                alt="The Times" 
                className="img-fluid"
                style={{ 
                  maxHeight: '64px', 
                  width: '100%', 
                  objectFit: 'contain' 
                }}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedPartners;
