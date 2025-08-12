import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BookingProcess from '../components/BookingProcess';
import FeaturedPartners from '../components/FeaturedPartners';
import OurPerks from '../components/OurPerks';
import TeamSection from '../components/TeamSection';
import ExploreSection from '../components/ExploreSection';
import CompanyOverview from '../components/CompanyOverview';
import OurSafariServices from '../components/OurSafariServices';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactUsSection from '../components/ContactUsSection';

const AboutUs: React.FC = () => {
  return (
    <>
    <Header />
    <HeroSection />
    
    {/* Company Overview - Content from old TripAdvisor listing */}
    <CompanyOverview />
    
    {/* Our Safari Services - Detailed services from old site */}
    <OurSafariServices />
    
    {/* Booking Process Section */}
    <BookingProcess />
    
    {/* Testimonials - Including reviews from old TripAdvisor listing */}
    <TestimonialsSection />
    
    {/* Featured Partners Section */}
    <FeaturedPartners />
    
    <OurPerks/>
    
    <TeamSection/>
    
    {/* Contact Information */}
    <ContactUsSection />
    
    <ExploreSection/>
    <Footer/>
    </>
  );
};

export default AboutUs;
