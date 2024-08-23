import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background-color: #0077b6;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

export const FormContainer = styled.div`
  flex: 1;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 0 0 10px 0;
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  margin: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input<{ isInvalid?: boolean }>`
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.7);
  border: ${({ isInvalid }) => (isInvalid ? '2px solid red' : 'none')};

  &:focus {
    outline: none;
    border: 2px solid #00b4d8;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #023e8a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0077b6;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;
