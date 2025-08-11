import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import OverviewTab from './tabs/OverviewTab.tsx';
import HotelTab from './tabs/HotelTab.tsx';
import DestinationsTab from './tabs/DestinationsTab.tsx';
import ExtrasTab from './tabs/ExtrasTab.tsx';

interface Hotel {
  name: string;
  type: string;
  category: string;
  image: string;
  meals?: string;
}

interface ItineraryDay {
  day: number;
  date: string;
  title: string;
  description: string;
  hotel?: Hotel;
  note?: string;
  tabs: string[];
  isExpanded?: boolean;
}

interface ItinerarySectionProps {
  travellers: number;
  startDate: string;
  endDate: string;
  days: ItineraryDay[];
}

// Styled Components
const ItinerarySectionWrapper = styled.div`
  padding: 2rem 0;

  @media (max-width: 767px) {
    padding: 1rem 0;
  }
`;

const ItineraryHeader = styled.div`
  margin-bottom: 2rem;
`;

const ItineraryTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
`;

const ItineraryMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #1a1a1a;
`;

const TravellersCount = styled.span`
  font-weight: 500;
`;

const MetaDot = styled.div`
  width: 3px;
  height: 3px;
  background-color: #1a1a1a;
  border-radius: 50%;
`;

const DateRange = styled.span`
  color: #1a1a1a;
`;

const ItineraryDays = styled.div`
  /* Styles for itinerary days container */
`;

const ItineraryDayCard = styled(Card)`
  border: 1px solid #f5f5f5;
  border-radius: 1rem;
  overflow: visible;
  margin-bottom: 1.5rem;
  box-shadow: none;
`;

const DayHeader = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-bottom: none;

  @media (max-width: 767px) {
    padding: 1rem;
  }
`;

const DayInfo = styled.div`
  display: flex;
  align-items: end;
  flex: 1;
`;

const DayDateSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-right: 2rem;
  min-width: 80px;

  @media (max-width: 576px) {
    margin-right: 1rem;
  }
`;

const DayDate = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 400;
`;

const DayNumber = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
  white-space: nowrap;

  @media (min-width: 992px) {
    font-size: 1.25rem;
  }
`;

const DayTitleSection = styled.div`
  flex: 1;
  padding-left: 2rem;
  border-left: 2px solid #f5f5f5;

  @media (max-width: 576px) {
    padding-left: 1rem;
  }
`;

const DayTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  color: #1a1a1a;
  line-height: 1.4;

  @media (min-width: 992px) {
    font-size: 1.25rem;
  }
`;

const ExpandButton = styled(Button)`
  width: 2rem;
  height: 2rem;
  border: 1px solid #f5f5f5;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: all 0.2s ease;
  color: #1a1a1a;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    color: #1a1a1a;
    text-decoration: none;
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
    transition: transform 0.2s ease;
    color: #1a1a1a;

    &.expanded {
      transform: rotate(180deg);
    }
  }
`;

const DayTabs = styled.div`
  padding: 0 1.5rem;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 767px) {
    padding: 0 1rem;
  }
`;

const TabButton = styled(Button)`
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;
  margin-right: 0;
  border: none;
  background: none;
  color: #6b7280;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    color: #1a1a1a;
    text-decoration: none;
  }

  &.active {
    color: #1a1a1a;
    font-weight: 500;
    border-bottom-color: #1a1a1a;
  }
`;

const DayContent = styled(Card.Body)`
  padding: 1.5rem;

  @media (max-width: 767px) {
    padding: 1rem;
  }
`;

const InclusionsSection = styled(Row)`
  margin-top: 3rem;
  padding-top: 2.5rem;
  border-top: 1px solid #f5f5f5;
  gap: 2rem;

  @media (max-width: 767px) {
    gap: 1rem;
  }
`;

const InclusionBlock = styled.div`
  margin-bottom: 2rem;
`;

const InclusionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;

  h4 {
    font-size: 1.125rem;
    font-weight: 500;
    margin: 0;
    color: #1a1a1a;
  }

  i {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.875rem;
    color: #6b7280;
  }
`;

const InclusionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InclusionItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  svg {
    font-size: 0.875rem;
    margin-top: 0.125rem;
    flex-shrink: 0;
    width:'12px';
    height: '13px';
    }

  span {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    color: #1a1a1a;
  }
`;

const TripExtrasSection = styled.div`
  margin-top: 2rem;
