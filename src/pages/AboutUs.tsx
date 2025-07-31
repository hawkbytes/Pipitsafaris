import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BookingProcess from '../components/BookingProcess';
import FeaturedPartners from '../components/FeaturedPartners';
import OurPerks from '../components/OurPerks';
import TeamSection from '../components/TeamSection';
import ExploreSection from '../components/ExploreSection';

const AboutUs: React.FC = () => {
  return (
    <>
    <Header />
    <HeroSection />
    {/* Booking Process Section */}
    <BookingProcess />
    
    {/* Featured Partners Section */}
    <FeaturedPartners />
    
    <OurPerks/>
    
    <TeamSection/>
    
    <ExploreSection/>
    <Footer/>
    </>
  );
};

export default AboutUs;
