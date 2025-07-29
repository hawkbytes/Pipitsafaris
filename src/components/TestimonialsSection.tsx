import React from 'react';
import {
  TestimonialsContainer,
  TestimonialsTitle,
  TestimonialsGrid,
  TestimonialCard,
  TestimonialImage,
  TestimonialOverlay,
  TestimonialContent,
  TestimonialQuote,
  TestimonialAuthor,
  SecondaryImage
} from '../styles/TestimonialsSectionStyles';

const TestimonialsSection: React.FC = () => {
  return (
    <TestimonialsContainer>
      <TestimonialsTitle>What our partners have to say</TestimonialsTitle>
      
      <TestimonialsGrid>
        {/* Main testimonial card with overlay text */}
        <TestimonialCard isMain>
          <TestimonialImage 
            src="https://static.cloudsafaris.com/public/Travly-Zak.jpg?action=get" 
            alt="Zak Longo with colleague"
          />
          <TestimonialOverlay />
          <TestimonialContent>
            <TestimonialQuote>
              "CloudSafaris has allowed us to sell amazing trips to our clients. From the white-labelled site, to branded cars, every detail is handled by their team."
            </TestimonialQuote>
            <TestimonialAuthor>Zak Longo, Travly</TestimonialAuthor>
          </TestimonialContent>
        </TestimonialCard>

        {/* Secondary image card */}
        <TestimonialCard>
          <SecondaryImage 
            src="https://static.cloudsafaris.com/public/travlyCar2.jpg?action=get" 
            alt="Travly safari vehicle"
          />
        </TestimonialCard>
      </TestimonialsGrid>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;
