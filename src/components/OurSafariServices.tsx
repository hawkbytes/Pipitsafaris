import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  background-color: white;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 24px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #171717;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #666;
  
  &::before {
    content: '•';
    color: #2563eb;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const PopularPackagesSection = styled.div`
  background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
  border-radius: 16px;
  padding: 3rem 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const PackagesTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #171717;
  text-align: center;
  margin-bottom: 2rem;
`;

const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const PackageCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
  }
`;

const PackageImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PackageContent = styled.div`
  padding: 1.5rem;
`;

const PackageTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #171717;
  margin-bottom: 0.75rem;
`;

const PackageDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const PackagePrice = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 0.5rem;
`;

const PackageDuration = styled.div`
  font-size: 0.875rem;
  color: #888;
`;

const OurSafariServices: React.FC = () => {
  const services = [
    {
      icon: "🦁",
      title: "Wildlife Safaris",
      description: "Experience the Big Five and witness the Great Migration in Kenya and Tanzania's most famous national parks and reserves.",
      features: [
        "Serengeti National Park game drives",
        "Maasai Mara wildlife viewing",
        "Ngorongoro Crater tours",
        "Professional safari guides",
        "4WD safari vehicles"
      ]
    },
    {
      icon: "🦍",
      title: "Gorilla Trekking",
      description: "Trek through the misty mountains of Uganda and Rwanda to encounter endangered mountain gorillas in their natural habitat.",
      features: [
        "Bwindi Impenetrable Forest",
        "Volcanoes National Park",
        "Expert gorilla tracking guides",
        "Small group experiences",
        "Conservation contribution"
      ]
    },
    {
      icon: "🏔️",
      title: "Mountain Climbing",
      description: "Conquer Africa's highest peaks including Mount Kilimanjaro and Mount Kenya with our experienced mountain guides.",
      features: [
        "Kilimanjaro climbing routes",
        "Mount Kenya expeditions",
        "Professional mountain guides",
        "All equipment provided",
        "Safety-first approach"
      ]
    },
    {
      icon: "🏕️",
      title: "Camping Safaris",
      description: "Immerse yourself in the African wilderness with our authentic camping experiences under the stars.",
      features: [
        "Authentic bush camping",
        "Campfire experiences",
        "Traditional meals",
        "Night game drives",
        "Cultural interactions"
      ]
    },
    {
      icon: "🏨",
      title: "Luxury Safaris",
      description: "Enjoy premium accommodations and exclusive experiences in Africa's finest lodges and luxury camps.",
      features: [
        "5-star safari lodges",
        "Private game drives",
        "Gourmet dining",
        "Spa treatments",
        "Butler service"
      ]
    },
    {
      icon: "📸",
      title: "Photography Tours",
      description: "Specialized photography safaris designed for capturing Africa's incredible wildlife and landscapes.",
      features: [
        "Golden hour game drives",
        "Photography workshops",
        "Specialized vehicles",
        "Professional guidance",
        "Portfolio reviews"
      ]
    }
  ];

  const popularPackages = [
    {
      title: "Classic Kenya Safari",
      description: "7-day adventure through Maasai Mara, Lake Nakuru, and Amboseli National Parks",
      price: "From $2,850",
      duration: "7 Days / 6 Nights",
      image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Tanzania Discovery",
      description: "10-day safari covering Serengeti, Ngorongoro Crater, and Tarangire National Park",
      price: "From $3,650",
      duration: "10 Days / 9 Nights",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Uganda Gorilla Experience",
      description: "5-day gorilla trekking adventure in Bwindi Impenetrable Forest",
      price: "From $2,200",
      duration: "5 Days / 4 Nights",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Kilimanjaro Climbing",
      description: "6-day Machame route climb to the Roof of Africa",
      price: "From $1,950",
      duration: "6 Days / 5 Nights",
      image: "https://images.unsplash.com/photo-1585741019003-0b019b03ee88?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <ServicesContainer>
      <ContentWrapper>
        <HeaderSection>
          <MainTitle>Our Safari Services</MainTitle>
          <Subtitle>
            From classic wildlife safaris to mountain climbing adventures, we offer comprehensive 
            safari services across East Africa with expert local guides and authentic experiences.
          </Subtitle>
        </HeaderSection>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, featureIndex) => (
                  <FeatureItem key={featureIndex}>{feature}</FeatureItem>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <PopularPackagesSection>
          <PackagesTitle>Popular Safari Packages</PackagesTitle>
          <PackagesGrid>
            {popularPackages.map((pkg, index) => (
              <PackageCard key={index}>
                <PackageImage src={pkg.image} alt={pkg.title} />
                <PackageContent>
                  <PackageTitle>{pkg.title}</PackageTitle>
                  <PackageDescription>{pkg.description}</PackageDescription>
                  <PackagePrice>{pkg.price}</PackagePrice>
                  <PackageDuration>{pkg.duration}</PackageDuration>
                </PackageContent>
              </PackageCard>
            ))}
          </PackagesGrid>
        </PopularPackagesSection>
      </ContentWrapper>
    </ServicesContainer>
  );
};

export default OurSafariServices;
