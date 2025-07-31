import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ExploreSection: React.FC = () => {
  return (
    <div className="w-100 d-flex flex-column align-items-center py-5">
      <Container style={{ maxWidth: '1200px' }}>
        <div className="w-100 d-flex flex-column gap-5 py-5">
          <div className="d-flex flex-column gap-5">
            <h2 className="display-4 fw-bold text-dark">Explore</h2>
            
            <div className="d-flex flex-column gap-4">
              <Row className="g-4">
                {/* Accommodations Card */}
                <Col xs={12} lg={6}>
                  <div className="w-100 h-100 d-flex flex-column align-items-center position-relative">
                    <div className="position-relative text-center w-100">
                      <img 
                        src="https://static.cloudsafaris.com/public/namiri-plains-tent-exterior-dawn-smaller.jpg?action=get"
                        alt="Asilia's Namiri Plains"
                        className="w-100 rounded-3 shadow"
                        style={{
                          height: '60vh',
                          maxHeight: '554px',
                          objectFit: 'cover',
                          objectPosition: 'bottom'
                        }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div 
                        className="position-absolute top-0 start-0 w-100 h-100 rounded-3"
                        style={{
                          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)'
                        }}
                      ></div>
                      
                      {/* Navigation Controls */}
                      <div className="position-absolute top-0 start-0 w-100 d-flex justify-content-end p-3 d-lg-none">
                        <div className="d-flex gap-2">
                          <button 
                            className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                              width: '40px',
                              height: '40px',
                              backgroundColor: 'rgba(0,0,0,0.2)',
                              backdropFilter: 'blur(4px)',
                              border: 'none',
                              color: 'white'
                            }}
                          >
                            <svg width="12" height="12" fill="currentColor" viewBox="0 0 320 512">
                              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                          </button>
                          <button 
                            className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                              width: '40px',
                              height: '40px',
                              backgroundColor: 'rgba(0,0,0,0.2)',
                              backdropFilter: 'blur(4px)',
                              border: 'none',
                              color: 'white',
                              transform: 'rotate(180deg)'
                            }}
                          >
                            <svg width="12" height="12" fill="currentColor" viewBox="0 0 320 512">
                              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                      
                      {/* Content Overlay */}
                      <div className="position-absolute bottom-0 start-0 w-100 d-flex align-items-center justify-content-center p-4">
                        <div className="d-flex flex-column align-items-start w-100 gap-3">
                          <div className="d-flex flex-column w-100 gap-3">
                            {/* Pagination Dots */}
                            <div className="pb-3">
                              <div className="d-flex align-items-center gap-2">
                                <div 
                                  className="rounded-circle"
                                  style={{
                                    width: '8px',
                                    height: '8px',
                                    backgroundColor: 'white',
                                    backdropFilter: 'blur(4px)',
                                    cursor: 'pointer'
                                  }}
                                ></div>
                                {[...Array(3)].map((_, i) => (
                                  <div 
                                    key={i}
                                    className="rounded-circle"
                                    style={{
                                      width: '6px',
                                      height: '6px',
                                      backgroundColor: 'rgba(255,255,255,0.8)',
                                      backdropFilter: 'blur(4px)',
                                      cursor: 'pointer'
                                    }}
                                  ></div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="w-100 d-flex flex-column align-items-start gap-2">
                              <h3 className="h2 fw-bold text-white text-start m-0 lh-1">
                                Explore Africa's best accommodations
                              </h3>
                              <div className="d-flex align-items-center gap-2 text-white">
                                <a 
                                  href="#" 
                                  className="d-flex align-items-center gap-2 text-white text-decoration-none small"
                                  style={{ transition: 'all 0.1s ease' }}
                                >
                                  <span>View Asilia's Namiri Plains</span>
                                  <svg width="12" height="12" fill="currentColor" viewBox="0 0 320 512">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                          
                          <div className="d-flex flex-column align-items-start">
                            <Button
                              className="rounded-pill px-4 py-2 fw-semibold"
                              style={{
                                backgroundColor: 'rgba(255,255,255,0.9)',
                                border: 'none',
                                color: '#212529',
                                fontSize: '0.875rem',
                                transition: 'all 0.1s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.9)';
                                e.currentTarget.style.color = 'rgba(255,255,255,0.9)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)';
                                e.currentTarget.style.border = 'none';
                                e.currentTarget.style.color = '#212529';
                              }}
                            >
                              Browse properties
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Trips Card */}
                <Col xs={12} lg={6}>
                  <div className="w-100 h-100 d-flex flex-column align-items-center position-relative">
                    <div className="position-relative text-center w-100">
                      <img 
                        src="https://cloudsafaris.com/photos/public/03aa4ebf-217a-49ed-91bd-f55792e48914_f93086e1-4ee1-4b07-bd9b-d781446b12b5_carlos-torres-2buV9JU4jaI-unsplash.jpeg?action=get"
                        alt="5 Days Kenya Essence Explicit"
                        className="w-100 rounded-3 shadow"
                        style={{
                          height: '60vh',
                          maxHeight: '554px',
                          objectFit: 'cover',
                          objectPosition: 'bottom'
                        }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div 
                        className="position-absolute top-0 start-0 w-100 h-100 rounded-3"
                        style={{
                          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)'
                        }}
                      ></div>
                      
                      {/* Navigation Controls */}
                      <div className="position-absolute top-0 start-0 w-100 d-flex justify-content-end p-3 d-lg-none">
                        <div className="d-flex gap-2">
                          <button 
                            className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                              width: '40px',
                              height: '40px',
                              backgroundColor: 'rgba(0,0,0,0.2)',
                              backdropFilter: 'blur(4px)',
                              border: 'none',
                              color: 'white'
                            }}
                          >
                            <svg width="12" height="12" fill="currentColor" viewBox="0 0 320 512">
                              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                          </button>
                          <button 
                            className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                              width: '40px',
                              height: '40px',
                              backgroundColor: 'rgba(0,0,0,0.2)',
                              backdropFilter: 'blur(4px)',
                              border: 'none',
                              color: 'white',
                              transform: 'rotate(180deg)'
                            }}
                          >
                            <svg width="12" height="12" fill="currentColor" viewBox="0 0 320 512">
                              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                      
                      {/* Content Overlay */}
                      <div className="position-absolute bottom-0 start-0 w-100 d-flex align-items-center justify-content-center p-4">
                        <div className="d-flex flex-column align-items-start w-100 gap-3">
                          <div className="d-flex flex-column w-100 gap-3">
                            {/* Pagination Dots - More dots for trips */}
                            <div className="pb-3">
                              <div className="d-flex align-items-center gap-2 flex-wrap">
                                {[...Array(20)].map((_, i) => (
                                  <div 
                                    key={i}
                                    className="rounded-circle"
                                    style={{
                                      width: i === 20 ? '8px' : '6px',
                                      height: i === 20 ? '8px' : '6px',
                                      backgroundColor: i === 20 ? 'white' : 'rgba(255,255,255,0.8)',
                                      backdropFilter: 'blur(4px)',
                                      cursor: 'pointer'
                                    }}
                                  ></div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="w-100 d-flex flex-column align-items-start gap-2">
                              <h3 className="h2 fw-bold text-white text-start m-0 lh-1">
                                Trips for everyone
                              </h3>
                              <div className="d-flex align-items-center gap-2 text-white">
                                <a 
                                  href="#" 
                                  className="d-flex align-items-center gap-2 text-white text-decoration-none small"
                                  style={{ transition: 'all 0.1s ease' }}
                                >
                                  <span>View 5 Days Kenya Essence Explicit</span>
                                  <svg width="12" height="12" fill="currentColor" viewBox="0 0 320 512">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5 12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                          
                          <div className="d-flex flex-column align-items-start">
                            <Button
                              className="rounded-pill px-4 py-2 fw-semibold"
                              style={{
                                backgroundColor: 'rgba(255,255,255,0.9)',
                                border: 'none',
                                color: '#212529',
                                fontSize: '0.875rem',
                                transition: 'all 0.1s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.9)';
                                e.currentTarget.style.color = 'rgba(255,255,255,0.9)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)';
                                e.currentTarget.style.border = 'none';
                                e.currentTarget.style.color = '#212529';
                              }}
                            >
                              Browse trips
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ExploreSection;
