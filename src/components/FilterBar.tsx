import React, { useState, useRef, useEffect } from 'react';
import {
  FilterContainer,
  FilterItem,
  CheckIcon,
  CheckIconSvg,
  FilterContent,
  FilterIcon,
  FilterText,
  ChevronIcon,
  DropdownContainer,
  DropdownContent,
  DropdownTitle,
  DropdownSection,
  SectionTitle,
  CheckboxItem,
  Checkbox,
  CheckboxLabel,
  SliderContainer,
  SliderLabel,
  SliderText,
  SliderMaxText,
  PriceInput,
  CurrencySelect
} from '../styles/FilterBarStyles';

interface FilterOption {
  id: string;
  label: string;
  icon: React.ReactNode;
  viewBox: string;
  hasDropdown?: boolean;
}

const FilterBar: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState({ max: 20000, currency: 'USD' });
  const [tripDuration, setTripDuration] = useState({ max: 14 });
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown && dropdownRefs.current[openDropdown]) {
        const dropdown = dropdownRefs.current[openDropdown];
        if (dropdown && !dropdown.contains(event.target as Node)) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  const toggleFilter = (filterId: string) => {
    if (filters.find(f => f.id === filterId)?.hasDropdown) {
      setOpenDropdown(openDropdown === filterId ? null : filterId);
    } else {
      setSelectedFilters(prev => 
        prev.includes(filterId) 
          ? prev.filter(id => id !== filterId)
          : [...prev, filterId]
      );
    }
  };

  const handleCountryChange = (country: string) => {
    setSelectedCountries(prev => 
      prev.includes(country) 
        ? prev.filter(c => c !== country)
        : [...prev, country]
    );
  };

  const handleDestinationChange = (destination: string) => {
    setSelectedDestinations(prev => 
      prev.includes(destination) 
        ? prev.filter(d => d !== destination)
        : [...prev, destination]
    );
  };

  const handlePreferenceChange = (preference: string) => {
    setSelectedPreferences(prev => 
      prev.includes(preference) 
        ? prev.filter(p => p !== preference)
        : [...prev, preference]
    );
  };

  const filters: FilterOption[] = [
    {
      id: 'price',
      label: 'Price',
      viewBox: '0 0 320 512',
      hasDropdown: true,
      icon: (
        <path
          fill="currentColor"
          d="M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z"
        />
      ),
    },
    {
      id: 'duration',
      label: 'Trip duration',
      viewBox: '0 0 448 512',
      hasDropdown: true,
      icon: (
        <path
          fill="currentColor"
          d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"
        />
      ),
    },
    {
      id: 'countries',
      label: 'Countries',
      viewBox: '0 0 512 512',
      hasDropdown: true,
      icon: (
        <path
          fill="currentColor"
          d="M177.8 63.2l10 17.4c2.8 4.8 4.2 10.3 4.2 15.9l0 41.4c0 3.9 1.6 7.7 4.3 10.4c6.2 6.2 16.5 5.7 22-1.2l13.6-17c4.7-5.9 12.9-7.7 19.6-4.3l15.2 7.6c3.4 1.7 7.2 2.6 11 2.6c6.5 0 12.8-2.6 17.4-7.2l3.9-3.9c2.9-2.9 7.3-3.6 11-1.8l29.2 14.6c7.8 3.9 12.6 11.8 12.6 20.5c0 10.5-7.1 19.6-17.3 22.2l-35.4 8.8c-7.4 1.8-15.1 1.5-22.4-.9l-32-10.7c-3.3-1.1-6.7-1.7-10.2-1.7c-7 0-13.8 2.3-19.4 6.5L176 212c-10.1 7.6-16 19.4-16 32l0 28c0 26.5 21.5 48 48 48l32 0c8.8 0 16 7.2 16 16l0 48c0 17.7 14.3 32 32 32c10.1 0 19.6-4.7 25.6-12.8l25.6-34.1c8.3-11.1 12.8-24.6 12.8-38.4l0-12.1c0-3.9 2.6-7.3 6.4-8.2l5.3-1.3c11.9-3 20.3-13.7 20.3-26c0-7.1-2.8-13.9-7.8-18.9l-33.5-33.5c-3.7-3.7-3.7-9.7 0-13.4c5.7-5.7 14.1-7.7 21.8-5.1l14.1 4.7c12.3 4.1 25.7-1.5 31.5-13c3.5-7 11.2-10.8 18.9-9.2l27.4 5.5C432 112.4 351.5 48 256 48c-27.7 0-54 5.4-78.2 15.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
        />
      ),
    },
    {
      id: 'destinations',
      label: 'Destinations',
      viewBox: '0 0 320 512',
      hasDropdown: true,
      icon: (
        <path
          fill="currentColor"
          d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480l0-162.9c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9L192 480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
        />
      ),
    },
    {
      id: 'preferences',
      label: 'Preferences',
      viewBox: '0 0 384 512',
      hasDropdown: true,
      icon: (
        <path
          fill="currentColor"
          d="M192 32c17.7 0 32 14.3 32 32l0 135.5 111.5-66.9c15.2-9.1 34.8-4.2 43.9 11s4.2 34.8-11 43.9L254.2 256l114.3 68.6c15.2 9.1 20.1 28.7 11 43.9s-28.7 20.1-43.9 11L224 312.5 224 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-135.5L48.5 379.4c-15.2 9.1-34.8 4.2-43.9-11s-4.2-34.8 11-43.9L129.8 256 15.5 187.4c-15.2-9.1-20.1-28.7-11-43.9s28.7-20.1 43.9-11L160 199.5 160 64c0-17.7 14.3-32 32-32z"
        />
      ),
    },
  ];

  const renderDropdownContent = (filterId: string) => {
    switch (filterId) {
      case 'price':
        return (
          <DropdownContent>
            <DropdownTitle>Price range per person</DropdownTitle>
            <SliderContainer>
              <SliderLabel>
                <SliderText>MAX</SliderText>
              </SliderLabel>
              <PriceInput
                type="number"
                value={priceRange.max}
                onChange={(e) => setPriceRange({...priceRange, max: parseInt(e.target.value)})}
                placeholder="$20,000"
              />
              <CurrencySelect
                value={priceRange.currency}
                onChange={(e) => setPriceRange({...priceRange, currency: e.target.value})}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </CurrencySelect>
            </SliderContainer>
          </DropdownContent>
        );

      case 'duration':
        return (
          <DropdownContent>
            <DropdownTitle>Trip duration</DropdownTitle>
            <SliderContainer>
              <SliderLabel>
                <SliderMaxText>MAX</SliderMaxText>
                <SliderText>{tripDuration.max} days</SliderText>
              </SliderLabel>
              <PriceInput
                type="range"
                min="1"
                max="30"
                value={tripDuration.max}
                onChange={(e) => setTripDuration({max: parseInt(e.target.value)})}
              />
            </SliderContainer>
          </DropdownContent>
        );

      case 'countries':
        return (
          <DropdownContent>
            <DropdownTitle>Countries</DropdownTitle>
            <DropdownSection>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={selectedCountries.includes('Kenya')}
                  onChange={() => handleCountryChange('Kenya')}
                />
                <CheckboxLabel>Kenya</CheckboxLabel>
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={selectedCountries.includes('Tanzania')}
                  onChange={() => handleCountryChange('Tanzania')}
                />
                <CheckboxLabel>Tanzania</CheckboxLabel>
              </CheckboxItem>
            </DropdownSection>
          </DropdownContent>
        );

      case 'destinations':
        return (
          <DropdownContent>
            <DropdownTitle>Destinations</DropdownTitle>
            <DropdownSection>
              <SectionTitle>Kenya</SectionTitle>
              {['Amboseli National Park', 'Lake Naivasha', 'Lake Nakuru National Park', 'Masai Mara National Reserve', 'Ol Pejeta Conservancy'].map(dest => (
                <CheckboxItem key={dest}>
                  <Checkbox
                    type="checkbox"
                    checked={selectedDestinations.includes(dest)}
                    onChange={() => handleDestinationChange(dest)}
                  />
                  <CheckboxLabel>{dest}</CheckboxLabel>
                </CheckboxItem>
              ))}
            </DropdownSection>
            <DropdownSection>
              <SectionTitle>Tanzania</SectionTitle>
              {['Mount Kilimanjaro', 'Ngorongoro Crater', 'Serengeti National Park', 'Tarangire National Park'].map(dest => (
                <CheckboxItem key={dest}>
                  <Checkbox
                    type="checkbox"
                    checked={selectedDestinations.includes(dest)}
                    onChange={() => handleDestinationChange(dest)}
                  />
                  <CheckboxLabel>{dest}</CheckboxLabel>
                </CheckboxItem>
              ))}
            </DropdownSection>
          </DropdownContent>
        );

      case 'preferences':
        return (
          <DropdownContent>
            <DropdownTitle>Preferences</DropdownTitle>
            <DropdownSection>
              {['Wildlife', 'Culture', 'Photography', 'Relaxation', 'Active', 'Mountain Climbing', 'Beach', 'Shared'].map(pref => (
                <CheckboxItem key={pref}>
                  <Checkbox
                    type="checkbox"
                    checked={selectedPreferences.includes(pref)}
                    onChange={() => handlePreferenceChange(pref)}
                  />
                  <CheckboxLabel>{pref}</CheckboxLabel>
                </CheckboxItem>
              ))}
            </DropdownSection>
          </DropdownContent>
        );

      default:
        return null;
    }
  };

  return (
    <FilterContainer>
      {filters.map((filter) => (
        <FilterItem 
          key={filter.id}
          ref={el => { dropdownRefs.current[filter.id] = el; }}
          isSelected={selectedFilters.includes(filter.id)}
          isOpen={openDropdown === filter.id}
          onClick={() => toggleFilter(filter.id)}
        >
          <CheckIcon show={selectedFilters.includes(filter.id)}>
            <CheckIconSvg
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </CheckIconSvg>
          </CheckIcon>
          
          <FilterContent>
            <FilterIcon
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox={filter.viewBox}
            >
              {filter.icon}
            </FilterIcon>
            
            <FilterText>{filter.label}</FilterText>
            
            {filter.hasDropdown && (
              <ChevronIcon
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                isOpen={openDropdown === filter.id}
              >
                <path
                  fill="currentColor"
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                />
              </ChevronIcon>
            )}
          </FilterContent>

          {filter.hasDropdown && (
            <DropdownContainer isOpen={openDropdown === filter.id}>
              {renderDropdownContent(filter.id)}
            </DropdownContainer>
          )}
        </FilterItem>
      ))}
    </FilterContainer>
  );
};

export default FilterBar;
