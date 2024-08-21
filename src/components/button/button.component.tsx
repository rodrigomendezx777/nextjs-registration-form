import React from 'react';
import { Button as StyledButton, ButtonWrapper } from './button.style';  // Certifique-se de que o caminho está correto

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, children }) => {
  return (
    <ButtonWrapper>
      <StyledButton onClick={onClick} disabled={disabled}>
        {children}
      </StyledButton>
    </ButtonWrapper>
  );
};

export default Button;
