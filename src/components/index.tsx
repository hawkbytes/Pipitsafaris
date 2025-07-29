// Example component using styled-components
// This demonstrates the structure for future components

import styled from 'styled-components';
import { useState } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  /* Size variants */
  ${props => {
    switch (props.size) {
      case 'small':
        return `
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        `;
      case 'large':
        return `
          padding: 1rem 2rem;
          font-size: 1.125rem;
        `;
      default:
        return `
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        `;
    }
  }}
  
  /* Color variants */
  ${props => {
    switch (props.variant) {
      case 'secondary':
        return `
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          
          &:hover:not(:disabled) {
            background: rgba(255, 255, 255, 0.2);
          }
        `;
      case 'danger':
        return `
          background: linear-gradient(45deg, #ef4444, #dc2626);
          color: white;
          
          &:hover:not(:disabled) {
            background: linear-gradient(45deg, #dc2626, #b91c1c);
          }
        `;
      default:
        return `
          background: linear-gradient(45deg, #4f46e5, #7c3aed);
          color: white;
          
          &:hover:not(:disabled) {
            background: linear-gradient(45deg, #4338ca, #6d28d9);
          }
        `;
    }
  }}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:active:not(:disabled) {
    transform: translateY(1px);
  }
`;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
};

// Example of a more complex component with state
const CardContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 1rem 0;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
`;

const CardContent = styled.div`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
`;

interface CardProps {
  title: string;
  children: React.ReactNode;
  expandable?: boolean;
}

export const Card: React.FC<CardProps> = ({ title, children, expandable = false }) => {
  const [expanded, setExpanded] = useState(!expandable);

  return (
    <CardContainer>
      <CardTitle>
        {title}
        {expandable && (
          <Button
            size="small"
            variant="secondary"
            onClick={() => setExpanded(!expanded)}
            style={{ marginLeft: '1rem', fontSize: '0.75rem' }}
          >
            {expanded ? 'Collapse' : 'Expand'}
          </Button>
        )}
      </CardTitle>
      {expanded && <CardContent>{children}</CardContent>}
    </CardContainer>
  );
};

export default { Button, Card };
