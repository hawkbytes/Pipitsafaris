import React, { useState, useRef } from 'react';

interface Testimonial {
  id: number;
  name: string;
  date: string;
  location: string;
  image: string;
  review: string;
  fullReview: string;
}

const TestimonialsSection: React.FC = () => {
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rita & Larry",
      date: "June 2025",
      location: "Arusha, Tanzania",
      image: "https://static.cloudsafaris.com/public/e83c3b6f-68cf-4be3-8e5e-bb852f9f65c3.jpg?action=get",
      review: "What an amazing safari! Huge thank you for putting it all together. We saw everything — elephants, zebras, ostriches, a lioness resting in the middle of the road, lion...",
      fullReview: "What an amazing safari! Huge thank you for putting it all together. We saw everything — elephants, zebras, ostriches, a lioness resting in the middle of the road, lions sleeping under trees, and so much more. The accommodations were excellent, and our guide was incredibly knowledgeable. This trip exceeded all our expectations!"
    },
    {
      id: 2,
      name: "Humaid",
      date: "May 2025",
      location: "United Arab Emirates",
      image: "https://static.cloudsafaris.com/public/HumaidTrip2.jpeg?action=get",
      review: "Just wanted to say thank you for the amazing trip in Kenya! Everything was perfectly organized — from the safari experience to the accommodations and guides...",
      fullReview: "Just wanted to say thank you for the amazing trip in Kenya! Everything was perfectly organized — from the safari experience to the accommodations and guides. The level of service was exceptional, and every detail was taken care of. We felt completely supported throughout our journey and made memories that will last a lifetime."
    },
    {
      id: 3,
      name: "Dave & Family",
      date: "May 2025",
      location: "Virginia, USA",
      image: "https://static.cloudsafaris.com/public/b204a7c3-05a5-475f-87a2-18ef28f5901d.JPG?action=get",
      review: "Our safari in Tanzania with Travly (via Pipitsafaris) was truly unforgettable. The team was fantastic to work with. They helped us design a custom trip that matched our bu...",
      fullReview: "Our safari in Tanzania with Travly (via Pipitsafaris) was truly unforgettable. The team was fantastic to work with. They helped us design a custom trip that matched our budget and interests perfectly. From the wildlife viewing to the cultural experiences, everything was expertly planned and executed."
    },
    {
      id: 4,
      name: "Abigael",
      date: "May 2025",
      location: "France",
      image: "https://static.cloudsafaris.com/public/abigael-car-image.jpg?action=get",
      review: "My safari experience was incredibly well organized from start to finish. The Travly team was supportive even before the trip began, providing all the information I needed...",
      fullReview: "My safari experience was incredibly well organized from start to finish. The Travly team was supportive even before the trip began, providing all the information I needed and answering all my questions. The guides were professional, the vehicles were excellent, and the whole experience was seamless."
    },
    {
      id: 5,
      name: "Tasha",
      date: "December 2024",
      location: "Manchester, UK",
      image: "https://static.cloudsafaris.com/public/travly-safari-cruiser.png?action=get",
      review: "Pipitsafaris made our entire safari planning experience smooth, thoughtful, and deeply personalized for our safari in Tanzania. The team's expertise and care gave us total confiden...",
      fullReview: "Pipitsafaris made our entire safari planning experience smooth, thoughtful, and deeply personalized for our safari in Tanzania. The team's expertise and care gave us total confidence in our trip. Every aspect was perfectly coordinated, and we felt supported throughout our adventure."
    },
    {
      id: 6,
      name: "Dana & Dennis",
      date: "October 2024",
      location: "Washington, D.C.",
      image: "https://static.cloudsafaris.com/public/dana-dennis.jpg?action=get",
      review: "I recently had the pleasure of working with Josh and Cloud Safaris for my trip with my father to Kenya, and I cannot express enough how outstanding the experience was. Clo...",
      fullReview: "I recently had the pleasure of working with Josh and Pipit Safaris for my trip with my father to Kenya, and I cannot express enough how outstanding the experience was. Pipitsafaris went above and beyond to ensure our trip was perfect, and we created memories that will last forever."
    },
    {
      id: 7,
      name: "Lester & Group",
      date: "September 2024",
      location: "UK",
      image: "https://static.cloudsafaris.com/public/IMG_9963.jpg?action=get",
      review: "We want to express our heartfelt gratitude for all the arrangements and support that led us to have such an incredible safari experience. We got a taste of the richness, diversity...",
      fullReview: "We want to express our heartfelt gratitude for all the arrangements and support that led us to have such an incredible safari experience. We got a taste of the richness, diversity, and beauty of Tanzania that exceeded our expectations. The entire team was professional and caring."
    },
    {
      id: 8,
      name: "Angela & Din",
      date: "February 2024",
      location: "Dar es Salaam, Tanzania",
      image: "https://static.cloudsafaris.com/public/Angela&Din.jpeg?action=get",
      review: "The booking process with Pipitsafaris was truly exceptional and stood out as one of the best experiences we've ever had with an agency. Unlike other companies we've dealt with in t...",
      fullReview: "The booking process with Pipitsafaris was truly exceptional and stood out as one of the best experiences we've ever had with an agency. Unlike other companies we've dealt with in the past, they provided clear communication, detailed planning, and exceptional service throughout."
    },
    {
      id: 9,
      name: "Aliya",
      date: "February 2024",
      location: "Missouri, USA",
      image: "https://static.cloudsafaris.com/public/aliya.jpg?action=get",
      review: "It was an incredible experience. I felt like I had the best team by my side and they got me through some of the toughest moments I've experienced. Very organized and the entire tea...",
      fullReview: "It was an incredible experience. I felt like I had the best team by my side and they got me through some of the toughest moments I've experienced. Very organized and the entire team was supportive, knowledgeable, and made sure I felt safe and comfortable throughout the journey."
    },
    {
      id: 10,
      name: "Brandon",
      date: "February 2024",
      location: "Mwanza, Tanzania",
      image: "https://static.cloudsafaris.com/public/IMG_8246.jpg?action=get",
      review: "Booking my trips to Amboseli National Park and Mount Kilimanjaro through Pipitsafaris were smooth and straightforward. Their planning and attention to detail let me spend more time...",
      fullReview: "Booking my trips to Amboseli National Park and Mount Kilimanjaro through Pipitsafaris were smooth and straightforward. Their planning and attention to detail let me spend more time enjoying the experience rather than worrying about logistics. Highly recommended!"
    },
    {
      id: 11,
      name: "Alysha & Colin",
      date: "January 2024",
      location: "Tanzania",
      image: "https://static.cloudsafaris.com/public/Colin&Alysha.jpeg?action=get",
      review: "We had a fantastic time on our trip to Tanzania!! It was a once in a lifetime trip and we made memories that will last a lifetime!! Pipitsafaris did an amazing job organizing the t...",
      fullReview: "We had a fantastic time on our trip to Tanzania!! It was a once in a lifetime trip and we made memories that will last a lifetime!! Pipitsafaris did an amazing job organizing the trip, and everything went smoothly. We can't wait to book our next adventure with them!"
    },
    {
      id: 12,
      name: "Suzanne & Paul",
      date: "November 2023",
      location: "Dodoma, Tanzania",
      image: "https://static.cloudsafaris.com/public/Suzanne.jpeg?action=get",
      review: "We want to say thanks again for arranging the most incredible trip ever for us!!! We'll never forget it ❤️🌍",
      fullReview: "We want to say thanks again for arranging the most incredible trip ever for us!!! We'll never forget it ❤️🌍 Every moment was perfectly planned and executed. The team made our dream safari a reality!"
    },
    {
      id: 13,
      name: "Mitch",
      date: "March 2023",
      location: "New York, USA",
      image: "https://static.cloudsafaris.com/public/image001.jpg?action=get",
      review: "I am pleased to say that I could not be happier with the outcome. The entire trip from start to finish far exceeded my expectations. Pipitsafaris offered personalized attention, gr...",
      fullReview: "I am pleased to say that I could not be happier with the outcome. The entire trip from start to finish far exceeded my expectations. Pipitsafaris offered personalized attention, great communication, and delivered an unforgettable experience that I will treasure forever."
    }
  ];

  const toggleExpanded = (id: number) => {
    const newExpanded = new Set(expandedReviews);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedReviews(newExpanded);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320, // Scroll by one card width (300px) + gap (20px)
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320, // Scroll by one card width (300px) + gap (20px)
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{ 
      width: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1rem',
      marginTop: '4rem',
      marginBottom: '3rem'
    }}>
      {/* Header */}
      <div style={{
        color: '#171717',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: '0.25rem'
      }}>
        <div>
          <h2 style={{
            fontWeight: 700, 
            fontSize: '2.25rem',
            margin: 0,
            marginBottom: '0.25rem'
          }}>
            What our travellers say
          </h2>
          <div style={{
            fontSize: '0.875rem',
            fontWeight: 500,
            color: '#737373'
          }}>
            Reviews from our trips
          </div>
        </div>
        <div style={{
          display: 'none',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '1rem'
        }} className="d-sm-flex">
          {/* Left Arrow */}
          <div 
            onClick={scrollLeft}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #fafafa',
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              backgroundColor: 'white',
              cursor: 'pointer',
              opacity: 1,
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              style={{
                width: '0.75rem',
                height: '0.75rem',
                color: '#171717'
              }}
              fill="currentColor"
              viewBox="0 0 320 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </div>
          {/* Right Arrow */}
          <div 
            onClick={scrollRight}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #fafafa',
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              backgroundColor: 'white',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              style={{
                width: '0.75rem',
                height: '0.75rem',
                color: '#171717'
              }}
              fill="currentColor"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Testimonials Scroll Container */}
      <div 
        ref={scrollContainerRef}
        style={{
          display: 'flex',
          flexDirection: 'row',
          overflowX: 'auto',
          gap: '1.5rem',
          paddingRight: '1.5rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }} 
        className="no-scrollbar"
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            style={{
              width: '300px',
              flexShrink: 0,
              position: 'relative'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '300px'
            }}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{
                  height: '200px',
                  width: '100%',
                  borderRadius: '1rem',
                  objectFit: 'cover',
                  marginBottom: '1rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              />
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: '#171717',
                margin: 0,
                marginBottom: '0.5rem'
              }}>
                {testimonial.name}
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '0.375rem',
                marginBottom: '0.5rem'
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#737373'
                }}>
                  {testimonial.date}
                </div>
                <div style={{
                  width: '2px',
                  height: '2px',
                  backgroundColor: '#737373',
                  borderRadius: '50%'
                }} />
                <div style={{
                  fontSize: '0.75rem',
                  color: '#737373'
                }}>
                  {testimonial.location}
                </div>
              </div>
              <div style={{
                color: '#404040',
                marginTop: '0.5rem'
              }}>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: 400,
                  lineHeight: 1.5
                }}>
                  {expandedReviews.has(testimonial.id) ? testimonial.fullReview : testimonial.review}
                  {!expandedReviews.has(testimonial.id) && testimonial.review.endsWith('...') && (
                    <div>
                      <button
                        onClick={() => toggleExpanded(testimonial.id)}
                        style={{
                          marginTop: '0.5rem',
                          fontWeight: 500,
                          cursor: 'pointer',
                          textDecoration: 'underline',
                          background: 'none',
                          border: 'none',
                          color: '#171717',
                          padding: 0,
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        Show more
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          style={{
                            fontSize: '0.875rem',
                            marginLeft: '0.375rem',
                            width: '1rem',
                            height: '1rem'
                          }}
                          fill="currentColor"
                          viewBox="0 0 512 512"
                        >
                          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                      </button>
                    </div>
                  )}
                  {expandedReviews.has(testimonial.id) && (
                    <div>
                      <button
                        onClick={() => toggleExpanded(testimonial.id)}
                        style={{
                          marginTop: '0.5rem',
                          fontWeight: 500,
                          cursor: 'pointer',
                          textDecoration: 'underline',
                          background: 'none',
                          border: 'none',
                          color: '#171717',
                          padding: 0,
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        Show less
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          style={{
                            fontSize: '0.875rem',
                            marginLeft: '0.375rem',
                            width: '1rem',
                            height: '1rem',
                            transform: 'rotate(180deg)'
                          }}
                          fill="currentColor"
                          viewBox="0 0 512 512"
                        >
                          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
