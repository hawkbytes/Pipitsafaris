import React from 'react';
import styled from 'styled-components';

const OverviewContainer = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const MainTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #171717;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: #171717;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 1rem;
`;

const HighlightList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const HighlightItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: #555;
`;

const CheckIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: #22c55e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  &::after {
    content: '✓';
    color: white;
    font-size: 12px;
    font-weight: bold;
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MainImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const SmallImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  padding: 2rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #666;
  font-weight: 500;
`;

const CompanyOverview: React.FC = () => {
  return (
    <OverviewContainer>
      <ContentWrapper>
        <HeaderSection>
          <MainTitle>About Pipit Safari</MainTitle>
          <Subtitle>
            Your trusted partner for authentic African safari experiences since 2019. 
            We specialize in creating unforgettable wildlife adventures across East Africa.
          </Subtitle>
        </HeaderSection>

        <AboutGrid>
          <TextContent>
            <SectionTitle>Professional Safari Specialists</SectionTitle>
            <Description>
              Pipit Safari is a premier safari company based in East Africa, specializing in 
              wildlife safaris, cultural tours, and adventure travel across Kenya, Tanzania, 
              Uganda, and Rwanda. Our experienced team of local guides and tour operators 
              ensures you experience the very best of African wildlife and culture.
            </Description>
            
            <Description>
              We pride ourselves on providing personalized safari experiences that cater to 
              your specific interests, budget, and travel style. Whether you're seeking a 
              luxury safari, family adventure, or photography expedition, we create tailor-made 
              itineraries that exceed expectations.
            </Description>

            <HighlightList>
              <HighlightItem>
                <CheckIcon />
                Professional guides with extensive wildlife knowledge
              </HighlightItem>
              <HighlightItem>
                <CheckIcon />
                Custom safari packages for all budgets
              </HighlightItem>
              <HighlightItem>
                <CheckIcon />
                Small group sizes for personalized experiences
              </HighlightItem>
              <HighlightItem>
                <CheckIcon />
                24/7 support during your safari adventure
              </HighlightItem>
              <HighlightItem>
                <CheckIcon />
                Sustainable tourism practices
              </HighlightItem>
              <HighlightItem>
                <CheckIcon />
                Authentic cultural experiences with local communities
              </HighlightItem>
            </HighlightList>
          </TextContent>

          <ImageSection>
            <MainImage 
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Safari wildlife viewing"
            />
            <ImageGrid>
              <SmallImage 
                src="https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Safari vehicle"
              />
              <SmallImage 
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Wildlife photography"
              />
            </ImageGrid>
          </ImageSection>
        </AboutGrid>

        <StatsSection>
          <StatItem>
            <StatNumber>500+</StatNumber>
            <StatLabel>Happy Travelers</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>5</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>4</StatNumber>
            <StatLabel>Countries Covered</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>4.9</StatNumber>
            <StatLabel>Average Rating</StatLabel>
          </StatItem>
        </StatsSection>
      </ContentWrapper>
    </OverviewContainer>
  );
};

export default CompanyOverview;
