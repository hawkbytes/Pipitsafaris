import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const TermsOfService: React.FC = () => {
  return (
    <>
    <PageHeader/>
    <Container className="py-5" style={{ maxWidth: '1152px' }}>
      <Row>
        <Col lg={8} className="mx-auto">
          <div className="mb-5">
            <div className="d-flex flex-column gap-4 align-items-start">
              <h1 className="display-4 fw-bold">Terms of Service</h1>
              
              {/* Right side contact section */}
              <div className="position-absolute end-0 me-5" style={{ top: '20px' }}>
                <div className="d-flex flex-column gap-1">
                  <div className="h3 fw-bold">Still have questions for us?</div>
                  <div>Our team has answers and would love to help.</div>
                  <div className="pt-4">
                    <a 
                      href="mailto:hello@pipitsafaris.com?subject=Terms of Service" 
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
              </div>
              
              <p><strong>Section 25 of these Terms contains an arbitration agreement and class action waiver that apply to all claims brought against Pipitsafaris in Tanzania. Please read them carefully.</strong></p>
              
              <p>Last Updated: January 15, 2025</p>
              
              <p>These Terms of Service ("Terms") are a binding legal agreement between you and Pipit Tours and Safaris Limited (Pipitsafaris Tanzania) that govern your right to use the websites, applications, and other offerings from Pipit Tours and Safaris Limited (collectively, the "Pipitsafaris Platform"). When used in these Terms, "Pipitsafaris," "we," "us," or "our" refers to Pipit Tours and Safaris Limited with whom you are contracting.</p>
              
              <p>The Pipitsafaris Platform offers an online venue that enables users ("Members") to publish, offer, search for, and book services. Members who publish and offer services are "Tour Operators." Members who search for, book, or use services are "Guests." Pipit Tours and Safaris Limited offers accommodations ("Accommodations"), activities, excursions, events ("Experiences"), safaris ("Safaris"), and a variety of travel and other services (collectively, "Tour Operator Services," and each Tour Operator Service offering, a "Listing"). You must register an account to access and use many features of the Pipitsafaris Platform, and must keep your account information accurate. As the provider of the Pipitsafaris Platform, Pipitsafaris does not own, control, offer or manage any Listings, Tour Operator Services, or safari services. Pipitsafaris is not a party to the contracts entered into directly between Tour Operators and Guests, nor is Pipitsafaris a real-estate broker, or insurer. Pipitsafaris is not acting as an agent in any capacity for any Member, except as specified in the Payments Terms of Service ("Payment Terms").</p>
              
              <p>We maintain other policies that supplement these Terms like our Privacy Policy, which describes our collection and use of personal data, and our Booking Terms, which govern any payment services provided to Members by the Pipitsafaris entity (collectively "Pipitsafaris Payments"). If you are a Tour Operator, Guide, or Accommodation Tour Operator, you are responsible for understanding and complying with all laws, rules, regulations and contracts with third parties that apply to your Tour Operator Services.</p>
              
              <h2 className="h4 fw-bold">1. Our Mission.</h2>
              <p>Our mission is to create a world where you can travel with simplicity and ease. From safaris to mountain climbing, to relaxing on a beach, browse through many travel options to find the ones that fit the way you like to travel and explore. Learn more about travel options by reviewing the description, blog posts, pictures, Tour Operator profiles, and Guest reviews. If you have questions, just message the Tour Operator or us at <a href="mailto:hello@pipitsafaris.com" className="text-decoration-underline fw-medium">hello@pipitsafaris.com</a>.</p>
              
              <h2 className="h3 fw-bold">Client Terms</h2>
              
              <h2 className="h4 fw-bold">2. Searching, Booking and Cancellations on Pipitsafaris.</h2>
              
              <h3 className="h5 fw-bold text-muted">2.1 Searching</h3>
              <p>You can search for Safari Services by using criteria like the travel destination, accommodation type, travel dates, and number of guests. You can also use filters to refine your search results. Search results are based on their relevance to your search and other criteria. Relevance considers factors like price, availability, Reviews, customer service and cancellation history, popularity, previous trips and saved Listings, Tour Operator requirements (e.g. minimum age requirement), and more.</p>
              
              <h3 className="h5 fw-bold text-muted">2.2 Booking your vacation</h3>
              
              <h4 className="h6 fw-semibold fst-italic">2.2.1 Payments & Invoicing</h4>
              <p>Our aim is to provide exactly the right travel arrangements to suit your requirements.</p>
              
              <p>When you book a safari service, you are agreeing to pay all charges for your booking including the Safari service price, applicable fees, Pipitsafaris' service fee, offline fees, taxes, and any other items identified during checkout (collectively, "Total Price"). You are also agreeing that Pipitsafaris may charge the Payment Method (as defined in the Payment Terms) used to book the Safari Service in order to collect Damage Claim (as defined in Section 17) amounts.</p>
              
              <p>When you receive the booking confirmation, a contract for Tour Operator Services (a "Reservation") is formed directly between you, the Accommodation(s), Transportation Partners, and the Tour Operator. In addition to these Terms, you will be subject to, and responsible for complying with, all terms of the Reservation, including without limitation, the cancellation policy and any other rules, standards, policies, or requirements identified in the Listing or during checkout that apply to the Reservation.</p>
              
              <p>The deposit required to book your trip is shown on your quotation. The deposit will be 30% of the total trip price, excepting air travel and any permits which need to be paid for in full at time of booking as tickets will be issued immediately and are non-refundable ('the Deposit'). Occasionally an additional deposit may be requested in order to secure a booking e.g., for peak departure periods ("The Additional Deposit"). The purpose of the Deposit, other than payment to Third Party Suppliers, is to cover costs, disbursements and service fee incurred by Pipitsafaris and in the event of any cancellation as provided for herein the Deposit and any Additional Deposit will be forfeited by the Client.</p>
              
              <p>You must make all payments in full and on time. <strong>Failure to make a payment may result in the cancellation of your travel and the forfeiture of your Deposit and any Additional Deposit</strong>. In such a case this would be considered a cancellation by you and the cancellation terms and fees as described below would be in effect. We reserve the right to refuse service to anyone. In such case, a full refund would be provided, and we would have no further liability to you.</p>
              
              <p>Your final balance will be due in full three calendar months prior to departure. Trips booked within three months of travel require full payment at the time of booking.</p>
              
              <p>Payments can be made by bank transfer or by credit or debit card. While we do accept major credit cards including Visa, Mastercard and American Express, travelers must provide to us a click or signed authorization for every transaction for your trip. Your authorization is an agreement for us to charge your card and an acknowledgement and agreement to the Company Terms and Conditions and the Supplier Terms and Conditions including the cancellation terms. It is your responsibility to read and understand these rules, standards, policies, and requirements prior to booking a Listing. Be aware that some Tour Operators work with a Co-Tour Operators (other Operators) or as part of a team to provide their Tour Operator Services.</p>
              
              <p>It is important for you to check the details on the Confirmation Invoice as soon as you get it. In the event of any discrepancy please contact us immediately at <a href="mailto:hello@Pipitsafaris.com?subject=Terms" className="text-decoration-underline fw-medium">hello@Pipitsafaris.com.</a> Pipitsafaris will be responsible for making payments to Third Party Suppliers on confirmed bookings by you on your behalf and remitting the booking fee element to the Company.</p>
              
              <h4 className="h6 fw-semibold fst-italic">2.2.2 Accommodation Reservations</h4>
              <p>An Accommodation Reservation is a limited license to enter, occupy, and use the Accommodation. The Accommodation staff retain the right to re-enter the Accommodation during your stay, to the extent: (i) it is reasonably necessary, (ii) permitted by your contract with the Accommodation, and (iii) consistent with applicable law. If you stay past checkout, the Accommodation has the right to make you leave in a manner consistent with applicable law, including by imposing reasonable overstay penalties. You may not exceed the maximum number of allowed Guests. Accommodation Reservations also extend to the hotels, lodges, camps, tented lodges and other housing.</p>
              
              <h4 className="h6 fw-semibold fst-italic">2.2.3 Reservations for Experiences and Other Tour Operator Services</h4>
              <p>An Experience or other Tour Operator Service Reservation entitles you to participate in, attend, or use that Tour Operator Service. You are responsible for confirming that you, and anyone you invite, meet minimum age, proficiency, fitness, or other requirements. You are responsible for informing the Tour Operator of any medical or physical conditions, or other circumstances that may impact your ability to participate, attend, or use the Tour Operator Service. Except where expressly authorized, you may not allow any person to join a Tour Operator Service unless they are included as an additional guest during the booking process.</p>
              
              <h4 className="h6 fw-semibold fst-italic">2.2.4 Booking Modifications & Amendments.</h4>
              <p>The Company will make every effort to assist you if you wish to alter your arrangements. Guests and Tour Operators are responsible for any booking modifications they agree to make via the Pipitsafaris Platform or direct Pipitsafaris customer service to make on their behalf ("Booking Modifications"). If it is possible to make the amendment, it will be subject to any fees charged by our suppliers, together with all communication charges or other expenses incurred by the Company as a result of the change.</p>
              
              <h3 className="h5 fw-bold text-muted">2.3 Cancellations</h3>
              
              <h4 className="h6 fw-semibold fst-italic">2.3.1 Travel Issues, and Refunds</h4>
              <p>In general, if as a Guest you cancel a Reservation, the amount refunded to you is determined by the cancellation policy (as determined by Pipitsafaris and the Tour Operator) that applies to that Reservation. But, in certain situations, other policies take precedence and determine what amount is refunded to you. If the Tour Operator cancels, or you experience a Travel Issue (as defined in our Guest Refund Policy), you may be eligible for rebooking assistance or a partial or full refund pending the circumstance as evaluated by Pipitsafaris.</p>
              
              <p>All cancellations are subject to the Supplier Terms and Conditions of the Third Party Suppliers. Some Third Party Suppliers may choose to offer future travel credits in lieu of a cash refund. Pipitsafaris is not liable for a Third Party Supplier's failure to provide a refund or for Third Party Supplier insolvency or bankruptcy.</p>
              
              <h4 className="h6 fw-semibold fst-italic">2.3.2 Guest Policy</h4>
              <p>The Guest Policy provides guidelines for Guests in cases of cancellations, refunds, and rebookings. This policy ensures fairness to both Guests and Tour Operators while maintaining flexibility under extenuating circumstances.</p>
              
              <ul className="list-unstyled ps-4">
                <li className="mb-3">
                  <p>Guests may cancel their reservation <span className="fw-bold">121 days</span> or more before the tour start date:</p>
                  <ul className="list-unstyled ps-4">
                    <li><p>If payment is made via credit card, a full refund of the deposit amount (30%) will be issued minus the <span className="fw-bold">3.0% + $0.30</span> credit card processing fee.</p></li>
                    <li><p>If payment is made via other methods, a full refund of the deposit amount (30%) will be issued.</p></li>
                  </ul>
                </li>
                <li className="mb-3">
                  <p>For cancellations made <span className="fw-bold">120 to 61 days</span> before the tour start date:</p>
                  <ul className="list-unstyled ps-4">
                    <li><p><span className="fw-bold">30%</span> of the total tour price or the deposit paid becomes non-refundable, subject to third-party supplier increases.</p></li>
                  </ul>
                </li>
                <li className="mb-3">
                  <p>For cancellations made <span className="fw-bold">60 to 46 days</span> before the tour start date:</p>
                  <ul className="list-unstyled ps-4">
                    <li><p><span className="fw-bold">85%</span> of the total tour price will be charged as a cancellation fee.</p></li>
                  </ul>
                </li>
                <li className="mb-3">
                  <p>For cancellations made <span className="fw-bold">45 to 0 days</span> before the tour start date:</p>
                  <ul className="list-unstyled ps-4">
                    <li><p><span className="fw-bold">100%</span> of the total tour price will be charged as a cancellation fee.</p></li>
                  </ul>
                </li>
                <li className="mb-3"><p>If a Guest experiences unforeseen circumstances (e.g., medical emergencies, travel restrictions, or natural disasters), they must provide valid documentation to request a refund or rebooking assistance under the Extenuating Circumstances Policy.</p></li>
                <li className="mb-3"><p>Refunds will be processed within 14 business days after the cancellation request is approved, based on the applicable policy.</p></li>
                <li className="mb-3"><p>Guests who repeatedly cancel bookings without valid reasons may face account reviews or restrictions.</p></li>
              </ul>
              
              <h2 className="h4 fw-bold">3. Your Responsibilities and Assumption of Risk.</h2>
              <p>You are responsible and liable for your own acts and omissions and are also responsible for the acts and omissions of anyone you invite to join or provide access to any Accommodation, Experience, Transportation, or other Tour Operator Service. For example, this means: (i) you are responsible for leaving an Accommodation (and related personal property) in the condition it was in when you arrived, (ii) you are responsible for paying all reasonable Damage Claim amounts necessary to cover damage that you, your guest(s), or your pet(s) cause to an Accommodation, and (iii) you must act with integrity, treat others with respect, and comply with applicable laws at all times. If you are booking for an additional guest who is a minor or if you bring a minor to a Accommodation, Tour Operator, or Transportation Partner, you must be legally authorized to act on behalf of the minor and you are solely responsible for the supervision of that minor.</p>
              
              <h3 className="h5 fw-bold text-muted">3.1 Your Assumption of Risk</h3>
              <p>You acknowledge that many activities carry inherent risks and agree that, to the maximum extent permitted by applicable law, you assume the entire risk arising out of your access to and use of the Pipitsafaris Platform and any Content (as defined in Section 11), including your stay at any Accommodation, participation in any Experience, use of any other Tour Operator Service, or any other interaction you have with other Members whether in person or online. This means it is your responsibility to investigate a Tour Operator Service (Operator), Accommodation and Transportation Companies to determine whether it is suitable for you. For example, Tour Operator Services may carry a risk of illness, bodily injury, disability, or death, and you freely and willfully assume those risks by choosing to participate in those Tour Operator Services.</p>
              
              <h2 className="h4 fw-bold">4. Passports and Visa</h2>
              <p>It is your responsibility to ensure that all necessary travel documentation, permits and/or visa regulations are met for any countries you intend to visit or transit through. The Company can provide advice and guidance on these areas but ultimately it is your responsibility to ensure any regulations are met. You will need a full 10-year passport to travel which is valid for six months after the date of your return. Some destinations also require visas, and you should contact the Embassy or Consulate of the country which you are planning to visit in good time before you travel. All children should travel on full passports. Your passport must have sufficient blank visa pages available in accordance with the requirements of the countries you intend to visit. If there is insufficient space in the passport entry will be denied and the person is likely to be detained pending return to their country of origin.</p>
              
              <p>Please ensure that all passports are renewed timeously. The client must ensure that the details are supplied to Pipitsafaris mirror those details shown on their passport for international travel and ID documents for local travel. As a guideline, passports should be valid for 6 (six) months after your scheduled departure from the countries you are visiting, please note that a visa does not guarantee entry to any given country at point of entry and boarding of an aircraft may be denied at any point even if you have a valid visa. Furthermore, caution should be taken when your countries of transit or final destination issue a visa on arrival.</p>
              
              <h2 className="h4 fw-bold">5. Health and Safety</h2>
              <p>You must ensure you meet the immunization, inoculation and medication regulations of any country you visit and it is suggested that you liaise with the relevant consulates and embassies for up-to-date information in good time before your departure and, if particular health issues are prevalent in any country included in your itinerary, consult medical practitioners that are familiar with it. The Company can provide advice and guidance on these areas but ultimately it is your responsibility to ensure any regulations are met.</p>
              
              <p>Pipitsafaris cannot accept responsibility and no credit or refunds will be given if you fail to take up any component of your trip. No credit or refunds will be given for lost, mislaid, or destroyed travel documents. Most people go on vacation for rest and relaxation, so if in our reasonable opinion or that of any hotel manager, tour leader or other person in authority, your behavior is causing danger, damage to property or persistently affecting the enjoyment of others, we reserve the right to terminate your vacation. Should this happen no refund or compensation would be paid. The Client indemnifies and holds harmless Pipitsafaris against damages suffered and/or costs incurred by Pipitsafaris and/or any third party as a result of a breach of this clause.</p>
              
              <h2 className="h4 fw-bold">6. Special Requests</h2>
              <p>Special Requests, such as diet, room location, twin- or double-bedded room, or a particular facility which are an important factor in the choice of trip, should be indicated on the Booking Form or made in writing. We will pass your request on to the hotel or other service provider but cannot guarantee that it will be accommodated. The Company will try to arrange for Special Requests to be met, but cannot guarantee that they will be, nor will the Company be liable if any Special Request is met. The provision of any Special Request does not constitute a term of your contract with us unless we have confirmed in writing that your requirement will be met.</p>
              
              <h2 className="h4 fw-bold">7. Insurance</h2>
              <p>It is a condition of booking that you and all members of your party have comprehensive insurance and that it is adequate for your needs. Your policy of insurance should provide coverage for personal injury, death, medical and repatriation costs in the countries which you intend to visit, together with cover for loss of baggage and valuables, personal liability, delay, cancellation, curtailments, missed departure and legal expenses. Please note these are suggestions only and it does not constitute an exhaustive list. We also strongly recommend the purchase of additional cancel for any reason coverage, where available. Note that special insurance may be required if you intend to undertake any dangerous or sports activities.</p>
              
              <h2 className="h4 fw-bold">8. Illness and Disability</h2>
              <p>If you or any member of your party suffers from a disability or other medical condition or is taking prescribed medication that may impact on the member's participation in the trip and/or activities, please tell us before you book. The Company is happy to give you advice and to try to assist you in choosing a vacation that will meet your requirements. However, most of our vacations are in destinations which are off the beaten track and lack even the simplest facilities for disabled guests such as ramps for wheelchairs, lifts and so on. Many of our vacations require a fair degree of physical fitness. Medical facilities may not be readily available.</p>
              
              <div className="mt-5 pt-4 border-top">
                <h3 className="h4 fw-bold">Corporate Information</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="small fw-bold text-uppercase text-muted">TIN (Taxpayer Identification Number)</div>
                      <div>137-282-046</div>
                    </div>
                    <div className="mb-3">
                      <div className="small fw-bold text-uppercase text-muted">Corporation Name</div>
                      <div>Pipit Tours and Safaris Limited</div>
                    </div>
                    <div className="mb-3">
                      <div className="small fw-bold text-uppercase text-muted">Registration Authority</div>
                      <div>Tanzania Revenue Authority</div>
                    </div>
                    <div className="mb-3">
                      <div className="small fw-bold text-uppercase text-muted">Registration Date</div>
                      <div>09 August 2018</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="small fw-bold text-uppercase text-muted">TRA Location</div>
                      <div>Arusha</div>
                    </div>
                    <div className="mb-3">
                      <div className="small fw-bold text-uppercase text-muted">Tax Office</div>
                      <div>Arusha</div>
                    </div>
                    <div className="mb-3">
                      <div className="small fw-bold text-uppercase text-muted">Physical Location</div>
                      <div>Olamuriaki, Sombetini, Arusha</div>
                    </div>
                    <div className="mb-3">
                      <div className="small fw-bold text-uppercase text-muted">Email</div>
                      <div><a href="mailto:hello@Pipitsafaris.com" className="text-decoration-underline fw-medium">hello@Pipitsafaris.com</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  );
};

export default TermsOfService;
