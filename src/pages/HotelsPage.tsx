import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import HotelFilterHeader from '../components/HotelFilterHeader';
import HotelCards from '../components/HotelCards';
import './HotelsPage.css';

const HotelsPage: React.FC = () => {
  return (
    <>
      <PageHeader />
      <HotelFilterHeader />
      <div className="hotels-page">
        <Container fluid className="px-3 px-md-5">
          {/* Page Header */}
          <Row className="mt-4 mb-5">
            <Col>
              <div className="page-header text-center">
                <h1 className="page-title">Hotels</h1>
                <p className="page-subtitle text-muted">
                  Discover comfortable accommodations for your safari adventure
                </p>
              </div>
            </Col>
          </Row>

          {/* Main Content Area */}
          <Row className="mb-5">
            <Col>
              <div className="hotels-content">
                <HotelCards />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default HotelsPage;
