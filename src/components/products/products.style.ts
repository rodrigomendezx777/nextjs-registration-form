import styled from 'styled-components';

export const ProductsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f7f7f7;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

export const ProductList = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const ProductItem = styled.div`
  width: 300px;
  padding: 1rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    border-radius: 10px;
  }

  p {
    font-size: 1.2rem;
    margin-top: 1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;
