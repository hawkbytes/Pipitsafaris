import styled from 'styled-components';

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  max-width: 90rem; /* ultra-wide */
//   padding: 0 1rem;
  gap: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  top: 0;
  overflow-x: scroll;
  
  @media (min-width: 1024px) {
    // padding: 0 4rem;
    gap: 1rem;
    overflow-x: visible;
  }
  
  @media (min-width: 768px) {
    overflow-x: visible;
  }
  
  /* Hide scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FilterItem = styled.div<{ isSelected?: boolean; isOpen?: boolean }>`
  border: 1px solid #f5f5f5; /* border-neutral-50 */
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 9999px;
  background-color: white;
  width: fit-content;
  cursor: pointer;
  transition: all 0.075s ease;
  
  &:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-lg */
    transition: all 0.075s ease;
  }
`;

export const CheckIcon = styled.div<{ show: boolean }>`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`;

export const CheckIconSvg = styled.svg`
  width: 0.625rem; /* w-2.5 */
  height: 0.625rem; /* h-2.5 */
  border-radius: 9999px;
  background-color: #171717; /* bg-neutral-900 */
  padding: 0.25rem; /* p-1 */
  color: white;
  border: 2px solid white;
`;

export const FilterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  border-radius: 9999px;
  padding: 0.375rem 1rem; /* py-1.5 px-4 */
  
  @media (min-width: 1024px) {
    padding: 0.5rem 1rem; /* lg:py-2 */
  }
`;

export const FilterIcon = styled.svg`
  display: none;
  width: 0.75rem; /* text-xs equivalent for svg */
  height: 0.75rem;
  color: #171717; /* text-neutral-900 */
  
  @media (min-width: 768px) {
    display: block; /* md:block */
  }
`;

export const FilterText = styled.div`
  font-size: 0.875rem; /* text-sm */
  color: #171717; /* text-neutral-900 */
  white-space: nowrap;
`;

export const ChevronIcon = styled.svg<{ isOpen?: boolean }>`
  display: none;
  width: 0.75rem; /* text-xs equivalent for svg */
  height: 0.75rem;
  color: #171717; /* text-neutral-900 */
  transition: transform 0.2s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  
  @media (min-width: 1024px) {
    display: block; /* lg:block */
  }
`;

export const DropdownContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 50;
  margin-top: 0.5rem;
  background: white;
  border: 1px solid #f5f5f5;
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.2s ease;
  min-width: 200px;
`;

export const DropdownContent = styled.div`
  padding: 1rem;
`;

export const DropdownTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #171717;
  margin-bottom: 0.75rem;
`;

export const DropdownSection = styled.div`
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: #171717;
  margin-bottom: 0.5rem;
`;

export const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0;
  cursor: pointer;
  
  &:hover {
    background-color: #fafafa;
    border-radius: 0.25rem;
  }
`;

export const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  accent-color: #171717;
`;

export const CheckboxLabel = styled.span`
  font-size: 0.875rem;
  color: #525252;
`;

export const SliderContainer = styled.div`
  margin: 1rem 0;
`;

export const SliderLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const SliderText = styled.span`
  font-size: 0.875rem;
  color: #171717;
`;

export const SliderMaxText = styled.span`
  font-size: 0.75rem;
  color: #ef4444;
  text-transform: uppercase;
`;

export const PriceInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: #171717;
  }
`;

export const CurrencySelect = styled.select`
  margin-left: 0.5rem;
  padding: 0.25rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  background: white;
`;
