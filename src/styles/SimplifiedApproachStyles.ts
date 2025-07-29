import styled from 'styled-components';

export const SimplifiedApproachContainer = styled.section`
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

export const SectionTitle = styled.h2`
  font-size: 2.25rem; /* text-4xl */
  font-weight: 700; /* font-bold */
  margin-bottom: 1.5rem; /* mb-6 */
  color: #171717;
  
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const FeaturesGrid = styled.div`
  margin: 0 auto;
  display: grid;
  gap: 2.5rem; /* gap-10 */
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* lg:grid-cols-3 */
  }
  
  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  background-color: white; /* bg-white */
  padding: 1.5rem; /* p-6 */
  border-radius: 1.5rem; /* rounded-3xl */
  transition: all 0.3s ease; /* transition */
  
  &:hover {
    transform: scale(1.02); /* hover:scale-102 */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* hover:shadow-lg */
    outline: 1px solid #fafafa; /* hover:outline hover:outline-1 hover:outline-neutral-25 */
  }
`;

export const FeatureIcon = styled.div`
  img {
    height: 8rem; /* h-32 */
    object-fit: contain; /* object-contain */
    width: auto;
    display: block;
  }
  
  @media (max-width: 768px) {
    text-align: center;
    
    img {
      margin: 0 auto;
    }
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 1.5rem; /* text-2xl */
  font-weight: 600; /* font-semibold */
  color: #171717;
  line-height: 1.3;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 1.125rem;
  }
`;

export const FeatureDescription = styled.p`
  margin-top: 0.75rem; /* mt-3 */
  color: #737373; /* text-neutral-500 */
  font-size: 1rem; /* text-base */
  line-height: 1.6;
  
  @media (max-width: 768px) {
    text-align: center;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;
