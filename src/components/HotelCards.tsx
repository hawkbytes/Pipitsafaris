import React, { useState } from 'react';
import styled from 'styled-components';

const HotelCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem 0;
`;

const HotelCard = styled.div`
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
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
  height: 280px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 0.75rem;
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
  width: 24px;
  height: 24px;
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
    transform: translateY(-50%) scale(1.1);
  }

  &.left {
    left: 12px;
  }

  &.right {
    right: 12px;
  }

  svg {
    width: 12px;
    height: 12px;
    fill: #333;
  }
`;

const DotIndicators = styled.div`
  position: absolute;
  bottom: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 6px;
  z-index: 15;
`;

const Dot = styled.div<{ active: boolean }>`
  width: ${props => props.active ? '8px' : '6px'};
  height: ${props => props.active ? '8px' : '6px'};
  border-radius: 50%;
  background: ${props => props.active ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.8)'};
  backdrop-filter: blur(4px);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.2);
  }
`;

const HotelInfo = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
        </HotelMeta>
      </HotelInfo>
    </HotelCard>
  );
};

interface HotelCardsProps {
  onMapFocus?: (coordinates: { lat: number; lng: number }) => void;
}

const HotelCards: React.FC<HotelCardsProps> = ({ onMapFocus }) => {
  return (
    <HotelCardsContainer>
      {hotels.map((hotel) => (
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
