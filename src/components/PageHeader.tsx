import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  position: static;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const HeaderContainer = styled.div`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 0.75rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  top: 0;
  border-bottom: 1px solid #fafafa;
  position: relative;
`;

const Container = styled.div`
  // max-width: 90rem;
  container: layout;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  
  @media (min-width: 1024px) {
    padding: 0 4rem;
  }
`;

const LogoSection = styled.div`
  width: fit-content;
  
  @media (min-width: 1024px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  height: 1.5rem;
  
  @media (min-width: 640px) {
    height: 1.5rem;
  }
`;

const NavigationSection = styled.div`
  display: none;
  
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    width: 100%;
    justify-content: center;
    font-size: 0.875rem;
  }
`;

const NavigationContainer = styled.div`
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
  color: #171717;
`;

const NavLink = styled.a`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  width: fit-content;
  display: inline-block;
  color: #171717;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #fafafa;
  }
`;

const ActionsSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: flex-end;
  font-size: 0.875rem;
  
  @media (min-width: 1024px) {
    width: 100%;
  }
`;

const FindTripButton = styled.a`
  display: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  width: fit-content;
  font-weight: 500;
  color: #171717;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
  
  @media (min-width: 1024px) {
    display: inline-block;
  }
  
  &:hover {
    background-color: #fafafa;
  }
`;

const MobileMenuIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  color: #171717;
  transition: color 0.3s ease;
  
  @media (min-width: 1024px) {
    display: none;
  }
  
  &:hover {
    color: #404040;
  }
`;

const SignInButton = styled.button`
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  white-space: nowrap;
  background-color: #374151;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (min-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
  
  &:hover {
    background-color: #1f2937;
  }
`;

const MobileMenuOverlay = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  z-index: 50;
  max-width: 28rem;
  width: 100%;
  padding: 0.5rem;
  margin: 1rem;
  transition: all 0.5s ease;
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileMenuContent = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  padding: 1.5rem 0;
`;

const MobileHeader = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: row;
  padding-bottom: 0.75rem;
  justify-content: space-between;
  align-items: center;
`;

const MobileLogoWhite = styled.img`
  height: 1.5rem;
  
  @media (min-width: 640px) {
    height: 1.5rem;
  }
`;

const CloseIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

const MobileNavSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  padding-top: 0.75rem;
`;

const MobileNavLink = styled.a`
  padding: 0.75rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

const MobileNavText = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
`;

const ChevronIcon = styled.svg`
  display: none;
  font-size: 1rem;
  
  .group:hover & {
    display: block;
  }
`;

const ContactButton = styled.a`
  border-radius: 0.375rem;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.9);
  color: #171717;
  text-decoration: none;
  margin-top: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: white;
  }
`;

const PageHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <Container>
            <LogoSection>
              <a href="/">
                <Logo src="https://pipitsafaris.com/combo-logo-neutral-900.png" alt="Pipitsafaris" />
              </a>
            </LogoSection>

            <NavigationSection>
              <NavigationContainer>
                <NavLink href="/trips">Packages</NavLink>
                <NavLink href="/hotels">Hotels & Lodges</NavLink>
                <NavLink href="/destinations">Destinations</NavLink>
              </NavigationContainer>
            </NavigationSection>

            <ActionsSection>
              <FindTripButton href="/concierge">Find your trip</FindTripButton>
              
              <MobileMenuIcon
                onClick={toggleMobileMenu}
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
                />
              </MobileMenuIcon>
              
              <SignInButton>Sign in</SignInButton>
            </ActionsSection>
          </Container>
        </HeaderContainer>
        
        {/* Mobile Menu Overlay */}
        <MobileMenuOverlay isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />
        
        {/* Mobile Menu */}
        <MobileMenu isOpen={isMobileMenuOpen}>
          <MobileMenuContent>
            <MobileHeader>
              <MobileLogoWhite src="/combo-logo-white.png" alt="Pipitsafaris" />
              <CloseIcon
                onClick={closeMobileMenu}
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                />
              </CloseIcon>
            </MobileHeader>
            
            <MobileNavSection>
              <MobileNavLink href="/trips" className="group">
                <MobileNavText>Packages</MobileNavText>
                <ChevronIcon
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  />
                </ChevronIcon>
              </MobileNavLink>
              
              <MobileNavLink href="/hotels" className="group">
                <MobileNavText>Hotels & Lodges</MobileNavText>
                <ChevronIcon
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  />
                </ChevronIcon>
              </MobileNavLink>
              
              <MobileNavLink href="/destinations" className="group">
                <MobileNavText>Destinations</MobileNavText>
                <ChevronIcon
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  />
                </ChevronIcon>
              </MobileNavLink>
              
              <MobileNavLink href="#" className="group">
                <MobileNavText>Transportation</MobileNavText>
              </MobileNavLink>
              
              <MobileNavLink href="#" className="group">
                <MobileNavText>Ask Zapata</MobileNavText>
              </MobileNavLink>
              
              <ContactButton href="/concierge?ref=NAVBAR">
                Contact Us
              </ContactButton>
            </MobileNavSection>
          </MobileMenuContent>
        </MobileMenu>
      </HeaderWrapper>
    </>
  );
};

export default PageHeader;
