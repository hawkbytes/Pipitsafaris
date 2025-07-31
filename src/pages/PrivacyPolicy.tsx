import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
    <PageHeader/>
    <Container className="py-5" style={{ maxWidth: '1152px' }}>
      <Row>
        <Col lg={8} className="mx-auto">
          <div className="mb-5">
            {/* Header with flexbox layout */}
            <div className="d-flex justify-content-between align-items-start mb-4">
              <div>
                <h1 className="display-4 fw-bold">Privacy Policy</h1>
              </div>
              
           
            </div>
            
            {/* Main content */}
            <div>
              <p>Last Updated: January 15, 2025</p>
              
              <p>Pipitsafari Inc. ("Pipitsafaris," "we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, mobile application, or use our services (collectively, the "Pipitsafaris Platform").</p>
              
              <h2 className="h4 fw-bold">1. Information We Collect</h2>
              
              <h3 className="h5 fw-bold text-muted">1.1 Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul>
                <li>Register for an account</li>
                <li>Make a booking or reservation</li>
                <li>Contact us for customer support</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in surveys or promotions</li>
                <li>Submit reviews or feedback</li>
              </ul>
              
              <p>This information may include:</p>
              <ul>
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Date of birth and age</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Passport and travel document information</li>
                <li>Travel preferences and special requirements</li>
                <li>Emergency contact information</li>
                <li>Profile photo and biographical information</li>
              </ul>
              
              <h3 className="h5 fw-bold text-muted">1.2 Automatically Collected Information</h3>
              <p>When you use the Pipitsafaris Platform, we automatically collect certain information about your device and usage patterns, including:</p>
              <ul>
                <li>IP address and geographic location</li>
                <li>Browser type and version</li>
                <li>Device information (type, operating system, unique device identifiers)</li>
                <li>Pages visited and time spent on our platform</li>
                <li>Referring website or application</li>
                <li>Search queries and booking history</li>
              </ul>
              
              <h3 className="h5 fw-bold text-muted">1.3 Cookies and Tracking Technologies</h3>
              <p>We use cookies, web beacons, and similar tracking technologies to enhance your experience on our platform. These technologies help us:</p>
              <ul>
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and recommendations</li>
                <li>Deliver targeted advertising</li>
                <li>Improve our services and user experience</li>
              </ul>
              
              <h2 className="h4 fw-bold">2. How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including:</p>
              
              <h3 className="h5 fw-bold text-muted">2.1 Service Provision</h3>
              <ul>
                <li>Processing bookings and reservations</li>
                <li>Facilitating communication between guests and tour operators</li>
                <li>Providing customer support and assistance</li>
                <li>Sending booking confirmations and updates</li>
                <li>Processing payments and refunds</li>
              </ul>
              
              <h3 className="h5 fw-bold text-muted">2.2 Platform Improvement</h3>
              <ul>
                <li>Analyzing usage patterns to improve our services</li>
                <li>Developing new features and functionalities</li>
                <li>Personalizing your experience and recommendations</li>
                <li>Conducting research and analytics</li>
              </ul>
              
              <h3 className="h5 fw-bold text-muted">2.3 Communication</h3>
              <ul>
                <li>Sending promotional emails and newsletters (with your consent)</li>
                <li>Providing important service updates and notifications</li>
                <li>Responding to your inquiries and feedback</li>
                <li>Conducting surveys and gathering feedback</li>
              </ul>
              
              <h3 className="h5 fw-bold text-muted">2.4 Legal and Safety</h3>
              <ul>
                <li>Complying with legal obligations and regulations</li>
                <li>Preventing fraud and ensuring platform security</li>
                <li>Protecting the rights and safety of our users</li>
                <li>Resolving disputes and enforcing our terms</li>
              </ul>
              
              <h2 className="h4 fw-bold">3. How We Share Your Information</h2>
              <p>We may share your information in the following circumstances:</p>
              
              <h3 className="h5 fw-bold text-muted">3.1 Tour Operators and Service Providers</h3>
              <p>When you make a booking, we share necessary information with tour operators, accommodations, transportation providers, and other third-party service providers to facilitate your reservation and ensure proper service delivery.</p>
              
              <h3 className="h5 fw-bold text-muted">3.2 Business Partners</h3>
              <p>We may share information with trusted business partners who help us operate our platform, process payments, provide customer support, or deliver services to you.</p>
              
              <h3 className="h5 fw-bold text-muted">3.3 Legal Requirements</h3>
              <p>We may disclose your information when required by law, court order, or government regulation, or when we believe disclosure is necessary to:</p>
              <ul>
                <li>Comply with legal processes</li>
                <li>Protect our rights and property</li>
                <li>Ensure user safety and prevent fraud</li>
                <li>Investigate potential violations of our terms</li>
              </ul>
              
              <h3 className="h5 fw-bold text-muted">3.4 Business Transfers</h3>
              <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity as part of the business transaction.</p>
              
              <h2 className="h4 fw-bold">4. Data Security</h2>
              <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
              <ul>
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure payment processing systems</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and employee training</li>
                <li>Monitoring for suspicious activity</li>
              </ul>
              
              <p>However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
              
              <h2 className="h4 fw-bold">5. Your Rights and Choices</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information:</p>
              
              <h3 className="h5 fw-bold text-muted">5.1 Access and Correction</h3>
              <p>You have the right to access, update, or correct your personal information. You can do this through your account settings or by contacting us directly.</p>
              
              <h3 className="h5 fw-bold text-muted">5.2 Data Portability</h3>
              <p>You may request a copy of your personal information in a structured, commonly used format.</p>
              
              <h3 className="h5 fw-bold text-muted">5.3 Deletion</h3>
              <p>You may request that we delete your personal information, subject to certain legal and operational requirements.</p>
              
              <h3 className="h5 fw-bold text-muted">5.4 Marketing Communications</h3>
              <p>You can opt out of receiving promotional communications from us by:</p>
              <ul>
                <li>Clicking the unsubscribe link in our emails</li>
                <li>Updating your communication preferences in your account</li>
                <li>Contacting us directly</li>
              </ul>
              
              <h3 className="h5 fw-bold text-muted">5.5 Cookies</h3>
              <p>You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our platform.</p>
              
              <h2 className="h4 fw-bold">6. Data Retention</h2>
              <p>We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. The retention period varies depending on the type of information and the purpose for which it was collected.</p>
              
              <h2 className="h4 fw-bold">7. International Data Transfers</h2>
              <p>Pipitsafaris operates globally, and your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.</p>
              
              <h2 className="h4 fw-bold">8. Children's Privacy</h2>
              <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.</p>
              
              <h2 className="h4 fw-bold">9. Third-Party Links</h2>
              <p>Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.</p>
              
              <h2 className="h4 fw-bold">10. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our platform and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.</p>
              
              <h2 className="h4 fw-bold">11. Contact Us</h2>
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:</p>
              
              <div className="mt-4 p-4 bg-light rounded">
                <p className="mb-2"><strong>Pipitsafari Inc.</strong></p>
                <p className="mb-2">4230 Sherwoodtowne Blvd, Mississauga, ON L4Z 2G6</p>
                <p className="mb-2">Email: <a href="mailto:privacy@pipitsafaris.com" className="text-decoration-underline fw-medium">privacy@pipitsafaris.com</a></p>
                <p className="mb-0">Phone: +1 888 859 0890</p>
              </div>
              
              <div className="mt-5 pt-4 border-top">
                <h3 className="h4 fw-bold">Corporations Canada</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="small fw-bold text-uppercase text-muted">TICO Registration #</div>
                      <div>50027812 (Retail)</div>
                      <div>50027813 (Wholesale)</div>
                    </div>
                    <div className="mb-3">
                      <div className="small fw-bold text-uppercase text-muted">Corporation Name</div>
                      <div>Pipitsafari, Inc.</div>
                    </div>
                    <div className="mb-3">
                      <div className="small fw-bold text-uppercase text-muted">Operating Name</div>
                      <div>Pipitsafaris Canada</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="small fw-bold text-uppercase text-muted">Address</div>
                      <div>4230 Sherwoodtowne Blvd, Mississauga, ON L4Z 2G6</div>
                    </div>
                    <div className="mb-3">
                      <div className="small fw-bold text-uppercase text-muted">Phone</div>
                      <div>+1 888 859 0890</div>
                    </div>
                    <div className="mb-3">
                      <div className="small fw-bold text-uppercase text-muted">Email</div>
                      <div><a href="mailto:hello@pipitsafaris.com" className="text-decoration-underline fw-medium">hello@pipitsafaris.com</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4}>
                   {/* Right side contact section */}
              <div className="d-flex flex-column gap-1" style={{ minWidth: '300px' }}>
                <div className="h3 fw-bold">Still have questions for us?</div>
                <div>Our team has answers and would love to help.</div>
                <div className="pt-4">
                  <a 
                    href="mailto:hello@pipitsafaris.com?subject=Privacy Policy" 
                    className="text-dark border border-dark px-4 py-2 rounded text-decoration-none d-inline-flex align-items-center"
                    style={{
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#000';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#000';
                    }}
                  >
                    Contact Us
                    <svg 
                      aria-hidden="true" 
                      focusable="false" 
                      className="ms-2" 
                      style={{ width: '14px', height: '14px' }}
                      role="img" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 320 512"
                    >
                      <path 
                        fill="currentColor" 
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
        </Col>

      </Row>
    </Container>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
