import React, { useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  position: sticky;
  top: 0;
  width: 100%;
  overflow-x: auto;
  border-bottom: 1px solid rgb(250, 250, 250);
  z-index: 10;
  height: 80px;
  background-color: white;
  
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  
  @media (min-width: 640px) {
    box-shadow: none;
  }
`;

const FilterContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  position: relative;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

const FilterButton = styled.button<{ isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
  margin-top: 0.125rem;
  padding: 1rem 0;
  border: none;
  background: none;
  cursor: pointer;
  border-bottom: 2px solid ${props => props.isActive ? 'rgb(23, 23, 23)' : 'white'};
  
  &:hover {
    border-bottom-color: rgb(250, 250, 250);
    transition: all 300ms;
  }
`;

const IconContainer = styled.div<{ isActive?: boolean }>`
  width: 18px;
  height: 18px;
  margin-bottom: 0.25rem;
  color: ${props => props.isActive ? 'rgb(23, 23, 23)' : 'rgb(115, 115, 115)'};
  transition: all 300ms;
  
  ${FilterButton}:hover & {
    color: rgb(23, 23, 23);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ButtonLabel = styled.div<{ isActive?: boolean }>`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${props => props.isActive ? 'rgb(23, 23, 23)' : 'rgb(115, 115, 115)'};
  white-space: nowrap;
  transition: all 300ms;
  
  ${FilterButton}:hover & {
    color: rgb(23, 23, 23);
  }
`;

const PriceIconContainer = styled.div<{ isActive?: boolean }>`
  width: 18px;
  height: 18px;
  padding: 0.25rem;
  margin-bottom: 0.25rem;
  color: ${props => props.isActive ? 'rgb(23, 23, 23)' : 'rgb(115, 115, 115)'};
  transition: all 300ms;
  
  ${FilterButton}:hover & {
    color: rgb(23, 23, 23);
  }
`;

const Divider = styled.div`
  height: 40px;
  margin: 2rem 0;
  width: 2px;
  background-color: rgb(250, 250, 250);
  border-radius: 0.75rem;
`;

const BookableSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const BookableLabel = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

const CheckIcon = styled.svg`
  width: 0.875rem;
  height: 0.875rem;
  margin-right: 0.375rem;
  color: #22c55e;
`;

const ToggleSwitch = styled.button<{ isOn: boolean }>`
  position: relative;
  display: inline-flex;
  height: 1.5rem;
  width: 2.5rem;
  cursor: pointer;
  border-radius: 9999px;
  padding: 0.1875rem;
  transition: all 200ms ease-in-out;
  background-color: ${props => props.isOn ? 'rgb(23, 23, 23)' : 'rgb(228, 228, 231)'};
  border: none;
  outline: none;
  
  &:focus {
    outline: 2px solid rgb(115, 115, 115);
    outline-offset: 2px;
  }
  
  @media (min-width: 640px) {
    height: 1.25rem;
    width: 2rem;
  }
`;

const ToggleThumb = styled.span<{ isOn: boolean }>`
  pointer-events: none;
  position: relative;
  display: inline-block;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 9999px;
  transform: ${props => props.isOn ? 'translateX(1rem)' : 'translateX(0)'};
  transition: transform 200ms ease-in-out;
  border: 1px solid transparent;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 640px) {
    width: 0.875rem;
    height: 0.875rem;
    transform: ${props => props.isOn ? 'translateX(0.75rem)' : 'translateX(0)'};
  }
