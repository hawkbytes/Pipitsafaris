import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  background: url('https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80') center/cover;
  font-family: 'Arial', sans-serif;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`;

export const TopBanner = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 12px 20px;
  text-align: center;
  position: relative;
  z-index: 10;
  font-size: 14px;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const BannerText = styled.span`
  font-weight: 500;
`;

export const BannerArrow = styled.span`
  color: #8B4513;
  font-weight: bold;
`;

export const HeroSection = styled.section`
  position: relative;
  z-index: 2;
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  color: white;
`;

export const Logo = styled.div`
  font-size: 32px;
  font-weight: 300;
  letter-spacing: 4px;
  margin-bottom: 10px;
  text-transform: uppercase;
  
  .script {
    font-family: 'Dancing Script', cursive;
    font-size: 24px;
    font-weight: 400;
    text-transform: none;
    letter-spacing: 1px;
    margin-left: 10px;
    color: #FFD700;
  }
`;

export const Tagline = styled.div`
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 60px;
  opacity: 0.9;
  font-weight: 300;
`;

export const MainQuestion = styled.h1`
  font-size: 28px;
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 40px;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CountriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1000px;
  width: 100%;
  margin-bottom: 40px;
`;

export const CountryCard = styled.div`
  position: relative;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  }
`;

export const CardBackground = styled.div<{ bgImage: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(${props => props.bgImage}) center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;

export const CountryName = styled.h3`
  position: relative;
  z-index: 2;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0 0 8px 0;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

export const CountryDescription = styled.p`
  position: relative;
  z-index: 2;
  font-size: 14px;
  font-weight: 300;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  padding: 0 20px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

export const NavigationArrows = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const ArrowButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`;
