import styled from 'styled-components';

export const CTASection = styled.section`
  position: relative;
  width: 100%;
  height: 384px; /* h-96 = 24rem = 384px */
  display: flex;
  align-items: center;
  background-image: url('https://static.cloudsafaris.com/public/polina-koroleva-zVa06Y7CxCY-unsplash.jpg?action=get');
  background-size: cover;
  background-position: bottom;
`;

export const CTAOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
`;

export const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const CTAContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1280px; /* max-w-7xl */
  width: 100%;
  padding: 0 40px; /* xpad equivalent */
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const CTATitle = styled.h2`
  color: white;
  font-size: 2rem; /* text-3xl */
  font-weight: 600;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  
  @media (min-width: 1024px) {
    font-size: 2.25rem; /* lg:text-4xl */
  }
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const CTASubtitle = styled.p`
  color: rgba(255, 255, 255, 0.9); /* text-white/90 */
  font-size: 1.125rem; /* text-lg */
  margin-bottom: 1.5rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CTAButton = styled.a`
  display: inline-block;
  width: fit-content;
  background: white;
  color: #171717; /* text-neutral-900 */
  font-weight: 600;
  padding: 0.75rem 1.5rem; /* px-6 py-3 */
  border-radius: 9999px; /* rounded-full */
  transition: all 0.3s ease;
  text-decoration: none;
  transform: translateY(0);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: #fafafa; /* hover:bg-neutral-50 */
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  
  &:active {
    transform: translateY(0);
  }
`;
