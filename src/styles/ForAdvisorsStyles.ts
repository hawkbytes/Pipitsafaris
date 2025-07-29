import styled from 'styled-components';

export const PageContainer = styled.div`
//   min-height: 100vh;
//   background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
//               url('https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
//   background-size: cover;
//   background-position: center;
//   background-attachment: fixed;
//   font-family: 'Arial', sans-serif;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  
  &::before {
    content: '🏔️';
    margin-right: 10px;
    font-size: 24px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #667eea;
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const SignInButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 16px;
  
  &:hover {
    color: #667eea;
  }
`;

export const SignUpButton = styled.button`
  background: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #555;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 80vh;
  padding: 80px 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: white;
  line-height: 1.1;
  margin-bottom: 20px;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 500px;
`;

export const TryButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  color: white;
  padding: 15px 30px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

export const PartnersSection = styled.section`
  background: white;
  padding: 60px 40px;
  text-align: center;
`;

export const PartnersTitle = styled.h3`
  color: #666;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 40px;
  font-weight: normal;
`;

export const PartnersGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
`;

export const PartnerLogo = styled.div`
  font-size: 24px;
  color: #999;
  font-weight: bold;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;

export const FeaturesSection = styled.section`
  background: #f8f9fa;
  padding: 100px 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 80px;
  font-weight: bold;
`;

export const FeaturesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  
  > * {
    flex: 1 1 350px;
    max-width: 500px;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
`;

export const FeatureNumber = styled.div`
  width: 40px;
  height: 40px;
  background: #333;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
`;

export const FeatureContent = styled.div`
  flex: 1;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: bold;
`;

export const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const FeatureImage = styled.div`
  width: 300px;
  height: 200px;
  background: #e9ecef;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 14px;
  margin-left: auto;
  
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }
`;

export const ValuePropsSection = styled.section`
  background: white;
  padding: 100px 40px;
`;

export const ValuePropsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ValuePropCard = styled.div`
  text-align: center;
`;

export const ValuePropIcon = styled.div`
  width: 80px;
  height: 80px;
  background: #f8f9fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  font-size: 2rem;
`;

export const ValuePropTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: bold;
`;

export const ValuePropDescription = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 14px;
`;

export const TestimonialsSection = styled.section`
  background: #f8f9fa;
  padding: 100px 40px;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TestimonialCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const TestimonialContent = styled.p`
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
  font-style: italic;
`;

export const TestimonialAuthor = styled.div`
  color: #666;
  font-weight: 500;
`;

export const CTASection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
              url('https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  padding: 100px 40px;
  text-align: center;
`;

export const CTATitle = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const CTASubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const CTAButton = styled.button`
  background: white;
  color: #333;
  border: none;
  padding: 15px 40px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

export const Footer = styled.footer`
  background: #333;
  color: white;
  padding: 60px 40px 40px;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto 40px;
`;

export const FooterColumn = styled.div``;

export const FooterTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const FooterLink = styled.a`
  color: #ccc;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  
  &:hover {
    color: white;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #555;
  padding-top: 20px;
  text-align: center;
  color: #999;
  font-size: 14px;
`;
