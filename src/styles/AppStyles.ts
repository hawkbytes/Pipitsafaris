import styled from 'styled-components';

// Top Banner
export const TopBanner = styled.div`
  background: #000;
  color: white;
  text-align: center;
  padding: 0.8rem 2rem;
  font-size: 0.9rem;
  position: relative;
  
  &:hover {
    background: #1a1a1a;
  }
`;

export const BannerText = styled.span`
  cursor: pointer;
`;

export const BannerArrow = styled.span`
  margin-left: 0.5rem;
  font-size: 0.8rem;
`;

// Main Container
export const AppContainer = styled.div`
  min-height: 100vh;
  background: #000;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`;

// Hero Section with Giraffe Background
export const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
              url('https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
`;

export const Logo = styled.div`
  font-size: 3.2rem;
  font-weight: 300;
  letter-spacing: 4px;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  
  .script {
    font-family: 'Dancing Script', cursive;
    font-size: 2.8rem;
    font-weight: 400;
    text-transform: none;
    margin-left: 1rem;
  }
`;

export const Tagline = styled.p`
  font-size: 1.1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 1rem 0 3rem;
  font-weight: 300;
`;

export const MainQuestion = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 3rem;
  opacity: 0.9;
`;

// Country Cards Container
export const CountriesContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  padding: 0 2rem;
`;

export const CountryCard = styled.div<{ isSelected?: boolean }>`
  width: 200px;
  height: 280px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: ${props => props.isSelected ? '3px solid #fff' : 'none'};
  
  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  }
`;

export const CardBackground = styled.div<{ bgImage: string }>`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),
              url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  position: relative;
`;

export const CheckmarkIcon = styled.div<{ show: boolean }>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #2c5530;
  font-weight: bold;
  opacity: ${props => props.show ? 1 : 0};
  transform: ${props => props.show ? 'scale(1)' : 'scale(0)'};
  transition: all 0.3s ease;
  
  &::after {
    content: '✓';
  }
`;

export const CountryName = styled.h3`
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 0 0.5rem 0;
`;

export const CountryDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
  font-weight: 300;
`;

// Continue Button
export const ContinueButton = styled.button<{ show: boolean }>`
  margin-top: 3rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${props => props.show ? 1 : 0};
  transform: ${props => props.show ? 'translateY(0)' : 'translateY(20px)'};
  pointer-events: ${props => props.show ? 'all' : 'none'};
  
  &:hover {
    background: white;
    color: #000;
  }
  
  &::after {
    content: '→';
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: translateX(5px);
  }
`;

// Navigation Arrows
export const NavigationArrows = styled.div`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ArrowButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`;

// Back Button
export const BackButton = styled.button`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    opacity: 0.7;
    transform: translateX(-5px);
  }
`;

// Destination Cards
export const DestinationCard = styled.div<{ isSelected?: boolean }>`
  width: 260px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  border: ${props => props.isSelected ? '3px solid #fff' : 'none'};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  }
`;

export const DestinationImage = styled.div<{ bgImage: string }>`
  width: 100%;
  height: 160px;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
              url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const DestinationInfo = styled.div`
  padding: 1.2rem;
  color: #333;
`;

export const DestinationTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.3rem 0;
  color: #2c5530;
`;

export const DestinationSubtitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0 0 0.6rem 0;
  color: #666;
`;

export const DestinationDescription = styled.p`
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0;
  color: #555;
  font-weight: 400;
`;

// Elephant Icon
export const ElephantIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.95);
  border: 3px solid #f39c12;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  z-index: 15;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.15);
    border-color: #e67e22;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }
  
  &::before {
    content: '🐘';
    font-size: 22px;
    filter: grayscale(0);
  }
`;

// Legacy components for compatibility (hidden to avoid conflicts)
export const Navigation = styled.nav`
  display: none;
`;

export const NavContainer = styled.div`
  display: none;
`;

export const NavLogo = styled.div`
  display: none;
`;

export const NavMenu = styled.ul`
  display: none;
`;

export const NavItem = styled.li`
  display: none;
`;

export const BookNowButton = styled.button`
  display: none;
`;

export const HeroContent = styled.div`
  display: none;
`;

export const HeroTitle = styled.h1`
  display: none;
`;

export const HeroSubtitle = styled.p`
  display: none;
`;

export const HeroButtons = styled.div`
  display: none;
`;

export const PrimaryButton = styled.button`
  display: none;
`;

export const SecondaryButton = styled.button`
  display: none;
`;

export const MainContent = styled.main`
  display: none;
`;

export const Section = styled.section`
  display: none;
`;

export const Container = styled.div`
  display: none;
`;

export const SectionTitle = styled.h2`
  display: none;
`;

export const SectionSubtitle = styled.p`
  display: none;
`;

export const ExperienceGrid = styled.div`
  display: none;
`;

export const ExperienceCard = styled.div`
  display: none;
`;

export const CardImage = styled.div`
  display: none;
`;

export const CardContent = styled.div`
  display: none;
`;

export const CardTitle = styled.h3`
  display: none;
`;

export const CardDescription = styled.p`
  display: none;
`;

export const CardPrice = styled.div`
  display: none;
`;

export const CardButton = styled.button`
  display: none;
`;

export const FeatureGrid = styled.div`
  display: none;
`;

export const FeatureCard = styled.div`
  display: none;
`;

export const FeatureIcon = styled.div`
  display: none;
`;

export const FeatureTitle = styled.h3`
  display: none;
`;

export const FeatureDescription = styled.p`
  display: none;
`;

export const TestimonialCard = styled.div`
  display: none;
`;

export const TestimonialText = styled.p`
  display: none;
`;

export const TestimonialAuthor = styled.div`
  display: none;
`;

export const Footer = styled.footer`
  display: none;
`;

export const FooterContent = styled.div`
  display: none;
`;

export const FooterSection = styled.div`
  display: none;
`;

export const FooterBottom = styled.div`
  display: none;
`;

export const Counter = styled.div`
  display: none;
`;

export const Header = styled.header`
  display: none;
`;

export const Subtitle = styled.p`
  display: none;
`;

export const CTASection = styled.section`
  display: none;
`;

export const CTAButton = styled.button`
  display: none;
`;

export const MainTitle = styled.h1`
  display: none;
`;

export const MainDescription = styled.p`
  display: none;
`;

export const CTATitle = styled.h3`
  display: none;
`;

export const CTADescription = styled.p`
  display: none;
`;