`;

const ExtrasTitle = styled.h4`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const ExtraItem = styled(Card)`
  border: 1px solid #f5f5f5;
  border-radius: 0.75rem;
  box-shadow: none;

  .card-body {
    padding: 1rem;
  }
`;

const ExtraInfo = styled.div`
  flex-grow: 1;
`;

const ExtraLabel = styled.div`
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #6b7280;
  margin-bottom: 0.25rem;
`;

const ExtraName = styled.h5`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: #1a1a1a;

  @media (min-width: 576px) {
    font-size: 1rem;
  }
`;

const ViewDetailsLink = styled(Button)`
  font-size: 0.875rem;
  text-decoration: underline;
  padding: 0;
  color: #1a1a1a;
  margin-top: 0.375rem;

  &:hover {
    color: #374151;
    text-decoration: underline;
  }
`;

const AddExtraBtn = styled(Button)`
  border-radius: 1.5rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  width: max-content;
  border-color: #1a1a1a;
  color: #1a1a1a;
  background: white;
  transition: all 0.2s ease;
  flex-shrink: 0;
  margin-top: 0.25rem;

  &:hover {
    background-color: rgba(243, 244, 246, 0.5);
    border-color: #1a1a1a;
    color: #1a1a1a;
  }

  i {
    font-size: 0.75rem;
  }
`;

const ContentTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
`;

const ContentDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
`;

