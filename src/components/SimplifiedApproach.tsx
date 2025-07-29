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
          <FeatureTitle>Curated or custom, commissionable safaris</FeatureTitle>
          <FeatureDescription>
            Ditch the endless emails and planning threads. Our curated, multi-day safaris are advisor-ready, commissionable, and designed for instant pitching. You book, we take care of the rest.
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <img 
              src="https://static.cloudsafaris.com/public/cruiserCar.png?action=get" 
              alt="Transparent pricing illustration"
            />
          </FeatureIcon>
          <FeatureTitle>Transparent, direct-to-DMC pricing</FeatureTitle>
          <FeatureDescription>
            No hidden markups or middlemen. Get instant access to clear, commissionable rates straight from the source so you can quote with confidence and close faster.
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
