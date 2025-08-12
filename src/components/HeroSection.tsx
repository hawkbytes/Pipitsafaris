import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  
  @media (max-width: 1024px) {
    height: 90vh;
  }
  
  @media (max-width: 768px) {
    height: 80vh;
  }
  
  @media (max-width: 480px) {
    height: 70vh;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const BackgroundVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
  
  @media (max-width: 768px) {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
  }
  
  @media (max-width: 480px) {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2));
  }
`;

const TopGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 25%;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
  
  @media (max-width: 768px) {
    height: 30%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
  }
  
  @media (max-width: 480px) {
    height: 35%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
  }
`;

const ContentOverlay = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 24px;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 48px;

  @media (max-width: 1024px) {
    padding: 40px 32px;
  }

  @media (max-width: 768px) {
    padding: 32px 24px;
    align-items: flex-start;
    padding-top: 80px;
  }
  
  @media (max-width: 480px) {
    padding: 24px 16px;
    padding-top: 60px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1280px;
  width: 100%;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 672px;
  
  @media (max-width: 1024px) {
    max-width: 600px;
    gap: 28px;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    gap: 24px;
  }
  
  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const MainTitle = styled.h1`
  color: white;
  font-weight: 600;
  font-size: 3rem;
  line-height: 1.1;
  margin: 0;

  @media (min-width: 1280px) {
    font-size: 4rem;
  }

  @media (max-width: 1024px) {
    font-size: 2.75rem;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
    line-height: 1.2;
  }
  
  @media (max-width: 480px) {
    font-size: 1.875rem;
    line-height: 1.25;
  }
  
  @media (max-width: 320px) {
    font-size: 1.625rem;
  }
`;

const Subtitle = styled.p`
  letter-spacing: 0.025em;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.125rem;
  font-weight: 500;
  margin: 0;
  line-height: 1.6;

  @media (min-width: 1280px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.125rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const CTAButton = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: fit-content;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 9999px;
  padding: 12px 24px;
  background: linear-gradient(to top, #f5f5f5, #ffffff);
  border: 1px solid #d4d4d4;
  color: #171717;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 140px;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    background: linear-gradient(to top, #d4d4d4, #fafafa);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
    min-width: 120px;
  }
  
  @media (max-width: 480px) {
    padding: 9px 18px;
    font-size: 0.85rem;
    min-width: 100px;
  }
  
  @media (max-width: 320px) {
    padding: 8px 16px;
    font-size: 0.8rem;
    min-width: 90px;
  }
`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <VideoContainer>
        <BackgroundVideo
          src="https://static.cloudsafaris.com/public/Landing-Video.mp4?action=get"
          autoPlay
          muted
          loop
          playsInline
        >
          Your browser does not support the video tag.
        </BackgroundVideo>
        
        <GradientOverlay />
        <TopGradient />
        
        <ContentOverlay>
          <ContentWrapper>
            <TextContent>
              <TextGroup>
                <MainTitle>
                  Experience Authentic African Safaris with PipitSafari.
                </MainTitle>
                <Subtitle>
                  Expert safari specialists crafting unforgettable wildlife adventures, cultural journeys, and mountain treks across East Africa.
                </Subtitle>
              </TextGroup>
              
              <CTAButton href="/plan-safari">
                <div>Plan Your Safari</div>
              </CTAButton>
            </TextContent>
          </ContentWrapper>
        </ContentOverlay>
      </VideoContainer>
    </HeroContainer>
  );
};

export default HeroSection;
