import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

const DestinationsPage: React.FC = () => {
  return (
    <>
      <PageHeader />
      <div style={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
        <Container fluid className="px-3 px-md-5">
          {/* Page Header */}
          <Row className="mt-4 mb-5">
            <Col>
              <div className="text-center" style={{ padding: '2rem 0' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '600', color: '#1a1a1a', marginBottom: '1rem' }}>
                  Destinations
                </h1>
                <p className="text-muted" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
                  Explore the most breathtaking safari destinations across Africa
                </p>
              </div>
            </Col>
          </Row>

          {/* Main Content Area */}
          <Row className="mb-5">
            <Col>
              <div style={{ 
                minHeight: '400px', 
                backgroundColor: 'white', 
                borderRadius: '0.5rem', 
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', 
                padding: '2rem' 
              }}>
                <div className="text-center py-5">
                  <h3>Destinations content coming soon...</h3>
                  <p className="text-muted">
                    We're working on bringing you detailed information about the most amazing safari destinations in Africa.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default DestinationsPage;
