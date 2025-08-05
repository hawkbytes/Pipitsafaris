import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ItinerarySection from '../components/ItinerarySection';
import WhatToKnowSection from '../components/WhatToKnowSection';
import TestimonialsSection from '../components/TestimonialsSection';
import DayByDay from '../components/DayByDay';
import './TripDetailPage.css';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

const TripDetailPage: React.FC = () => {
  const [expandedOverview, setExpandedOverview] = useState(false);

  const tripData = {
    title: "Kilimanjaro 5 Day Marangu Route",
    nights: 6,
    days: 7,
    destinations: 8,
    images: [
      "https://static.cloudsafaris.com/public/2b2a7cfd-6c29-49df-954a-ba709fc93c8b_3679500782_3d8ab5750c_b.jpg?action=get&host=true",
      "https://static.cloudsafaris.com/public/ebe2479e-aacf-4307-8aa1-f52ab2307e83_PXL_20221013_025037496.PORTRAIT-min.jpg?action=get&host=true",
      "https://static.cloudsafaris.com/public/3568cb68-25ae-4b48-a61f-63763524a12a_springlands-hotel_157046552324.jpg?action=get&host=true",
      "https://static.cloudsafaris.com/public/03abacd8-355a-49ea-a581-d763613336b0_lg_springlands-hotel_15704655207.jpg?action=get&host=true"
    ],
    overview: "Embark on the adventure of a lifetime and conquer the roof of Africa by taking the Marangu Route to the summit of Mount Kilimanjaro. Known affectionately as the \"Coca-Cola\" route, Marangu offers a unique blend of breathtaking landscapes, rich cultural experiences, and the comfort of sleeping huts along the way—a distinguishing feature that sets it apart from other routes...",
    price: 1817,
    totalPrice: 3633,
    travelers: 2,
    arrivalDate: "Aug 09, 2025",
    endDate: "Aug 15, 2025"
  };

  const itineraryDays = [
    {
      day: 1,
      date: "Aug 9",
      title: "Arrival and Preparation Day at Springlands Hotel, Moshi",
      description: "Begin your adventure with a transfer from JRO directly to the Springlands Hotel in Moshi (please select the transfer from the extras for this day, as it's not included in case you're already in Moshi), setting the stage for your upcoming climb.",
      tabs: ["Overview", "Hotel", "Destinations", "Extras"],
      hotel: {
        name: "Springlands Hotel",
        type: "Hotel",
        category: "Value",
        image: "https://static.cloudsafaris.com/public/3568cb68-25ae-4b48-a61f-63763524a12a_springlands-hotel_157046552324.jpg?action=get&host=true"
      },
      note: "A single room at Springlands Hotel and a transfer from JRO to Springlands hotel is available as extras to add on to this trip. Meals and water can be purchased directly at Springlands hotel."
    },
    {
      day: 2,
      date: "Aug 10",
      title: "Marangu Gate to Mandara Hut",
      description: "After enjoying breakfast at Springlands hotel, you'll be picked up and driven to Marangu gate, where your hike to Mandara hut begins.",
      tabs: ["Overview", "Destinations", "Meals & Drinks"],
      note: "Meals and water for this day (aside from breakfast) are all provided for your climb."
    },
    {
      day: 3,
      date: "Aug 11",
      title: "Mandara Huts to Horombo Huts",
      description: "Trek from Mandara Huts (2,740 m/9,000 ft) to Horombo Huts (3,690 m/12,100 ft), covering a distance of 11 km over 6-8 hours through heathland.",
      tabs: ["Overview", "Destinations", "Meals & Drinks"]
    },
    {
      day: 4,
      date: "Aug 12",
      title: "Horombo Huts to Kibo Huts",
      description: "Journey from Horombo Huts (3,690 m/12,100 ft) to Kibo Huts (4,695 m/15,400 ft), trekking 10 km through the alpine desert over 6-8 hours.",
      tabs: ["Overview", "Destinations", "Meals & Drinks"]
    },
    {
      day: 5,
      date: "Aug 13",
      title: "Summit day at Uhuru Peak!",
      description: "Summit Day! Trek from Kibo Huts (4,695 m/15,400 ft) to Uhuru Peak (5,895 m/19,340 ft), then back to Horombo Huts (3,690 m/12,100 ft), covering a total distance of 14 km up and 10 km down.",
      tabs: ["Overview", "Destinations", "Meals & Drinks"],
      note: "You'll start your accent very early in the morning (almost close to midnight) and will ascend overnight."
    },
    {
      day: 6,
      date: "Aug 14",
      title: "Horombo Huts back to Springlands Hotel",
      description: "Descend from Horombo Huts (3,690 m/12,100 ft) to Marangu Gate (1,830 m/6,000 ft), then proceed to Moshi (890 m/2,920 ft). This 18 km trek will take about 5-7 hours.",
      tabs: ["Overview", "Hotel", "Destinations", "Meals & Drinks"],
      hotel: {
        name: "Springlands Hotel",
        type: "Hotel",
        category: "Value",
        image: "https://static.cloudsafaris.com/public/3568cb68-25ae-4b48-a61f-63763524a12a_springlands-hotel_157046552324.jpg?action=get&host=true",
        meals: "Breakfast, Water"
      }
    },
    {
      day: 7,
      date: "Aug 15",
      title: "Departure",
      description: "Today marks the end of your trip as you head toward your next destination.",
      tabs: ["Overview", "Destinations", "Extras"],
      note: "Please select one of the extras to add onto your trip if you need a drop-off at Kilimanjaro International Airport or an alternative in Arusha."
    }
  ];

  return (
    <>
     <PageHeader />
    <div className="trip-detail-page">
       
      <Container fluid className="px-3 px-md-5">
        {/* Header Section */}
        <Row className="mt-4 mb-5">
          <Col>
            <div className="trip-header">
              <h1 className="trip-title">{tripData.title}</h1>
              <div className="trip-meta">
                <span>{tripData.nights} Nights</span>
                <div className="meta-dot"></div>
                <span>{tripData.days} Days</span>
                <div className="meta-dot"></div>
                <span>{tripData.destinations} Destinations</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* Image Gallery */}
        <Row className="mb-5">
          <Col>
            <div className="image-gallery relative">
              <div className="d-flex gap-2 h-96">
                {/* Left side image */}
                <div className="hidden sm:flex w-1/4 h-full">
                  <img 
                    src={tripData.images[3]} 
                    alt={tripData.title} 
                    className="block object-cover w-full h-full rounded-l-sm rounded-r-xl md:rounded-sm hover:cursor-pointer" 
                  />
                </div>
                {/* Middle section with two stacked images */}
                <div className="hidden sm:flex flex-col w-1/2 lg:w-1/3 h-full">
                  <div className="w-full h-1/2">
                    <img 
                      src={tripData.images[0]} 
                      alt={tripData.title} 
                      className="block object-cover w-full h-full rounded-l-sm rounded-r-xl md:rounded-sm hover:cursor-pointer" 
                    />
                  </div>
                  <div className="hidden sm:flex w-full pt-2 h-1/2">
                    <img 
                      src={tripData.images[1]} 
                      alt={tripData.title} 
                      className="object-cover w-full h-full rounded-l-sm rounded-r-xl md:rounded-sm hover:cursor-pointer" 
                    />
                  </div>
                </div>
                {/* Right side image */}
                <div className="hidden sm:flex w-1/4 h-full relative">
                  <img 
                    src={tripData.images[2]} 
                    alt={tripData.title} 
                    className="object-cover w-full h-full rounded-l-sm rounded-r-xl md:rounded-sm hover:cursor-pointer" 
                  />
                  {/* View gallery button positioned in bottom-right */}
                  <div className="absolute bottom-4 right-4">
                    <Button variant="outline-light" className="view-gallery-btn bg-black bg-opacity-50 text-white border-white hover:bg-opacity-70">
                      <span className="d-block d-sm-none">Gallery</span>
                      <span className="d-none d-sm-block">View gallery</span>
                      <i className="fas fa-images ms-2"></i>
                    </Button>
                  </div>
                </div>
                {/* Mobile view - show only first image */}
                <div className="flex sm:hidden w-full h-full relative">
                  <img 
                    src={tripData.images[0]} 
                    alt={tripData.title} 
                    className="block object-cover w-full h-full rounded-l-sm rounded-r-xl md:rounded-sm hover:cursor-pointer" 
                  />
                  {/* Mobile view gallery button */}
                  <div className="absolute bottom-4 right-4">
                    <Button variant="outline-light" size="sm" className="view-gallery-btn bg-black bg-opacity-50 text-white border-white hover:bg-opacity-70 px-2 py-1">
                      <span className="d-block">Gallery</span>
                      <i className="fas fa-images ms-2"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Main Content Grid */}
        <Row className="main-content-grid">
          {/* Left Column - Trip Details */}
          <Col lg={7} className="left-column">
            {/* Trip Overview */}
            <Card className="mb-4 overview-card">
              <Card.Body className="p-4">
                <h2 className="section-title mb-4">Trip overview</h2>
                <div className="overview-text">
                  {expandedOverview ? (
                    <p>{tripData.overview}</p>
                  ) : (
                    <p>{tripData.overview.substring(0, 200)}...</p>
                  )}
                  <Button 
                    variant="link" 
                    className="p-0 show-more-btn"
                    onClick={() => setExpandedOverview(!expandedOverview)}
                  >
                    {expandedOverview ? 'Show less' : 'Show more'}
                    <i className={`fas fa-chevron-${expandedOverview ? 'up' : 'down'} ms-2`}></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>

            {/* Itinerary Section */}
            <ItinerarySection 
              travellers={2}
              startDate="2025-08-09"
              endDate="2025-08-15"
              days={itineraryDays}
            />

            {/* Day by Day Section */}
            <div style={{ marginTop: '3rem' }}>
              <DayByDay itineraryDays={itineraryDays} />
            </div>

            {/* What to Know Section */}
            <div style={{ marginTop: '3rem' }}>
              <WhatToKnowSection />
            </div>
          </Col>

          {/* Right Column - Booking Widget */}
          <Col lg={5} className="right-column">
            {/* Add to Cart Section - Moved to top for prominence */}
            <Card className="add-to-cart-section mb-4">
              <Card.Body className="p-4 text-center">
                <div className="mb-3">
                  <h4 className="mb-2">Ready to book this adventure?</h4>
                  <p className="text-muted mb-0">Secure your spot on this amazing journey</p>
                </div>
                <Button className="add-to-cart-btn w-100 mb-3" size="lg">
                  Add to cart
                </Button>
                <p className="booking-note text-center mb-0">
                  Offer is made subject to availability at the time of booking. Added trip extras are finalized on request.
                </p>
              </Card.Body>
            </Card>

            {/* Brief Itinerary - Moved up for better visibility */}
            <Card className="brief-itinerary mb-4">
              <Card.Body className="p-4">
                <h3 className="section-title mb-4">Brief Itinerary</h3>
                <div className="itinerary-timeline">
                  {itineraryDays.map((day, index) => (
                    <div key={day.day} className="timeline-item">
                      <div className="timeline-header">
                        <div className="timeline-day">
                          <div className="day-number">Day {day.day}</div>
                          <small className="day-date">{day.date}</small>
                        </div>
                        <div className="timeline-content">
                          <div className="timeline-dots">
                            <div className="timeline-dot"></div>
                            {index < itineraryDays.length - 1 && <div className="timeline-line"></div>}
                          </div>
                          <div className="timeline-title">{day.title}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>

            {/* Booking Widget - Moved below for booking details */}
            <Card className="booking-widget sticky-top">
              <Card.Body className="p-4">
                {/* Travelers and Date Selector */}
                <div className="booking-selectors mb-4">
                  <Row className="g-0 border rounded">
                    <Col className="border-end">
                      <div className="selector-item p-3">
                        <small className="selector-label">TRAVELLERS</small>
                        <div className="selector-value">{tripData.travelers} travellers</div>
                      </div>
                    </Col>
                    <Col>
                      <div className="selector-item p-3">
                        <small className="selector-label">ARRIVAL</small>
                        <div className="selector-value">{tripData.arrivalDate}</div>
                      </div>
                    </Col>
                  </Row>
                </div>

                {/* Price Breakdown */}
                <div className="price-breakdown mb-4">
                  <div className="price-item">
                    <div>
                      <div className="price-label">Adult</div>
                      <small className="price-sublabel">Over 13 years old</small>
                    </div>
                    <div className="price-amount">${tripData.price} USD</div>
                  </div>
                  <div className="price-item">
                    <div>
                      <div className="price-label">Adult</div>
                      <small className="price-sublabel">Over 13 years old</small>
                    </div>
                    <div className="price-amount">${tripData.price} USD</div>
                  </div>
                </div>

                {/* Total */}
                <div className="total-section mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Total</h5>
                    <div className="total-price">${tripData.totalPrice} USD</div>
                  </div>
                </div>

                {/* Additional Actions */}
                <div className="additional-actions">
                  <Row>
                    <Col>
                      <Button variant="link" className="p-0 referral-btn">
                        Have a referral code?
                      </Button>
                    </Col>
                    <Col className="text-end">
                      <Button variant="link" className="p-0 share-btn">
                        Share
                        <i className="fas fa-arrow-up-from-bracket ms-1"></i>
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Testimonials Section */}
        <TestimonialsSection />
      </Container>

    </div>
               {/* Footer */}
      <Footer />
    </>
  );
};

export default TripDetailPage;