const ItinerarySection: React.FC<ItinerarySectionProps> = ({
  travellers,
  startDate,
  endDate,
  days
}) => {
  const [expandedDays, setExpandedDays] = useState<Set<number>>(new Set([1]));
  const [activeTabs, setActiveTabs] = useState<{[key: number]: string}>({});

  const toggleDay = (dayNumber: number) => {
    const newExpanded = new Set(expandedDays);
    if (newExpanded.has(dayNumber)) {
      newExpanded.delete(dayNumber);
    } else {
      newExpanded.add(dayNumber);
    }
    setExpandedDays(newExpanded);
  };

  const setActiveTab = (dayNumber: number, tab: string) => {
    setActiveTabs(prev => ({ ...prev, [dayNumber]: tab }));
  };

  const getActiveTab = (dayNumber: number, defaultTab: string) => {
    return activeTabs[dayNumber] || defaultTab;
  };

  const formatDate = (dateStr: string, short: boolean = false) => {
    const date = new Date(dateStr);
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const day = date.getDate();
    if (short) {
      return `${month} ${day}`;
    }
    return `${month} ${day}, ${date.getFullYear()}`;
  };

  const renderTabContent = (dayData: ItineraryDay) => {
    const activeTab = getActiveTab(dayData.day, dayData.tabs[0]);

    switch (activeTab) {
      case 'Overview':
        return (
          <OverviewTab
            title={dayData.title}
            description={dayData.description}
            hotel={dayData.hotel}
            note={dayData.note}
          />
        );
      case 'Hotel':
        return dayData.hotel ? <HotelTab hotel={dayData.hotel} /> : null;
      case 'Destinations':
        return (
          <DestinationsTab
            title={dayData.title}
            hotel={dayData.hotel}
          />
        );
      case 'Extras':
        return <ExtrasTab />;
      default:
        return (
          <>
            <ContentTitle>{dayData.title}</ContentTitle>
            <ContentDescription>{dayData.description}</ContentDescription>
            <p className="text-muted">Content for {activeTab} tab will be displayed here.</p>
          </>
        );
    }
  };

  return (
    <ItinerarySectionWrapper>
      <Container>
        {/* Header */}
        <ItineraryHeader className="mb-5">
          <ItineraryTitle className="mb-2">Itinerary</ItineraryTitle>
          <ItineraryMeta>
            <TravellersCount>{travellers} Travellers</TravellersCount>
            <MetaDot />
            <DateRange className="d-none d-sm-inline">
              {formatDate(startDate)} - {formatDate(endDate)}
            </DateRange>
            <DateRange className="d-sm-none">
              {formatDate(startDate, true)} - {formatDate(endDate, true)}
            </DateRange>
          </ItineraryMeta>
        </ItineraryHeader>

        {/* Itinerary Days */}
        <ItineraryDays>
          {days.map((dayData) => (
            <ItineraryDayCard key={dayData.day} className="mb-4">
              {/* Day Header */}
              <DayHeader onClick={() => toggleDay(dayData.day)}>
                <DayInfo>
                  <DayDateSection>
                    <DayDate>{formatDate(dayData.date, true)}</DayDate>
                    <DayNumber>Day {dayData.day}</DayNumber>
                  </DayDateSection>
                  <DayTitleSection>
                    <DayTitle>{dayData.title}</DayTitle>
                  </DayTitleSection>
                </DayInfo>
                <ExpandButton 
                  variant="link" 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDay(dayData.day);
                  }}
                >
                  <svg 
                    aria-hidden="true" 
                    focusable="false" 
                    className={expandedDays.has(dayData.day) ? 'expanded' : ''} 
                    role="img" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 512 512"
                  >
                    <path 
                      fill="currentColor" 
                      d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                    />
                  </svg>
                </ExpandButton>
              </DayHeader>

              {/* Day Content */}
              {expandedDays.has(dayData.day) && (
                <>
                  {/* Tabs */}
                  <DayTabs>
                    {dayData.tabs.map((tab) => (
                      <TabButton
                        key={tab}
                        variant="link"
                        className={getActiveTab(dayData.day, dayData.tabs[0]) === tab ? 'active' : ''}
                        onClick={() => setActiveTab(dayData.day, tab)}
                      >
                        {tab}
                      </TabButton>
                    ))}
                  </DayTabs>

                  {/* Content */}
                  <DayContent>
                    {renderTabContent(dayData)}
                  </DayContent>
                </>
              )}
            </ItineraryDayCard>
          ))}
        </ItineraryDays>

        {/* What's Included / Excluded */}
        <InclusionsSection>
          <Col md={6}>
            <InclusionBlock>
              <InclusionHeader>
                <h4>What's included</h4>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg>
              </InclusionHeader>
              <InclusionList>
                <InclusionItem>
                 <svg style={{width:'12px', height:'13px'}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check text-safari-green text-sm " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                  <span> Transportation from Moshi to the starting point on the mountain and return to Moshi.</span>
                </InclusionItem>
                <InclusionItem>
                 <svg style={{ width: '12px', height: '13px' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check text-safari-green text-sm " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                  <span>National park gate fees, hut/camping fees.</span>
                </InclusionItem>
                <InclusionItem>
                 <svg style={{ width: '12px', height: '13px' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check text-safari-green text-sm " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                  <span>Rescue fees, tents and sleeping mattress.</span>
                </InclusionItem>
                <InclusionItem>
                  <svg style={{ width: '12px', height: '13px' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check text-safari-green text-sm " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                  <span>Guides salaries, porters salaries & all meals on the mountain.</span>
                </InclusionItem>
                <InclusionItem>
                 <svg style={{ width: '12px', height: '13px' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check text-safari-green text-sm " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                  <span>Guides, porters, cook accommodation and entry fees on the mountain.</span>
                </InclusionItem>
                <InclusionItem>
                 <svg style={{ width: '12px', height: '13px' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check text-safari-green text-sm " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                  <span>Qualified guides for all the routes.</span>
                </InclusionItem>
              </InclusionList>
            </InclusionBlock>
          </Col>
          <Col md={6}>
            <InclusionBlock>
              <InclusionHeader>
                <h4>What's excluded</h4>
               <svg style={{ width: '12px', height: '13px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"></path></svg>
              </InclusionHeader>
              <InclusionList>
                <InclusionItem>
                <svg style={{ width: '12px', height: '13px' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="x" className="svg-inline--fa fa-x text-red-600 text-sm " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"></path></svg>
                  <span>Guides, Porters, Cook Tips, Gears eg. Sleeping Bags, Clothes and Shoes.</span>
                </InclusionItem>
              </InclusionList>
            </InclusionBlock>
          </Col>
        </InclusionsSection>

        {/* Trip Extras */}
        <TripExtrasSection>
          <ExtrasTitle>Trip extras</ExtrasTitle>
          <ExtraItem>
            <Card.Body className="d-flex justify-content-between align-items-start">
              <ExtraInfo>
                <ExtraLabel>OPTIONAL</ExtraLabel>
                <ExtraName>Private Toilet</ExtraName>
                <ViewDetailsLink variant="link">
                  View Details
                </ViewDetailsLink>
              </ExtraInfo>
              <AddExtraBtn variant="outline-dark" size="sm">
                <i className="fas fa-plus me-2"></i>
                Add
              </AddExtraBtn>
            </Card.Body>
          </ExtraItem>
        </TripExtrasSection>
      </Container>
    </ItinerarySectionWrapper>
  );
};

export default ItinerarySection;