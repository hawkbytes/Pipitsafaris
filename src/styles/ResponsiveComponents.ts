import styled from 'styled-components';

// Responsive containers and sections
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    max-width: 500px;
    gap: 16px;
    padding: 0 0.75rem;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    gap: 12px;
    padding: 0 0.5rem;
  }
`;

export const TravelersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    max-width: 450px;
    gap: 16px;
    padding: 0 0.75rem;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    gap: 12px;
    padding: 0 0.5rem;
  }
`;

export const RoomCard = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: 30px;
  width: 100%;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 24px;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const RoomTitle = styled.h3`
  color: white;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
    margin-bottom: 14px;
  }
`;

export const CounterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 14px;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
`;

export const CounterInfo = styled.div`
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const CounterLabel = styled.div`
  color: white;
  font-size: 16px;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const CounterSubtext = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const CounterControls = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  
  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
    gap: 10px;
  }
`;

export const CounterButton = styled.button`
  background: none;
  border: 2px solid white;
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
`;

export const CounterDisplay = styled.span`
  color: white;
  font-size: 18px;
  font-weight: bold;
  min-width: 30px;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 12px;
  border-radius: 4px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 6px 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
    padding: 5px 8px;
  }
`;

export const AddRoomButton = styled.button`
  background: none;
  border: 2px solid white;
  color: white;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 13px;
    width: 100%;
  }
`;

// Date picker components
export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    gap: 24px;
    padding: 0 0.75rem;
  }
  
  @media (max-width: 480px) {
    gap: 20px;
    padding: 0 0.5rem;
    max-width: 100%;
  }
`;

export const DateOptionsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 768px) {
    gap: 16px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const DateOptionButton = styled.button<{ isSelected?: boolean }>`
  background: ${props => props.isSelected ? 'rgba(255, 255, 255, 0.2)' : 'none'};
  border: 2px solid white;
  color: white;
  padding: 20px 30px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  min-width: 250px;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 16px 24px;
    font-size: 14px;
    min-width: 220px;
  }
  
  @media (max-width: 480px) {
    padding: 14px 20px;
    font-size: 13px;
    min-width: 100%;
    letter-spacing: 0.5px;
  }
`;

export const CalendarCard = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: 20px;
  backdrop-filter: blur(10px);
  min-width: 300px;
  
  @media (max-width: 768px) {
    padding: 16px;
    min-width: 280px;
  }
  
  @media (max-width: 480px) {
    padding: 14px;
    min-width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

// Trip type components
export const TripTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    gap: 24px;
    padding: 0 0.75rem;
  }
  
  @media (max-width: 480px) {
    gap: 20px;
    padding: 0 0.5rem;
    max-width: 100%;
  }
`;

export const TripTypeSubtitle = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 14px;
    line-height: 1.3;
  }
`;

export const TripTypeButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 768px) {
    gap: 16px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }
`;

export const TripTypeButton = styled.button<{ isSelected?: boolean }>`
  background: ${props => props.isSelected ? 'rgba(255, 255, 255, 0.2)' : 'none'};
  border: 2px solid white;
  color: white;
  padding: 20px 40px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  min-width: 200px;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 16px 32px;
    font-size: 16px;
    min-width: 180px;
  }
  
  @media (max-width: 480px) {
    padding: 14px 24px;
    font-size: 15px;
    min-width: 100%;
    letter-spacing: 0.5px;
  }
`;

// Contact form components
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    max-width: 500px;
    padding: 0 0.75rem;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    padding: 0 0.5rem;
  }
`;

export const ContactFormCard = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: 40px;
  width: 100%;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 32px;
  }
  
  @media (max-width: 480px) {
    padding: 24px;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    gap: 16px;
    margin-bottom: 16px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 14px;
    margin-bottom: 14px;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  color: white;
  font-size: 14px;
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
    letter-spacing: 0.5px;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  color: white;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.15);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 9px;
    font-size: 14px;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  color: white;
  font-size: 16px;
  outline: none;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.15);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 15px;
    min-height: 80px;
  }
  
  @media (max-width: 480px) {
    padding: 9px;
    font-size: 14px;
    min-height: 70px;
  }
`;

// Helper text components
export const HelperText = styled.div`
  text-align: center;
  margin-bottom: 20px;
  color: white;
  opacity: 0.8;
  font-size: 16px;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 14px;
    line-height: 1.3;
  }
`;

export const HelperButton = styled.button`
  background: none;
  border: 2px solid white;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    padding: 9px 18px;
    font-size: 12px;
    width: 100%;
  }
`;
