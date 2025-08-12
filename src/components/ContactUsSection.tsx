import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  color: white;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ContactLabel = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

const ContactValue = styled.div`
  opacity: 0.9;
  font-size: 0.95rem;
`;

const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const FormSubtitle = styled.p`
  opacity: 0.9;
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-weight: 500;
  font-size: 0.9rem;
`;

const FormInput = styled.input`
  padding: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.6);
  }
`;

const FormTextarea = styled.textarea`
  padding: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.6);
  }
`;

const SubmitButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const BusinessHours = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;
`;

const HoursTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const HoursItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const ContactUsSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  };

  return (
    <ContactContainer>
      <ContentWrapper>
        <ContactInfo>
          <div>
            <Title>Get in Touch</Title>
            <Subtitle>
              Ready to plan your African adventure? Contact our safari specialists 
              for personalized recommendations and expert guidance.
            </Subtitle>
          </div>

          <ContactDetails>
            <ContactItem>
              <ContactIcon>📍</ContactIcon>
              <ContactText>
                <ContactLabel>Location</ContactLabel>
                <ContactValue>Nairobi, Kenya & Arusha, Tanzania</ContactValue>
              </ContactText>
            </ContactItem>

            <ContactItem>
              <ContactIcon>📞</ContactIcon>
              <ContactText>
                <ContactLabel>Phone</ContactLabel>
                <ContactValue>+254 700 123 456 (Kenya)</ContactValue>
                <ContactValue>+255 754 123 456 (Tanzania)</ContactValue>
              </ContactText>
            </ContactItem>

            <ContactItem>
              <ContactIcon>📧</ContactIcon>
              <ContactText>
                <ContactLabel>Email</ContactLabel>
                <ContactValue>info@pipitsafari.com</ContactValue>
                <ContactValue>safaris@pipitsafari.com</ContactValue>
              </ContactText>
            </ContactItem>

            <ContactItem>
              <ContactIcon>🌐</ContactIcon>
              <ContactText>
                <ContactLabel>Website</ContactLabel>
                <ContactValue>www.pipitsafaris.com</ContactValue>
              </ContactText>
            </ContactItem>
          </ContactDetails>

          <BusinessHours>
            <HoursTitle>Business Hours (EAT)</HoursTitle>
            <HoursItem>
              <span>Monday - Friday</span>
              <span>8:00 AM - 6:00 PM</span>
            </HoursItem>
            <HoursItem>
              <span>Saturday</span>
              <span>9:00 AM - 4:00 PM</span>
            </HoursItem>
            <HoursItem>
              <span>Sunday</span>
              <span>Emergency Only</span>
            </HoursItem>
          </BusinessHours>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <FormTitle>Send us a Message</FormTitle>
          <FormSubtitle>
            Tell us about your dream safari and we'll create a custom itinerary for you.
          </FormSubtitle>

          <FormGroup>
            <FormLabel>Full Name</FormLabel>
            <FormInput type="text" placeholder="Your full name" required />
          </FormGroup>

          <FormGroup>
            <FormLabel>Email Address</FormLabel>
            <FormInput type="email" placeholder="your.email@example.com" required />
          </FormGroup>

          <FormGroup>
            <FormLabel>Phone Number</FormLabel>
            <FormInput type="tel" placeholder="+1 (555) 123-4567" />
          </FormGroup>

          <FormGroup>
            <FormLabel>Preferred Destination</FormLabel>
            <FormInput type="text" placeholder="Kenya, Tanzania, Uganda, Rwanda" />
          </FormGroup>

          <FormGroup>
            <FormLabel>Travel Dates</FormLabel>
            <FormInput type="text" placeholder="Preferred month/season" />
          </FormGroup>

          <FormGroup>
            <FormLabel>Message</FormLabel>
            <FormTextarea 
              placeholder="Tell us about your safari interests, group size, budget, and any special requirements..."
              required 
            />
          </FormGroup>

          <SubmitButton type="submit">
            Send Message
          </SubmitButton>
        </ContactForm>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default ContactUsSection;
