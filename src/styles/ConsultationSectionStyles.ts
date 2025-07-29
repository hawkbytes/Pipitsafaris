import styled from 'styled-components';

export const ConsultationContainer = styled.section`
  padding-bottom: 4rem; /* pb-16 */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the component */
  justify-content: center;
  max-width: 1280px; /* max-w-7xl */
  width: 100%;
  margin: 0 auto; /* Center horizontally */
  padding-left: 40px; /* xpad */
  padding-right: 40px; /* xpad */
  
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 3rem;
  }
`;

export const ConsultationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px; /* max-w-7xl */
  width: 100%;
  background-color: #fafafa; /* bg-neutral-25 */
  border-radius: 1.5rem; /* rounded-3xl */
`;

export const ConsultationCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* gap-2 */
  padding: 4rem 40px; /* py-16 xpad */
  transition: all 0.3s ease;
  text-align: center; /* Center text content */
  align-items: center; /* Center items horizontally */
  
  @media (max-width: 1024px) {
    padding: 3rem 30px;
  }
  
  @media (max-width: 768px) {
    padding: 2.5rem 20px;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 15px;
  }
`;

export const ConsultationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
   align-items: flex-start;
  
  width: 100%;
`;

export const ProfileImagesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 4rem; /* h-16 */
  margin-bottom: 1rem;
  display: flex;
  justify-content: center; /* Center the profile images */
  max-width: 200px; /* Limit container width */
  
  @media (max-width: 480px) {
    height: 3rem;
    max-width: 150px;
  }
`;

interface ProfileImageProps {
  position: string;
}

export const ProfileImage = styled.img<ProfileImageProps>`
  position: absolute;
  top: 0;
  ${props => props.position === 'left-0' && 'left: 0;'}
  ${props => props.position === 'left-12' && 'left: 3rem;'} /* left-12 = 3rem */
  ${props => props.position === 'left-24' && 'left: 6rem;'} /* left-24 = 6rem */
  height: 4rem; /* h-16 */
  width: 4rem; /* w-16 */
  border: 2px solid rgba(255, 255, 255, 0.2); /* border-2 border-white/20 */
  border-radius: 50%; /* rounded-full */
  object-fit: cover;
  
  @media (max-width: 480px) {
    height: 3rem;
    width: 3rem;
    ${props => props.position === 'left-12' && 'left: 2.25rem;'} /* Adjust spacing for mobile */
    ${props => props.position === 'left-24' && 'left: 4.5rem;'} /* Adjust spacing for mobile */
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* gap-6 */
  color: #171717; /* text-neutral-900 */
  align-items: flex-start; /* Left align the text content */
  text-align: left; /* Left text alignment */
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Left align content */
  text-align: left; /* Left align text */
  width: 100%;
`;

export const Title = styled.div`
  font-size: 1.5rem; /* text-2xl */
  font-weight: 600; /* font-semibold */
  margin-bottom: 0.5rem;
  line-height: 1.3;
  text-align: left;
  
  @media (max-width: 1024px) {
    font-size: 1.375rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.125rem;
  }
`;

export const Description = styled.div`
  font-size: 1rem; /* text-base */
  line-height: 1.5;
  color: #525252; /* neutral-600 */
  text-align: left;
  max-width: 500px; /* Limit width for better readability */
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    max-width: 400px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.875rem;
    max-width: 300px;
  }
`;

export const BookButton = styled.a`
  background-color: #171717; /* bg-neutral-900 */
  color: white;
  font-weight: 500; /* font-medium */
  border-radius: 9999px; /* rounded-full */
  padding: 0.75rem 1.5rem; /* px-6 py-3 */
  width: fit-content; /* w-fit */
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;
  align-self: flex-start; /* Align button to the left */
  
  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
  
  &:hover {
    background-color: #000000; /* hover:bg-black */
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`;
