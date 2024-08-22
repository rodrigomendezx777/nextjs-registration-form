import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: url('/header-background.jpg') no-repeat center center;
  background-size: cover;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    height: 60vh;
    padding: 0 20px;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Button = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;
