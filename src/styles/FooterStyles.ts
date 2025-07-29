import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #f8f8f8;
  padding: 50px 40px 30px;
  color: #666;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const LogoSection = styled.div`
  space-y: 32px;
`;

export const Logo = styled.div`
  margin-bottom: 16px;
  
  img {
    height: 28px;
    width: auto;
    
    @media (min-width: 1024px) {
      height: 32px;
    }
  }
`;

export const LogoSubtext = styled.p`
  text-align: left;
  font-size: 14px;
  line-height: 1.5;
  color: #525252;
  margin: 0 0 24px 0;
  font-weight: 400;
`;

export const FooterColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const ColumnGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const FooterColumn = styled.div`
  /* Remove margin-top for all columns since they're now in a single row */
`;

export const ColumnTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: #000;
  margin-bottom: 24px;
  margin-top: 0;
`;

export const FooterLink = styled.a`
  display: block;
  color: #525252;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;
  transition: all 0.3s ease;
  transform: translateX(0);
  
  &:hover {
    color: #171717;
    transform: translateX(4px);
  }
`;

export const ContactInfo = styled.div`
  min-width: 220px;
`;

export const ContactLink = styled.a`
  display: block;
  color: #525252;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;
  transition: all 0.3s ease;
  transform: translateX(0);
  
  &:hover {
    color: #171717;
    transform: translateX(4px);
  }
`;

export const Address = styled.div`
  color: #525252;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #171717;
    transform: translateX(2px);
  }
`;

export const FooterMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
`;

export const SocialIcon = styled.a`
  color: #a3a3a3;
  transition: all 0.3s ease;
  transform: translateY(0) scale(1);
  
  svg {
    width: 20px;
    height: 20px;
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: #737373;
    transform: translateY(-2px) scale(1.1);
    
    svg {
      filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
    }
  }
`;

export const TicoSection = styled.div`
  margin-bottom: 32px;
`;

export const TicoLogo = styled.div`
  margin-bottom: 8px;
  
  img {
    height: 80px;
    width: auto;
  }
`;

export const TicoText = styled.a`
  font-size: 12px;
  color: #525252;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: #171717;
    text-decoration: underline;
  }
`;

export const CurrencySelector = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

export const CurrencyDropdown = styled.button`
  display: inline-flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  background: white;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
  color: #374151;
  transform: translateY(0);
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: #f9fafb;
    border-color: #9ca3af;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
  
  &:focus {
    outline: none;
    ring: 2px;
    ring-color: #6366f1;
    border-color: #6366f1;
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const CurrencyDropdownList = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  margin-top: 4px;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-height: 200px;
  overflow-y: auto;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)'};
  transition: all 0.2s ease-in-out;
  transform-origin: top;
`;

export const CurrencyOption = styled.button`
  width: 100%;
  padding: 8px 12px;
  text-align: left;
  font-size: 14px;
  color: #374151;
  background: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  transform: translateX(0);
  
  &:hover {
    background: linear-gradient(90deg, #f3f4f6 0%, #e5e7eb 100%);
    color: #111827;
    transform: translateX(4px);
    padding-left: 16px;
  }
  
  &:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  
  &:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  
  &:active {
    background: #e5e7eb;
    transform: scale(0.98);
  }
`;

export const SelectedCurrency = styled.div`
  margin-top: 4px;
  font-size: 14px;
  line-height: 1.5;
  color: #525252;
  transition: all 0.3s ease;
  
  &:hover {
    color: #171717;
  }
`;

export const FooterBottom = styled.div`
  margin-top: 64px;
  border-top: 1px solid rgba(23, 23, 23, 0.1);
  padding-top: 32px;
  
  p {
    font-size: 12px;
    line-height: 1.25;
    color: #737373;
    margin: 16px 0;
    white-space: pre-wrap;
  }
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ChatButton = styled.button`
  position: fixed;
  bottom: 30px;
  left: 30px;
  width: 50px;
  height: 50px;
  background: #333;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 1000;
  
  &:hover {
    background: #555;
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;
