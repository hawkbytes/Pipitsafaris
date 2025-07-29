import React from 'react';
import {
  CTASection,
  CTAOverlay,
  CTAContainer,
  CTAContent,
  CTATitle,
  CTASubtitle,
  CTAButton
} from '../styles/CallToActionStyles';

const CallToAction: React.FC = () => {
  return (
    <CTASection>
      <CTAOverlay />
      <CTAContainer>
        <CTAContent>
          <CTATitle>Ready to start selling unforgettable safaris?</CTATitle>
          <CTASubtitle>
            Sign up your agency today or join the agency you work for if it's already on CloudSafaris.
          </CTASubtitle>
          <CTAButton href="/sign-up">Sign up now</CTAButton>
        </CTAContent>
      </CTAContainer>
    </CTASection>
  );
};

export default CallToAction;
