import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TeamSection: React.FC = () => {
  return (
    <div className="bg-light w-100 d-flex flex-column align-items-center py-5">
      <Container style={{ maxWidth: '1200px' }}>
        <div className="w-100 d-flex flex-column gap-4">
          <div className="d-flex flex-column gap-5">
            <div className="d-flex flex-column gap-5">
              <span 
                className="text-success fw-semibold bg-light rounded-pill px-3 py-2 align-self-start"
                style={{ fontSize: '0.875rem' }}
              >
                Our team
              </span>
              <h2 className="display-5 fw-bold text-dark">
                Meet the founding members
              </h2>
              <p className="text-muted fs-6 lh-base">
                Encounter the people who started our journey. Our founders are a blend of diverse experiences and passions, each 
                contributing to the unique tapestry of our community. It's their personal stories, dreams, and dedication that form 
                the soul of our mission.
              </p>
            </div>
            
            <div className="pt-4">
              <Row className="g-4">
                {/* Josh D'Souza */}
                <Col xs={12} lg={4}>
                  <div 
                    className="d-flex flex-column gap-2 h-100 transition-all"
                    style={{ 
                      cursor: 'pointer',
                      filter: 'saturate(0.5)',
                      transition: 'all 0.5s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'saturate(1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'saturate(0.5)';
                    }}
                  >
                    <img 
                      src="https://static.cloudsafaris.com/public/JD2-CWP-2557.jpg?action=get"
                      alt="Josh D'Souza"
                      className="w-100 rounded-3"
                      style={{
                        height: '400px',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        transition: 'all 0.5s ease'
                      }}
                    />
                    <div className="d-flex flex-column py-2">
                      <h5 className="fw-bold mb-1">Josh D'Souza</h5>
                      <div className="text-muted mb-2">CEO</div>
                      <p 
                        className="text-muted small lh-base"
                        style={{
                          fontSize: '0.875rem',
                          transition: 'all 0.5s ease'
                        }}
                      >
                        A graduate from the University of Waterloo in Management Engineering, Josh D'Souza co-founded Pipitsafaris. 
                        Drawing from his family's extensive 50+ years of experience in Tanzanian safaris, he has spent considerable time 
                        in Kenya and Tanzania, gaining unique insights into safari operations. Josh's technological acumen, evidenced by 
                        his role as a Founding Engineer at webapp.io, combined with his entrepreneurial ventures in startups and non-profits 
                        like Tanzanite Toronto, has positioned him at the forefront of innovating online safari travel with Pipitsafaris.
                      </p>
                    </div>
                  </div>
                </Col>

                {/* Aidan Wood */}
                <Col xs={12} lg={4}>
                  <div 
                    className="d-flex flex-column gap-2 h-100 transition-all"
                    style={{ 
                      cursor: 'pointer',
                      filter: 'saturate(0.5)',
                      transition: 'all 0.5s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'saturate(1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'saturate(0.5)';
                    }}
                  >
                    <img 
                      src="https://static.cloudsafaris.com/public/AW2-CWP-2335.jpg?action=get"
                      alt="Aidan Wood"
                      className="w-100 rounded-3"
                      style={{
                        height: '400px',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        transition: 'all 0.5s ease'
                      }}
                    />
                    <div className="d-flex flex-column py-2">
                      <h5 className="fw-bold mb-1">Aidan Wood</h5>
                      <div className="text-muted mb-2">CTO</div>
                      <p 
                        className="text-muted small lh-base"
                        style={{
                          fontSize: '0.875rem',
                          transition: 'all 0.5s ease'
                        }}
                      >
                        As a University of Waterloo Mechatronics Engineering graduate, Aidan Wood brings a technical lens to Pipitsafaris. 
                        His Kenyan experience has deepened his understanding of the safari sector, vital for enhancing Pipitsafaris' online 
                        presence. Aidan's background in engineering and consulting informs the company's strategic direction, focusing on 
                        optimizing the customer journey and technical capabilities of the platform.
                      </p>
                    </div>
                  </div>
                </Col>

                {/* Markus Hamann */}
                <Col xs={12} lg={4}>
                  <div 
                    className="d-flex flex-column gap-2 h-100 transition-all"
                    style={{ 
                      cursor: 'pointer',
                      filter: 'saturate(0.5)',
                      transition: 'all 0.5s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'saturate(1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'saturate(0.5)';
                    }}
                  >
                    <img 
                      src="https://static.cloudsafaris.com/public/MH2-CWP-2471.jpg?action=get"
                      alt="Markus Hamann"
                      className="w-100 rounded-3"
                      style={{
                        height: '400px',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        transition: 'all 0.5s ease'
                      }}
                    />
                    <div className="d-flex flex-column py-2">
                      <h5 className="fw-bold mb-1">Markus Hamann</h5>
                      <div className="text-muted mb-2">COO</div>
                      <p 
                        className="text-muted small lh-base"
                        style={{
                          fontSize: '0.875rem',
                          transition: 'all 0.5s ease'
                        }}
                      >
                        Combining his University of Waterloo education and experiences from Tesla and TJX, Markus co-founded Pipitsafaris 
                        with a unique vision. His extensive travels in Kenya and Tanzania, coupled with his critical role in developing 
                        tour operator software in 2019, have deeply influenced Pipitsafaris' approach to customer engagement. Markus is 
                        dedicated to refining the safari booking process, ensuring it is both intuitive and tailored to the varied 
                        interests of all types of travellers, enhancing the overall user experience.
                      </p>
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

export default TeamSection;
