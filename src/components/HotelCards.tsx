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
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

const HotelImageSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding-bottom: 100%; /* 1:1 aspect ratio */
  cursor: pointer;
`;

const HotelLink = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  text-decoration: none;
`;

const HotelImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavigationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const LeftNavContainer = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RightNavContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavArrow = styled.button<{ isVisible: boolean }>`
  position: absolute;
  transition: all 0.3s ease;
  opacity: ${props => props.isVisible ? 1 : 0};
  background: rgba(255, 255, 255, 0.8);
  color: rgba(23, 23, 23, 0.8);
  border-radius: 50%;
  height: 0.75rem;
  width: 0.75rem;
  padding: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background: white;
    transition: all 0.15s ease;
  }

  &.left {
    left: 0.75rem;
  }

  &.right {
    right: 0.75rem;
  }

  svg {
    width: 0.75rem;
    height: 0.75rem;
    fill: currentColor;
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  bottom: 1rem;
  transition: all 0.3s ease;
`;

const DotsInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.375rem;
  max-width: 3.5rem;
  overflow: hidden;
`;

const Dot = styled.div<{ active: boolean }>`
  height: ${props => props.active ? '0.5rem' : '0.375rem'};
  width: ${props => props.active ? '0.5rem' : '0.375rem'};
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.8)'};
  backdrop-filter: blur(4px);
  border-radius: 50%;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: white;
  }
`;

const HotelInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const HotelTitleRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  color: #171717;
`;

const HotelName = styled.h2`
  width: 100%;
  max-width: 100%;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  word-break: break-words;
  white-space: normal;
  margin: 0;
`;

const HotelMeta = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #737373;
  font-size: 0.875rem;
  text-overflow: ellipsis;
  gap: 0.375rem;
`;

const MetaItem = styled.div``;

const MetaSeparator = styled.div`
  height: 0.1875rem;
  width: 0.1875rem;
  background: #737373;
  border-radius: 50%;
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
      'https://static.cloudsafaris.com/public/fe67ba85-87af-4196-8216-96df44a91ad9_Tarangire-Elephant-Springs_Bar_2-scaled.jpg?action=get&host=true&width=800',
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
  const [isHovered, setIsHovered] = useState(false);

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
      <HotelImageSection 
        onClick={handleImageClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
          <HotelLink 
            href={`/hotels/${hotel.id}/${hotel.slug}`} 
            target="_blank"
          />
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
              <LeftNavContainer>
                {hotel.images.length > 1 && (
                  <NavArrow 
                    className="left" 
                    onClick={prevImage}
                    isVisible={isHovered}
                  >
                    <svg viewBox="0 0 320 512">
                      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                    </svg>
                  </NavArrow>
                )}
              </LeftNavContainer>
              
              <RightNavContainer>
                {hotel.images.length > 1 && (
                  <NavArrow 
                    className="right" 
                    onClick={nextImage}
                    isVisible={isHovered}
                  >
                    <svg viewBox="0 0 320 512">
                      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                    </svg>
                  </NavArrow>
                )}
              </RightNavContainer>
              
              <DotsContainer>
                <DotsInner>
                  {hotel.images.map((_, index) => (
                    <Dot 
                      key={index} 
                      active={index === currentImageIndex}
                      onClick={(e) => goToImage(index, e)}
                    />
                  ))}
                </DotsInner>
              </DotsContainer>
            </NavigationContainer>
          </ImageOverlay>
        </HotelImageSection>
        
        <HotelLink 
          href={`/hotels/${hotel.id}/${hotel.slug}`} 
          target="_blank"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <HotelInfo>
            <HotelTitleRow>
              <HotelName>{hotel.name}</HotelName>
            </HotelTitleRow>
            <HotelMeta>
              <MetaItem>{hotel.type}</MetaItem>
              <MetaSeparator />
              <MetaItem>{hotel.category}</MetaItem>
            </HotelMeta>
          </HotelInfo>
        </HotelLink>
    </HotelCard>
  );
};

interface HotelCardsProps {
  onMapFocus?: (coordinates: { lat: number; lng: number }) => void;
}

const HotelCards: React.FC<HotelCardsProps> = ({ onMapFocus }) => {
  // Show exactly 4 hotels to match the reference
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
