import styled from 'styled-components';

export const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #0070f3;
  color: white;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0 20px;
    }
  }
`;

export const Button = styled.button`
  background-color: white;
  color: #0070f3;
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
