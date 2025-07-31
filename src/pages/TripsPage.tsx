import React from 'react';
import PageHeader from '../components/PageHeader';
import styled from 'styled-components';
import FilterBar from '../components/FilterBar';
import TripGrid from '../components/TripGrid';
import Footer from '../components/Footer';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #fafafa;
`;

const ContentContainer = styled.div`
//   max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;

`;

const FilterSection = styled.div`
  margin-bottom: 2rem;
`;

const FilterDivider = styled.div`
  height: 1px;
  background-color: #e5e7eb;
  margin: 1.5rem 0;
`;

const ResultsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`;

const ShowMapsButton = styled.button`
  background: white;
  color: #374151;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #f9fafb;
    border-color: #9ca3af;
  }
  
  @media (min-width: 768px) {
    padding: 0.5rem 0.75rem;
  }
`;










const ResultsInfo = styled.div`
  color: #6b7280;
  font-size: 0.875rem;
`;

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SortLabel = styled.span`
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
`;

const SortSelect = styled.select`
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  background: white;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

// Sample trip data
const sampleTrips = [
  {
    id: 't144',
    title: 'Tanzania Less Travelled: Foot-hills of Kilimanjaro, Mkomazi, & Lushoto (Standard)',
    duration: '6 days',
    location: 'Tanzania',
    description: "Discover Tanzania's hidden gems. This adventure offers a unique blend of wildlife and landscapes.",
    price: 2769,
    currency: 'USD',
    mapImageUrl: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    slug: 'tanzania-less-travelled-foot-hills-of-kilimanjaro-mkomazi-lushoto-standard'
  },
  {
    id: 't145',
    title: 'Kilimanjaro 5 Day Marangu Route',
    duration: '7 days',
    location: 'Tanzania',
    description: 'Join a 5-day guided trek on the Marangu Route to Mount Kilimanjaro, featuring stunning views and comfortable sleeping huts.',
    price: 1817,
    currency: 'USD',
    mapImageUrl: 'https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    slug: 'kilimanjaro-5-day-marangu-route'
  },
  {
    id: 't146',
    title: 'Kilimanjaro 6 Day Machame Route',
    duration: '8 days',
    location: 'Tanzania',
    description: 'Embark on an exhilarating 6-day journey, enjoying stunning landscapes and diverse ecosystems, culminating at Kilimanjaro\'s breathtaking summit.',
    price: 2100,
    currency: 'USD',
    mapImageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    slug: 'kilimanjaro-6-day-machame-route'
  },
  {
    id: 't147',
    title: 'Serengeti National Park Safari',
    duration: '5 days',
    location: 'Tanzania',
    description: 'Experience the wonder of the Serengeti with this incredible safari adventure featuring the Big Five and the Great Migration.',
    price: 3200,
    currency: 'USD',
    mapImageUrl: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    slug: 'serengeti-national-park-safari'
  },
  {
    id: 't148',
    title: 'Ngorongoro Crater Adventure',
    duration: '4 days',
    location: 'Tanzania',
    description: 'Explore the breathtaking Ngorongoro Crater, home to an incredible concentration of wildlife in this natural wonder.',
    price: 2450,
    currency: 'USD',
    mapImageUrl: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80',
    slug: 'ngorongoro-crater-adventure'
  },
  {
    id: 't149',
    title: 'Masai Mara Great Migration',
    duration: '6 days',
    location: 'Kenya',
    description: 'Witness the spectacular Great Migration in Masai Mara, one of nature\'s most incredible wildlife spectacles.',
    price: 2890,
    currency: 'USD',
    mapImageUrl: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    slug: 'masai-mara-great-migration'
  }
];

const TripsPage: React.FC = () => {
  return (
    <PageContainer>
      <PageHeader />
      
      <ContentContainer> 
        <FilterSection>
          <FilterBar />
          <FilterDivider />
        </FilterSection>
        
        <ResultsHeader>
          <LeftSection>
            <ResultsInfo>
              Showing {sampleTrips.length} safari packages
            </ResultsInfo>
            <ShowMapsButton>
              🗺️ Show maps
            </ShowMapsButton>
          </LeftSection>
          <SortContainer>
            <SortLabel>Sort by:</SortLabel>
            <SortSelect>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="duration">Duration</option>
              <option value="popularity">Most Popular</option>
              <option value="newest">Newest</option>
            </SortSelect>
          </SortContainer>
        </ResultsHeader>
        
        <TripGrid trips={sampleTrips} />
      </ContentContainer>

      {/* Footer */}
      <Footer />
    </PageContainer>
  );
};

export default TripsPage;
