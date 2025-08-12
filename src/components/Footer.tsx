import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FooterContainer,
  FooterContent,
  FooterTop,
  LogoSection,
  Logo,
  LogoSubtext,
  SocialIcons,
  SocialIcon,
  TicoSection,
  TicoLogo,
  TicoText,
  FooterColumns,
  FooterColumn,
  ColumnTitle,
  FooterLink,
  ContactLink,
  Address,
  CurrencySelector,
  CurrencyDropdown,
  CurrencyDropdownList,
  CurrencyOption,
  SelectedCurrency,
  FooterBottom,
  ChatButton
} from '../styles/FooterStyles';

const Footer: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const currencies = ['USD', 'CAD', 'TZS', 'KES', 'ZAR', 'GBP', 'EUR'];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectCurrency = (currency: string) => {
    setSelectedCurrency(currency);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <FooterContainer>
        <FooterContent>
          <FooterTop>
            <LogoSection>
              <Logo>
                <img src="Pipitsafaris" alt="Pipitsafaris logo" />
              </Logo>
              <LogoSubtext>Book your trip to East Africa today</LogoSubtext>
              
              <SocialIcons>
                <SocialIcon href="https://www.facebook.com/pipitsafaris/" target="_blank" aria-label="Facebook">
                  <svg viewBox="0 0 512 512" fill="currentColor">
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com/pipit_safari?igsh=MXZ2eDY5OHE4YzU0bQ%3D%3D&utm_source=qr " target="_blank" aria-label="Instagram">
                  <svg viewBox="0 0 448 512" fill="currentColor">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://x.com/africapipit?s=21" target="_blank" aria-label="X">
                  <svg viewBox="0 0 512 512" fill="currentColor">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://www.tiktok.com/@pipitsafaris" target="_blank" aria-label="TikTok">
                  <svg viewBox="0 0 448 512" fill="currentColor">
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                  </svg>
                </SocialIcon>
                <SocialIcon href="" target="_blank" aria-label="WhatsApp">
                  <svg viewBox="0 0 448 512" fill="currentColor">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56 81.2 56 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </SocialIcon>
              </SocialIcons>

              <TicoSection>
                <TicoLogo>
                  <img src="https://cloudsafaris.com/tico-coloured.png" alt="TICO Logo" />
                </TicoLogo>
                <TicoText href="https://www.tico.ca/">
                  TICO Registration #: 50027812 (Retail), 50027813 (Wholesale)
                </TicoText>
              </TicoSection>
            </LogoSection>

            <FooterColumns>
              <FooterColumn>
                <ColumnTitle>General</ColumnTitle>
                <FooterLink as={Link} to="/trips">Packages</FooterLink>
                <FooterLink href="/hotels">Hotels & Lodges</FooterLink>
                <FooterLink href="/destinations">Destinations</FooterLink>
                <FooterLink href="/concierge">Find your trip</FooterLink>
                <CurrencySelector>
                  <CurrencyDropdown onClick={toggleDropdown}>
                    Currency
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor" 
                      style={{
                        marginLeft: '8px', 
                        width: '18px', 
                        height: '18px',
                        transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
                    </svg>
                  </CurrencyDropdown>
                  <CurrencyDropdownList isOpen={isDropdownOpen}>
                    {currencies.map((currency) => (
                      <CurrencyOption
                        key={currency}
                        onClick={() => selectCurrency(currency)}
                      >
                        {currency}
                      </CurrencyOption>
                    ))}
                  </CurrencyDropdownList>
                  <SelectedCurrency>Selected Currency: {selectedCurrency}</SelectedCurrency>
                </CurrencySelector>
              </FooterColumn>

              <FooterColumn>
                <ColumnTitle>Company</ColumnTitle>
                <FooterLink href="/blog">Blog</FooterLink>
                <FooterLink as={Link} to="/about-us">About Us</FooterLink>
                <FooterLink as={Link} to="/for-advisors">Travel advisors</FooterLink>
                <FooterLink href="https://www.tripadvisor.ru/Attraction_Review-g297913-d15613609-Reviews-or10-Pipit_Safari-Arusha_Arusha_Region.html" target="_blank" rel="noopener noreferrer">TripAdvisor Reviews</FooterLink>
              </FooterColumn>

              <FooterColumn>
                <ColumnTitle>Support</ColumnTitle>
                <FooterLink as={Link} to="/terms">Terms of Service</FooterLink>
                <FooterLink as={Link} to="/privacy-policy">Privacy Policy</FooterLink>
              </FooterColumn>

              <FooterColumn>
                <ColumnTitle>Contact Us</ColumnTitle>
                <ContactLink href="tel:+18888590890">+255755188881 </ContactLink>
                <ContactLink>+7 916 598-44-69</ContactLink>
                <ContactLink href="mailto:hello@pipitsafaris.com?subject=Contact Us">info@pipitsafaris.com
                  Julia@pipitsafaris.com
                </ContactLink>
                <Address>Address 
P.O. Box 10012
Arusha 
Tanzania</Address>
              </FooterColumn>
            </FooterColumns>
          </FooterTop>

          <FooterBottom>
            <p></p>
            <p>© 2025 Pipitsafaris, Inc. (Hawkbytes) All rights reserved.</p>
          </FooterBottom>
        </FooterContent>
      </FooterContainer>

      {/* Chat Button */}
      <ChatButton aria-label="Open chat">
        💬
      </ChatButton>
    </>
  );
};export default Footer;


