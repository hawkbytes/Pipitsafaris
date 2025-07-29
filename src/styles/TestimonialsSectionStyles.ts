import styled from 'styled-components';

export const TestimonialsContainer = styled.section`
  padding: 4rem 0; /* py-16 */
  display: flex;
  flex-direction: column;
  max-width: 1280px; /* max-w-7xl */
  width: 100%;
  padding-left: 40px; /* xpad */
  padding-right: 40px; /* xpad */
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 3rem 20px;
  }
`;

export const TestimonialsTitle = styled.h2`
  font-size: 2.25rem; /* text-4xl */
  font-weight: 700; /* font-bold */
  margin-bottom: 2rem; /* mb-8 */
  color: #171717;
  
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const TestimonialsGrid = styled.div`
  max-width: 1280px; /* max-w-7xl */
  gap: 1rem; /* gap-4 */
  display: flex;
  flex-direction: column;
  height: 800px; /* h-[800px] */
  
  @media (min-width: 1024px) {
    flex-direction: row; /* lg:flex-row */
    height: 500px; /* lg:h-[500px] */
  }
  
  @media (max-width: 768px) {
    height: 600px;
  }
  
  @media (max-width: 480px) {
    height: 500px;
  }
`;

interface TestimonialCardProps {
  isMain?: boolean;
}

export const TestimonialCard = styled.div<TestimonialCardProps>`
  position: relative;
  border-radius: 1.5rem; /* rounded-3xl */
  overflow: hidden;
  height: 100%; /* h-full */
  width: 100%; /* w-full */
  
  @media (min-width: 1024px) {
    width: ${props => props.isMain ? '66.666667%' : '33.333333%'}; /* lg:w-2/3 or lg:w-1/3 */
  }
`;

export const TestimonialImage = styled.img`
  width: 100%; /* w-full */
  height: 100%; /* h-full */
  object-fit: cover; /* object-cover */
`;

export const TestimonialOverlay = styled.div`
  position: absolute;
  inset: 0; /* inset-0 */
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); /* bg-gradient-to-t from-black/50 to-black/0 */
`;

export const TestimonialContent = styled.div`
  position: absolute;
  bottom: 1.5rem; /* bottom-6 */
  left: 1.5rem; /* left-6 */
  right: 1.5rem; /* right-6 */
  color: white; /* text-white */
  
  @media (max-width: 768px) {
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
  }
`;

export const TestimonialQuote = styled.p`
  font-size: 1.25rem; /* text-xl */
  font-weight: 500; /* font-medium */
  margin-bottom: 1.5rem; /* mb-6 */
  line-height: 1.6;
  
  @media (max-width: 1024px) {
    font-size: 1.125rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  }
`;

export const TestimonialAuthor = styled.p`
  font-size: 1.125rem; /* text-lg */
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const SecondaryImage = styled.img`
  width: 100%; /* w-full */
  height: 100%; /* h-full */
  object-fit: cover; /* object-cover */
`;
