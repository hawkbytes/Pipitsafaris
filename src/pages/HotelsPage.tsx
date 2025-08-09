import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import HotelFilterHeader from '../components/HotelFilterHeader';
import HotelCards from '../components/HotelCards';
import HotelMap from '../components/HotelMap';
import './HotelsPage.css';

const HotelsPage: React.FC = () => {
  const [focusedHotel, setFocusedHotel] = useState<{ lat: number; lng: number } | undefined>();

  // Hotel data (matching the HotelCards component)
  const hotels = [
    {
      id: 'p511',
      slug: 'tarangire-elephant-springs',
      name: 'Tarangire Elephant Springs',
      type: 'Lodge',
      category: 'Luxury',
      coordinates: { lat: -3.6509, lng: 36.0228 }
    },
    {
      id: 'p512',
      slug: 'sandies-baobab-beach-zanzibar',
      name: 'Sandies Baobab Beach Zanzibar',
      type: 'Resort',
      category: 'Luxury',
      coordinates: { lat: -6.1659, lng: 39.2026 }
    },
    {
      id: 'p513',
      slug: 'ameg-lodge',
      name: 'Ameg Lodge',
      type: 'Lodge',
      category: 'Value',
      coordinates: { lat: -2.3333, lng: 34.8333 }
    },
    {
      id: 'p514',
      slug: 'lake-naivasha-simba-lodge',
      name: 'Lake Naivasha Simba Lodge',
      type: 'Lodge',
      category: 'Comfort',
      coordinates: { lat: -0.7667, lng: 36.3667 }
    }
  ];

  const handleMapFocus = (coordinates: { lat: number; lng: number }) => {
    setFocusedHotel(coordinates);
  };

  const handleMarkerClick = (hotel: any) => {
    // You can add additional functionality here, like opening hotel details
    console.log('Hotel marker clicked:', hotel.name);
  };

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

          {/* Main Content Area - Cards and Map Side by Side */}
          <Row className="mb-5">
            <Col lg={7} className="mb-4 mb-lg-0">
              <div className="hotels-content">
                <HotelCards onMapFocus={handleMapFocus} />
              </div>
            </Col>
            <Col lg={5}>
              <div className="map-content">
                <HotelMap 
                  hotels={hotels}
                  focusedHotel={focusedHotel}
                  onMarkerClick={handleMarkerClick}
                />
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
