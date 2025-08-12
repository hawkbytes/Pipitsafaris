import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding: 0.75rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  top: 0;
  position: absolute;
  box-shadow: none;
`;

const Container = styled.div`
  max-width: 80rem;
  container: layout;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
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
  color: white;
`;

const NavLink = styled.a`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  width: fit-content;
  display: inline-block;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
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
  color: white;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  @media (min-width: 1024px) {
    display: inline-block;
  }
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    color:'#fff';
  }
`;

const MobileMenuIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease;
  
  @media (min-width: 1024px) {
    display: none;
  }
  
  &:hover {
    color: white;
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

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(8px);
  padding: 1rem;
  gap: 0.5rem;
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <Container>
        <LogoSection>
          <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
            Pipitsafaris
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

      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileNavLink href="/trips">Packages</MobileNavLink>
        <MobileNavLink href="/hotels">Hotels & Lodges</MobileNavLink>
        <MobileNavLink href="/destinations">Destinations</MobileNavLink>
        <MobileNavLink href="/concierge">Find your trip</MobileNavLink>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
