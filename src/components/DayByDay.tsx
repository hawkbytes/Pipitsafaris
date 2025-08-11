import React, { useState } from 'react';
import {
  DayByDayContainer,
  DayByDayTitle,
  DaySelectorContainer,
  DayButton,
  DayContentContainer,
  DayTitle,
  DayDescription,
  MapContainer,
  MapWrapper,
  MapPlaceholder
} from './DayByDayStyles';

interface DayData {
  day: number;
  date: string;
  title: string;
  description: string;
  hotel?: {
    name: string;
    type: string;
    category: string;
    image: string;
    meals?: string;
  };
  note?: string;
}

interface DayByDayProps {
  itineraryDays: DayData[];
}

const DayByDay: React.FC<DayByDayProps> = ({ itineraryDays }) => {
  const [selectedDay, setSelectedDay] = useState(1);

  // Safety check for undefined or empty itineraryDays
  if (!itineraryDays || itineraryDays.length === 0) {
    return null;
  }

  const selectedDayData = itineraryDays.find(day => day.day === selectedDay);

  return (
    <DayByDayContainer>
      <DayByDayTitle>Day by day</DayByDayTitle>
      
      {/* Day Selector */}
      <DaySelectorContainer>
        {itineraryDays.map(day => (
          <DayButton
            key={day.day}
            isActive={selectedDay === day.day}
            onClick={() => setSelectedDay(day.day)}
          >
            Day {day.day}
          </DayButton>
        ))}
      </DaySelectorContainer>

      {/* Selected Day Content */}
      {selectedDayData && (
        <>
          <DayContentContainer>
            <DayTitle>{selectedDayData.title}</DayTitle>
            <DayDescription>{selectedDayData.description}</DayDescription>
          </DayContentContainer>

          {/* Map Container */}
          <MapContainer>
            <MapWrapper>
              <MapPlaceholder>
                {/* This would be replaced with actual Google Maps integration */}
                <div style={{ textAlign: 'center' }}>
                  <div>Interactive Map</div>
                  <div style={{ fontSize: '0.875rem', marginTop: '0.5rem', opacity: 0.7 }}>
                    Map will be integrated here
                  </div>
                </div>
              </MapPlaceholder>
            </MapWrapper>
          </MapContainer>
        </>
      )}
    </DayByDayContainer>
  );
};

export default DayByDay;