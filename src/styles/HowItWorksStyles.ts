import styled from 'styled-components';

export const HowItWorksContainer = styled.section`
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
  margin-bottom: 2rem; /* mb-8 */
  color: #171717;
  
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const StepsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem; /* space-y-8 */
`;

export const StepCard = styled.div`
  display: flex; /* flex */
  flex-direction: column; /* flex-col */
  align-items: center; /* items-center */
  background-color: #fafafa; /* bg-neutral-25 */
  border-radius: 1.5rem; /* rounded-3xl */
  transition: all 0.3s ease; /* transition */
  overflow: hidden;
  
  @media (min-width: 1024px) {
    flex-direction: row; /* lg:flex-row */
    align-items: stretch; /* Make content and image same height */
    min-height: 300px;
  }
  
  &:hover {
    transform: scale(1.02); /* hover:scale-102 */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* hover:shadow-lg */
  }
`;

export const StepContent = styled.div`
  padding: 3rem; /* p-12 */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (min-width: 1024px) {
    max-width: 60%;
    padding: 3rem 4rem 3rem 3rem;
  }
  
  @media (max-width: 1023px) {
    text-align: center;
    padding: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const StepHeader = styled.div`
  display: flex; /* flex */
  flex-direction: column; /* flex-col */
  margin-bottom: 0.5rem; /* mb-2 */
  align-items: center;
  
  @media (min-width: 1024px) {
    flex-direction: row; /* lg:flex-row */
    align-items: center;
  }
`;

export const StepNumber = styled.div`
  margin-bottom: 1rem; /* mb-4 */
  min-width: 2.5rem; /* min-w-10 */
  max-width: 2.5rem; /* max-w-10 */
  height: 2.5rem; /* h-10 */
  display: flex; /* flex */
  align-items: center; /* items-center */
  justify-content: center; /* justify-center */
  background-color: #171717; /* bg-neutral-900 */
  color: white; /* text-white */
  border-radius: 50%; /* rounded-full */
  margin-right: 0;
  font-size: 1.5rem; /* text-2xl */
  font-weight: 700; /* font-bold */
  
  @media (min-width: 1024px) {
    margin-bottom: 0; /* lg:mb-0 */
    margin-right: 1rem; /* mr-4 */
  }
`;

export const StepTitle = styled.h3`
  font-size: 1.875rem; /* text-3xl */
  font-weight: 600; /* font-semibold */
  color: #171717;
  line-height: 1.2;
  
  @media (min-width: 1024px) {
    font-size: 2.25rem; /* lg:text-4xl */
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const StepDescription = styled.p`
  color: #171717; /* text-neutral-900 */
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const StepImage = styled.div`
  flex-shrink: 0;
  
  @media (min-width: 1024px) {
    flex: 0 0 40%;
    max-width: 40%;
    display: flex;
    align-items: center;
    padding: 2rem;
  }
  
  img {
    margin: 0 auto; /* mx-auto */
    width: 100%; /* w-full */
    height: auto;
    display: block;
    border-radius: 0.75rem;
  }
  
  @media (max-width: 1023px) {
    min-width: auto;
    max-width: 100%;
    padding: 0 2rem 2rem 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1rem 1rem 1rem;
  }
`;
