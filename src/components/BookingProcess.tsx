import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const BookingProcess: React.FC = () => {
  return (
    <Container fluid className="py-5" style={{ maxWidth: '1200px' }}>
      <Row className="py-5">
        <Col lg={6} className="pe-lg-5">
          <div className="d-flex flex-column gap-4">
            {/* Header Section */}
            <div className="d-flex flex-column gap-4">
              <div className="d-flex flex-column gap-4">
                <span 
                  className="fw-semibold text-success bg-success bg-opacity-10 rounded-pill px-3 py-2 w-fit small"
                  style={{ width: 'fit-content' }}
                >
                  Booking a trip
                </span>
                <h2 className="display-5 fw-bold">We'll take care of the details. You enjoy the trip.</h2>
                <p className="text-muted">
                  At Pipitsafaris, we saw an issue in the safari industry: an outdated booking experience. 
                  This became evident by a lack of online information and excessive time taken to go from a 
                  dream to a reality. Our goal was to modernize this process and enhance the customer experience.
                </p>
              </div>
              <h3 className="h4 fw-bold pt-3">How it works</h3>
            </div>

            {/* Steps Section */}
            <div className="pt-3">
              <div className="d-flex flex-column">
                {/* Step 1 */}
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div 
                    className="rounded-circle bg-white border-2 d-flex align-items-center justify-center position-relative"
                    style={{ width: '40px', height: '40px', borderColor: '#e5e7eb' }}
                  >
                    <div 
                      className="rounded-circle bg-secondary"
                      style={{ width: '16px', height: '16px' }}
                    ></div>
                  </div>
                  <h4 className="h6 fw-bold mb-0">Choose your safari</h4>
                </div>
                
                <div className="ms-5 ps-3 border-start border-2 border-light mb-4">
                  <h5 className="fw-semibold text-dark mb-3 ms-3">
                    Browse our curated list of safari packages to find your perfect trip.
                  </h5>
                  <div className="d-flex flex-column gap-3 ms-3 pb-4">
                    <div className="d-flex align-items-start gap-3">
                      <div 
                        className="rounded-circle bg-white border-2 border-dark mt-1"
                        style={{ width: '10px', height: '10px', minWidth: '10px' }}
                      ></div>
                      <span className="text-muted small">All accommodations, transfers, food, and guides are included</span>
                    </div>
                    <div className="d-flex align-items-start gap-3">
                      <div 
                        className="rounded-circle bg-white border-2 border-dark mt-1"
                        style={{ width: '10px', height: '10px', minWidth: '10px' }}
                      ></div>
                      <span className="text-muted small">Tailor the trip with activities of your choice</span>
                    </div>
                    <div className="d-flex align-items-start gap-3">
                      <div 
                        className="rounded-circle bg-white border-2 border-dark mt-1"
                        style={{ width: '10px', height: '10px', minWidth: '10px' }}
                      ></div>
                      <span className="text-muted small">Select from an extensive list of incredible properties</span>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div 
                    className="rounded-circle bg-white border-2 d-flex align-items-center justify-center position-relative"
                    style={{ width: '40px', height: '40px', borderColor: '#e5e7eb' }}
                  >
                    <div 
                      className="rounded-circle bg-secondary"
                      style={{ width: '16px', height: '16px' }}
                    ></div>
                  </div>
                  <h4 className="h6 fw-bold mb-0">Pick your dates</h4>
                </div>
                
                <div className="ms-5 ps-3 border-start border-2 border-light mb-4">
                  <h5 className="fw-semibold text-dark mb-3 ms-3">
                    Select dates that are most convenient for you.
                  </h5>
                  <div className="d-flex flex-column gap-3 ms-3 pb-4">
                    <div className="d-flex align-items-start gap-3">
                      <div 
                        className="rounded-circle bg-white border-2 border-dark mt-1"
                        style={{ width: '10px', height: '10px', minWidth: '10px' }}
                      ></div>
                      <span className="text-muted small">Convenient and easy date modifications</span>
                    </div>
                    <div className="d-flex align-items-start gap-3">
                      <div 
                        className="rounded-circle bg-white border-2 border-dark mt-1"
                        style={{ width: '10px', height: '10px', minWidth: '10px' }}
                      ></div>
                      <span className="text-muted small">Travel in high or low season</span>
                    </div>
                    <div className="d-flex align-items-start gap-3">
                      <div 
                        className="rounded-circle bg-white border-2 border-dark mt-1"
                        style={{ width: '10px', height: '10px', minWidth: '10px' }}
                      ></div>
                      <span className="text-muted small">Find a time that works best for what you want to see</span>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div 
                    className="rounded-circle bg-white border-2 d-flex align-items-center justify-center position-relative"
                    style={{ width: '40px', height: '40px', borderColor: '#e5e7eb' }}
                  >
                    <div 
                      className="rounded-circle bg-secondary"
                      style={{ width: '16px', height: '16px' }}
                    ></div>
                  </div>
                  <h4 className="h6 fw-bold mb-0">Confirm and enjoy</h4>
                </div>
                
                <div className="ms-5 ps-3 mb-4">
                  <h5 className="fw-semibold text-dark mb-3 ms-3">
                    Confirm your trip with our safari professionals.
                  </h5>
                  <div className="d-flex flex-column gap-3 ms-3 pb-4">
                    <div className="d-flex align-items-start gap-3">
                      <div 
                        className="rounded-circle bg-white border-2 border-dark mt-1"
                        style={{ width: '10px', height: '10px', minWidth: '10px' }}
                      ></div>
                      <span className="text-muted small">Receive a complimentary personal trip briefing</span>
                    </div>
                    <div className="d-flex align-items-start gap-3">
                      <div 
                        className="rounded-circle bg-white border-2 border-dark mt-1"
                        style={{ width: '10px', height: '10px', minWidth: '10px' }}
                      ></div>
                      <span className="text-muted small">Pay securely by credit card</span>
                    </div>
                    <div className="d-flex align-items-start gap-3">
                      <div 
                        className="rounded-circle bg-white border-2 border-dark mt-1"
                        style={{ width: '10px', height: '10px', minWidth: '10px' }}
                      ></div>
                      <span className="text-muted small">Travel confidently with on-ground support</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  variant="dark" 
                  size="lg" 
                  href="/trips"
                  className="w-fit px-4 py-3 rounded"
                  style={{ width: 'fit-content' }}
                >
                  Book a trip
                </Button>
              </div>
            </div>
          </div>
        </Col>
        
        {/* Images Section - Only visible on large screens */}
        <Col lg={6} className="d-none d-lg-block">
          <div className="position-relative" style={{ height: '520px' }}>
            <img 
              src="https://static.cloudsafaris.com/public/LionPortrait.png?action=get"
              alt="Lion sitting down"
              className="position-absolute rounded shadow"
              style={{
                top: '0',
                left: '0',
                width: '75%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <img 
              src="https://static.cloudsafaris.com/public/4-jabali-ridge-hammock-and-view.jpg?action=get"
              alt="Hammock at safari camp"
              className="position-absolute rounded shadow-lg"
              style={{
                bottom: '32px',
                right: '0',
                width: '60%',
                height: '75%',
                objectFit: 'cover'
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingProcess;
