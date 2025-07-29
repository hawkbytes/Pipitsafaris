import React from 'react';
import {
  ConsultationContainer,
  ConsultationWrapper,
  ConsultationCard,
  ConsultationContent,
  ProfileImagesContainer,
  ProfileImage,
  TextContent,
  ContentWrapper,
  Title,
  Description,
  BookButton
} from '../styles/ConsultationSectionStyles';

const ConsultationSection: React.FC = () => {
  return (
    <ConsultationContainer>
      <ConsultationWrapper>
        <ConsultationCard>
          <ConsultationContent>
            <ProfileImagesContainer>
              <ProfileImage 
                src="https://static.cloudsafaris.com/public/JD2-CWP-2557.jpg?action=get" 
                alt="Team member 1"
                position="left-0"
              />
              <ProfileImage 
                src="https://static.cloudsafaris.com/public/AW2-CWP-2335.jpg?action=get" 
                alt="Team member 2"
                position="left-12"
              />
              <ProfileImage 
                src="https://static.cloudsafaris.com/public/MH2-CWP-2471.jpg?action=get" 
                alt="Team member 3"
                position="left-24"
              />
            </ProfileImagesContainer>
            
            <TextContent>
              <ContentWrapper>
                <Title>Want to learn more about CloudSafaris?</Title>
                <Description>
                  One of our pros will work with you 1-on-1 to help you understand the platform.
                </Description>
              </ContentWrapper>
              
              <BookButton href="https://calendly.com/markus-cloudsafaris/30min">
                Book meeting
              </BookButton>
            </TextContent>
          </ConsultationContent>
        </ConsultationCard>
      </ConsultationWrapper>
    </ConsultationContainer>
  );
};

export default ConsultationSection;
