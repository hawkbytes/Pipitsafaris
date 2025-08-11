import React, { useState } from 'react';
import styled from 'styled-components';

const HotelCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem 0;
  overflow-y: auto;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 1536px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
`;

const HotelCard = styled.div`
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;
  display: flex;
  flex-direction: column;
  height: auto;
  
  &:hover {
    transform: translateY(-2px);
    cursor: pointer;
  }

  &:hover .nav-arrow {
    opacity: 1;
  }
`;

const HotelLink = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  text-decoration: none;
`;

const HotelImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* Creates 1:1 aspect ratio */
  overflow: hidden;
  cursor: pointer;
  border-radius: 0.75rem;
  
  &:hover {
    &::after {
      opacity: 0.7;
    }
  }
`;

const HotelImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${HotelCard}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavigationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 20;

  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.05);
  }

  &.left {
    left: 8px;
  }

  &.right {
    right: 8px;
  }

  svg {
    width: 10px;
    height: 10px;
    fill: #333;
  }
`;

const DotIndicators = styled.div`
  position: absolute;
  bottom: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4px;
  z-index: 15;
`;

const Dot = styled.div<{ active: boolean }>`
  width: ${props => props.active ? '7px' : '5px'};
  height: ${props => props.active ? '7px' : '5px'};
  border-radius: 50%;
  background: ${props => props.active ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.7)'};
  backdrop-filter: blur(4px);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }
`;

const HotelInfo = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const HotelName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
`;

const HotelMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;

const HotelType = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`;

const HotelCategory = styled.span`
  font-size: 0.875rem;
  color: #059669;
  font-weight: 500;
`;

const Separator = styled.span`
  color: #d1d5db;
  font-size: 0.875rem;
`;

const PriceLevelIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: 0.5rem;
`;

const DollarIcon = styled.svg`
  width: 200%;
  height: 200%;
  fill: currentColor;
  font-weight: bold;
  stroke: currentColor;
  stroke-width: 0.5px;
`;

interface Hotel {
  id: string;
  slug: string;
  name: string;
  type: string;
  category: string;
  images: string[];
  coordinates: { lat: number; lng: number };
}

const hotels: Hotel[] = [
  {
    id: 'p511',
    slug: 'tarangire-elephant-springs',
    name: 'Tarangire Elephant Springs',
    type: 'Lodge',
    category: 'Luxury',
    images: [
      'https://static.cloudsafaris.com/public/ed238a6c-c1cc-42f9-9f80-6618f1dd6c7b_Tarangire-Elephant-Springs_Swimming_Pool_1-scaled.jpeg?action=get&host=true&width=800',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80',
      'https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80'
    ],
    coordinates: { lat: -3.6509, lng: 36.0228 }
  },
  {
    id: 'p512',
    slug: 'sandies-baobab-beach-zanzibar',
    name: 'Sandies Baobab Beach Zanzibar',
    type: 'Resort',
    category: 'Luxury',
    images: [
      'https://static.cloudsafaris.com/public/fdd859b5-f616-4f93-973f-edf46fc85ff9_Sandies-Baoba-Beach_Zanzibar16.jpg?action=get&host=true&width=800',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80'
    ],
    coordinates: { lat: -6.1659, lng: 39.2026 }
  },
  {
    id: 'p513',
    slug: 'ameg-lodge',
    name: 'Ameg Lodge',
    type: 'Lodge',
    category: 'Value',
    images: [
      'https://static.cloudsafaris.com/public/abfe8ef6-4364-4f83-af55-c19f423bbddf_DSC_0022.jpeg?action=get&host=true&width=800',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80',
      'https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80',
      'https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80'
    ],
    coordinates: { lat: -2.3333, lng: 34.8333 }
  },
  {
    id: 'p514',
    slug: 'lake-naivasha-simba-lodge',
    name: 'Lake Naivasha Simba Lodge',
    type: 'Lodge',
    category: 'Comfort',
    images: [
      'https://static.cloudsafaris.com/public/5928aead-a5b7-4276-a509-df3b8c486504_caption.jpg?action=get&host=true&width=800',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80',
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80'
    ],
    coordinates: { lat: -0.7667, lng: 36.3667 }
  }
];

const getPriceLevelCount = (category: string): number => {
  switch (category) {
    case 'Value': return 1;
    case 'Comfort': return 2;
    case 'Luxury': return 3;
    case 'Exclusive': return 4;
    default: return 1;
  }
};

const renderPriceLevel = (category: string) => {
  const count = getPriceLevelCount(category);
  return (
    <PriceLevelIndicator>
      {Array.from({ length: count }).map((_, index) => (
        <DollarIcon key={index} viewBox="0 0 320 512" aria-hidden="true" focusable="false" role="img">
          <path d="M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z"/>
        </DollarIcon>
      ))}
    </PriceLevelIndicator>
  );
};

interface HotelCardProps {
  hotel: Hotel;
  onMapFocus?: (coordinates: { lat: number; lng: number }) => void;
}

const HotelCardComponent: React.FC<HotelCardProps> = ({ hotel, onMapFocus }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length);
  };

  const goToImage = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onMapFocus) {
      onMapFocus(hotel.coordinates);
    }
  };

  return (
    <HotelCard>
      <HotelImageContainer onClick={handleImageClick}>
        <HotelImage 
          src={hotel.images[currentImageIndex]} 
          alt={hotel.name}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80';
          }}
        />
        <ImageOverlay>
          <NavigationContainer>
            <HotelLink 
              href={`/hotels/${hotel.id}/${hotel.slug}`} 
              target="_blank"
            />
            
            {hotel.images.length > 1 && (
              <>
                <NavArrow className="nav-arrow left" onClick={prevImage}>
                  <svg viewBox="0 0 320 512">
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                  </svg>
                </NavArrow>
                
                <NavArrow className="nav-arrow right" onClick={nextImage}>
                  <svg viewBox="0 0 320 512">
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                  </svg>
                </NavArrow>
              </>
            )}
            
            <DotIndicators>
              {hotel.images.map((_, index) => (
                <Dot 
                  key={index} 
                  active={index === currentImageIndex}
                  onClick={(e) => goToImage(index, e)}
                />
              ))}
            </DotIndicators>
          </NavigationContainer>
        </ImageOverlay>
      </HotelImageContainer>
      
      <HotelInfo>
        <HotelName>{hotel.name}</HotelName>
        <HotelMeta>
          <HotelType>{hotel.type}</HotelType>
          <Separator>•</Separator>
          <HotelCategory>{hotel.category}</HotelCategory>
          {renderPriceLevel(hotel.category)}
        </HotelMeta>
      </HotelInfo>
    </HotelCard>
  );
};

interface HotelCardsProps {
  onMapFocus?: (coordinates: { lat: number; lng: number }) => void;
}

const HotelCards: React.FC<HotelCardsProps> = ({ onMapFocus }) => {
  // Only show first 4 hotels
  const displayedHotels = hotels.slice(0, 4);
  
  return (
    <HotelCardsContainer>
      {displayedHotels.map((hotel) => (
        <HotelCardComponent 
          key={hotel.id} 
          hotel={hotel} 
          onMapFocus={onMapFocus}
        />
      ))}
    </HotelCardsContainer>
  );
};

export default HotelCards;
