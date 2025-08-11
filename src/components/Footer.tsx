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
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>Pipitsafaris</span>
              </Logo>
              <LogoSubtext>Book your trip to East Africa today</LogoSubtext>
              
              <SocialIcons>
                <SocialIcon href="https://www.facebook.com/pipitsafaris/" target="_blank" aria-label="Facebook">
                  <svg viewBox="0 0 512 512" fill="currentColor">
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com/pipitsafaris/" target="_blank" aria-label="Instagram">
                  <svg viewBox="0 0 448 512" fill="currentColor">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://www.x.com/pipitsafaris_" target="_blank" aria-label="X">
                  <svg viewBox="0 0 512 512" fill="currentColor">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://www.tiktok.com/@pipitsafaris" target="_blank" aria-label="TikTok">
                  <svg viewBox="0 0 448 512" fill="currentColor">
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                  </svg>
                </SocialIcon>
              </SocialIcons>

              <TicoSection>
                <TicoText>
                  TIN: 137-282-046 | Tanzania Revenue Authority
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
                        width: '16px', 
                        height: '16px',
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
              </FooterColumn>

              <FooterColumn>
                <ColumnTitle>Support</ColumnTitle>
                <FooterLink as={Link} to="/terms">Terms of Service</FooterLink>
                <FooterLink as={Link} to="/privacy-policy">Privacy Policy</FooterLink>
              </FooterColumn>

              <FooterColumn>
                <ColumnTitle>Contact Us</ColumnTitle>
                <ContactLink href="tel:+255755188881">+255755188881</ContactLink>
                <ContactLink href="tel:+79166984469">+7 916 598-44-69</ContactLink>
                <ContactLink href="mailto:info@pipitsafaris.com?subject=Contact Us">info@pipitsafaris.com</ContactLink>
                <ContactLink href="mailto:Julia@pipitsafaris.com?subject=Contact Us">Julia@pipitsafaris.com</ContactLink>
                <Address>Address P.O. Box 10012 Arusha Tanzania</Address>
              </FooterColumn>
            </FooterColumns>
          </FooterTop>

          <FooterBottom>
            <p></p>
            <p>© 2025 Pipit Tours and Safaris Limited (Arusha, Tanzania) All rights reserved.</p>
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


