import styled from 'styled-components';

export const DayByDayContainer = styled.div`
  margin-bottom: 2rem;
`;

export const DayByDayTitle = styled.div`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
`;

export const DaySelectorContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DayButton = styled.button<{ isActive: boolean }>`
  border-radius: 9999px;
  white-space: nowrap;
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${({ isActive }) => isActive ? `
    background-color: #171717;
    color: white;
  ` : `
    background-color: white;
    color: #171717;
    border: 1px solid #171717;
    
    &:hover {
      background-color: #fafafa;
    }
  `}
  
  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`;

export const DayContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0.5rem;
`;

export const DayTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  padding-top: 0.5rem;
  margin: 0;
  color: #1a1a1a;
`;

export const DayDescription = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  color: #1a1a1a;
  line-height: 1.5;
`;

export const MapContainer = styled.div`
  min-height: 300px;
  margin-top: 2rem;
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 350px;
  max-height: 100%;
  border-radius: 0.375rem;
  position: relative;
  overflow: hidden;
`;

export const MapPlaceholder = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #e5e3df;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1rem;
`;
