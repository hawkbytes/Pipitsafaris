import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const OurPerks: React.FC = () => {
  return (
    <div className="bg-white w-100 d-flex flex-column align-items-center py-5">
      <Container style={{ maxWidth: '1200px' }}>
        <div className="w-100 d-flex flex-column gap-4">
          <div className="d-flex flex-column gap-5">
            <div className="d-flex flex-column gap-5">
              <span 
                className="text-success fw-semibold bg-light rounded-pill px-3 py-2 align-self-start"
                style={{ fontSize: '0.875rem' }}
              >
                Our perks
              </span>
              <h2 className="display-5 fw-bold text-dark">
                Secure, safe, valuable - our standard.
              </h2>
              <p className="text-muted fs-6 lh-base">
                We are all about bringing safaris into the modern era. We understand that planning a trip should be exciting, not stressful. That's why 
                we're committed to ensuring our travelers feel safe, trust us completely, and experience total transparency when booking their 
                adventure. We're here to provide clear, up-to-date information and a seamless booking process, so our customers can focus on 
                looking forward to an unforgettable safari experience with peace of mind.
              </p>
            </div>
            
            <div className="pt-4">
              <Row className="g-4">
                {/* Secure payments */}
                <Col xs={12} sm={6} md={4}>
                  <Card className="h-100 border-1 border-light rounded-3 bg-white p-3">
                    <Card.Body className="d-flex flex-column gap-3">
                      <div className="d-flex align-items-start">
                        <svg 
                          className="text-dark" 
                          style={{ width: '24px', height: '24px' }}
                          fill="currentColor" 
                          viewBox="0 0 576 512"
                        >
                          <path d="M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"/>
                        </svg>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <h5 className="fw-bold text-start">Secure payments</h5>
                        <p className="text-muted text-start mb-0">
                          Pay securely online with sensible deposits.
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Safety */}
                <Col xs={12} sm={6} md={4}>
                  <Card className="h-100 border-1 border-light rounded-3 bg-white p-3">
                    <Card.Body className="d-flex flex-column gap-3">
                      <div className="d-flex align-items-start">
                        <svg 
                          className="text-dark" 
                          style={{ width: '24px', height: '24px' }}
                          fill="currentColor" 
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"/>
                        </svg>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <h5 className="fw-bold text-start">Safety</h5>
                        <p className="text-muted text-start mb-0">
                          With an on-call operator, you'll always have on-ground backup on your trip.
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Value */}
                <Col xs={12} sm={6} md={4}>
                  <Card className="h-100 border-1 border-light rounded-3 bg-white p-3">
                    <Card.Body className="d-flex flex-column gap-3">
                      <div className="d-flex align-items-start">
                        <svg 
                          className="text-dark" 
                          style={{ width: '24px', height: '24px' }}
                          fill="currentColor" 
                          viewBox="0 0 576 512"
                        >
                          <path d="M400 96l0 .7c-5.3-.4-10.6-.7-16-.7L256 96c-16.5 0-32.5 2.1-47.8 6c-.1-2-.2-4-.2-6c0-53 43-96 96-96s96 43 96 96zm-16 32c3.5 0 7 .1 10.4 .3c4.2 .3 8.4 .7 12.6 1.3C424.6 109.1 450.8 96 480 96l11.5 0c10.4 0 18 9.8 15.5 19.9l-13.8 55.2c15.8 14.8 28.7 32.8 37.5 52.9l13.3 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-32 0c-9.1 12.1-19.9 22.9-32 32l0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-128 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64c-34.9-26.2-58.7-66.3-63.2-112L68 304c-37.6 0-68-30.4-68-68s30.4-68 68-68l4 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-4 0c-11 0-20 9-20 20s9 20 20 20l31.2 0c12.1-59.8 57.7-107.5 116.3-122.8c12.9-3.4 26.5-5.2 40.5-5.2l128 0zm64 136a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"/>
                        </svg>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <h5 className="fw-bold text-start">Value</h5>
                        <p className="text-muted text-start mb-0">
                          By booking with local tour operators, you avoid the middle-man markup.
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Accommodation options */}
                <Col xs={12} sm={6} md={4}>
                  <Card className="h-100 border-1 border-light rounded-3 bg-white p-3">
                    <Card.Body className="d-flex flex-column gap-3">
                      <div className="d-flex align-items-start">
                        <svg 
                          className="text-dark" 
                          style={{ width: '24px', height: '24px' }}
                          fill="currentColor" 
                          viewBox="0 0 576 512"
                        >
                          <path d="M269.4 6C280.5-2 295.5-2 306.6 6l224 160c7.4 5.3 12.2 13.5 13.2 22.5l32 288c1 9-1.9 18.1-8 24.9s-14.7 10.7-23.8 10.7l-80 0-28.2 0c-12.1 0-23.2-6.8-28.6-17.7L306.7 293.5c-1.7-3.4-5.1-5.5-8.8-5.5c-5.5 0-9.9 4.4-9.9 9.9L288 480c0 17.7-14.3 32-32 32l-16 0L32 512c-9.1 0-17.8-3.9-23.8-10.7s-9-15.8-8-24.9l32-288c1-9 5.8-17.2 13.2-22.5L269.4 6z"/>
                        </svg>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <h5 className="fw-bold text-start">Accommodation options</h5>
                        <p className="text-muted text-start mb-0">
                          Choose from a diverse range of lodgings, from luxury resorts to eco-friendly camps, all vetted for quality and comfort.
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Customizable itineraries */}
                <Col xs={12} sm={6} md={4}>
                  <Card className="h-100 border-1 border-light rounded-3 bg-white p-3">
                    <Card.Body className="d-flex flex-column gap-3">
                      <div className="d-flex align-items-start">
                        <svg 
                          className="text-dark" 
                          style={{ width: '24px', height: '24px' }}
                          fill="currentColor" 
                          viewBox="0 0 384 512"
                        >
                          <path d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"/>
                        </svg>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <h5 className="fw-bold text-start">Customizable itineraries</h5>
                        <p className="text-muted text-start mb-0">
                          Tailor your safari to match your interests – from wildlife spotting to cultural tours, create the adventure you've dreamed of.
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Safari expertise */}
                <Col xs={12} sm={6} md={4}>
                  <Card className="h-100 border-1 border-light rounded-3 bg-white p-3">
                    <Card.Body className="d-flex flex-column gap-3">
                      <div className="d-flex align-items-start">
                        <svg 
                          className="text-dark" 
                          style={{ width: '24px', height: '24px' }}
                          fill="currentColor" 
                          viewBox="0 0 512 512"
                        >
                          <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5l0 1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3l0-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
                        </svg>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <h5 className="fw-bold text-start">Safari expertise</h5>
                        <p className="text-muted text-start mb-0">
                          Utilize our expert knowledge to design your dream safari, from wildlife adventures to cultural experiences, tailored just for you.
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurPerks;