`;

interface HotelFilterHeaderProps {
  onFilterChange?: (filters: any) => void;
}

const HotelFilterHeader: React.FC<HotelFilterHeaderProps> = ({ onFilterChange }) => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedPrice, setSelectedPrice] = useState<string>('');
  const [bookableOnly, setBookableOnly] = useState<boolean>(false);

  const accommodationTypes = [
    { id: 'lodge', label: 'Lodge', icon: 'M269.4 6C280.5-2 295.5-2 306.6 6l224 160c7.4 5.3 12.2 13.5 13.2 22.5l32 288c1 9-1.9 18.1-8 24.9s-14.7 10.7-23.8 10.7l-80 0-28.2 0c-12.1 0-23.2-6.8-28.6-17.7L306.7 293.5c-1.7-3.4-5.1-5.5-8.8-5.5c-5.5 0-9.9 4.4-9.9 9.9L288 480c0 17.7-14.3 32-32 32l-16 0L32 512c-9.1 0-17.8-3.9-23.8-10.7s-9-15.8-8-24.9l32-288c1-9 5.8-17.2 13.2-22.5L269.4 6z' },
    { id: 'mobile-camp', label: 'Mobile Camp', icon: 'M377 52c11-13.8 8.8-33.9-5-45s-33.9-8.8-45 5L288 60.8 249 12c-11-13.8-31.2-16-45-5s-16 31.2-5 45l48 60L12.3 405.4C4.3 415.4 0 427.7 0 440.4L0 464c0 26.5 21.5 48 48 48l240 0 240 0c26.5 0 48-21.5 48-48l0-23.6c0-12.7-4.3-25.1-12.3-35L329 112l48-60zM288 448l-119.5 0L288 291.7 407.5 448 288 448z' },
    { id: 'hotel', label: 'Hotel', icon: 'M0 32C0 14.3 14.3 0 32 0L480 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-176 0 0-48c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 48L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 64C14.3 64 0 49.7 0 32zm96 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8l144 0z' },
    { id: 'resort', label: 'Resort', icon: 'M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z' },
    { id: 'villa', label: 'Villa', icon: 'M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z' },
    { id: 'tented-camp', label: 'Tented Camp', icon: 'M396.6 6.5L235.8 129.1c9.6 1.8 18.9 5.8 27 12l168 128c13.2 10.1 22 24.9 24.5 41.4l6.2 41.5L608 352c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128c-11.5-8.7-27.3-8.7-38.8 0zm-153.2 160c-11.5-8.7-27.3-8.7-38.8 0l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160c-1.4 9.2 1.3 18.6 7.4 25.6S22.7 512 32 512l144 0 16 0c17.7 0 32-14.3 32-32l0-118.1c0-5.5 4.4-9.9 9.9-9.9c3.7 0 7.2 2.1 8.8 5.5l68.4 136.8c5.4 10.8 16.5 17.7 28.6 17.7l60.2 0 16 0c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z' }
  ];

  const priceCategories = [
    { id: 'value', label: 'Value', dollarSigns: 1 },
    { id: 'comfort', label: 'Comfort', dollarSigns: 1 },
    { id: 'luxury', label: 'Luxury', dollarSigns: 1 },
    { id: 'exclusive', label: 'Exclusive', dollarSigns: 1 }
  ];

  const handleTypeClick = (typeId: string) => {
    setSelectedType(selectedType === typeId ? '' : typeId);
  };

  const handlePriceClick = (priceId: string) => {
    setSelectedPrice(selectedPrice === priceId ? '' : priceId);
  };

  const handleBookableToggle = () => {
    setBookableOnly(!bookableOnly);
  };

  const dollarSignIcon = 'M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z';

  return (
    <FilterContainer>
      <FilterContent>
        <FilterSection>
          {accommodationTypes.map((type) => (
            <FilterButton
              key={type.id}
              isActive={selectedType === type.id}
              onClick={() => handleTypeClick(type.id)}
            >
              <IconContainer isActive={selectedType === type.id}>
                <IconWrapper>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    style={{ width: '200%', height: '200%' }}
                  >
                    <path fill="currentColor" d={type.icon} />
                  </svg>
                </IconWrapper>
              </IconContainer>
              <ButtonLabel isActive={selectedType === type.id}>{type.label}</ButtonLabel>
            </FilterButton>
          ))}
        </FilterSection>

        <Divider />

        <FilterSection>
          {priceCategories.map((price) => (
            <FilterButton
              key={price.id}
              isActive={selectedPrice === price.id}
              onClick={() => handlePriceClick(price.id)}
            >
              <PriceIconContainer isActive={selectedPrice === price.id}>
                <IconWrapper>
                  {Array.from({ length: price.dollarSigns }).map((_, index) => (
                    <svg
                      key={index}
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      style={{ width: '200%', height: '200%' }}
                    >
                      <path fill="currentColor" d={dollarSignIcon} />
                    </svg>
                  ))}
                </IconWrapper>
              </PriceIconContainer>
              <ButtonLabel isActive={selectedPrice === price.id}>{price.label}</ButtonLabel>
            </FilterButton>
          ))}
        </FilterSection>

        <Divider />

        <BookableSection>
          <BookableLabel>
            <CheckIcon
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </CheckIcon>
            Bookable
          </BookableLabel>
          <ToggleSwitch
            isOn={bookableOnly}
            onClick={handleBookableToggle}
            role="switch"
            aria-checked={bookableOnly}
          >
            <ToggleThumb isOn={bookableOnly} />
          </ToggleSwitch>
        </BookableSection>
      </FilterContent>
    </FilterContainer>
  );
};

export default HotelFilterHeader;
