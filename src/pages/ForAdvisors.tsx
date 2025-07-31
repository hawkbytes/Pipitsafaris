import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';
import ConsultationSection from '../components/ConsultationSection';
import SimplifiedApproach from '../components/SimplifiedApproach';
import HowPipitsafarisWorks from '../components/HowItWorks';
import HeroSection from '../components/HeroSection';
import {
  PageContainer,
  PartnersSection,
  PartnersTitle,
  PartnersGrid,
  PartnerLogo
} from '../styles/ForAdvisorsStyles';

const ForAdvisors: React.FC = () => {
  return (
    <PageContainer>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Partners Section */}
      <PartnersSection>
        <PartnersTitle>Featured Partners</PartnersTitle>
        <PartnersGrid>
          <PartnerLogo>travly</PartnerLogo>
          <PartnerLogo>FORA</PartnerLogo>
          <PartnerLogo>SAFARI</PartnerLogo>
          <PartnerLogo>50°NORTH</PartnerLogo>
          <PartnerLogo>S</PartnerLogo>
        </PartnersGrid>
      </PartnersSection>

      {/* How Pipitsafaris Works */}
        <HowPipitsafarisWorks />
    
        {/* Features Section */}

      {/* Simplified Approach */}
      <SimplifiedApproach />


      {/* Consultation Section */}
      <ConsultationSection />

      {/* Call to Action Component */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </PageContainer>
  );
};

export default ForAdvisors;
