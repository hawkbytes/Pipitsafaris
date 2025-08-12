import React from 'react';
import {
  SimplifiedApproachContainer,
  SectionTitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription
} from '../styles/SimplifiedApproachStyles';

const SimplifiedApproach: React.FC = () => {
  return (
    <SimplifiedApproachContainer>
      <SectionTitle>A simplified approach</SectionTitle>
      
      <FeaturesGrid>
        <FeatureCard>
          <FeatureIcon>
            <img 
              src="https://static.cloudsafaris.com/public/travelSetIcon.png?action=get" 
              alt="Curated safaris illustration"
            />
          </FeatureIcon>
          <FeatureTitle>Authentic safari experiences, expertly crafted</FeatureTitle>
          <FeatureDescription>
            Skip the endless research and complex planning. Our expertly curated, multi-day safari adventures are 
            ready to book, professionally guided, and designed for unforgettable wildlife experiences. You choose 
            your adventure, we handle every detail from start to finish.
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <img 
              src="https://static.cloudsafaris.com/public/cruiserCar.png?action=get" 
              alt="Transparent pricing illustration"
            />
          </FeatureIcon>
          <FeatureTitle>Transparent, fair safari pricing</FeatureTitle>
          <FeatureDescription>
            No hidden fees or surprise costs. Get clear, upfront pricing for all safari packages, accommodations, 
            and activities. We work directly with trusted local partners to offer competitive rates while ensuring 
            quality experiences and fair compensation for local communities.
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <img 
              src="https://static.cloudsafaris.com/public/phoneMessageIcon.png?action=get" 
              alt="Support illustration"
            />
          </FeatureIcon>
          <FeatureTitle>Full support, before & after booking</FeatureTitle>
          <FeatureDescription>
            From client concierge help to on-the-ground coordination, we've got your back. You shine as the expert while we handle logistics, guest communication, and post-booking ops with local teams.
          </FeatureDescription>
        </FeatureCard>
      </FeaturesGrid>
    </SimplifiedApproachContainer>
  );
};

export default SimplifiedApproach;
