import styled from 'styled-components';

export const TestimonialsContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    font-style: italic;

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0 20px;
    }
  }
`;
