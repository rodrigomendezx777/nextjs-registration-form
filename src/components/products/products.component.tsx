import React from 'react';
import { ProductsContainer, ProductList, ProductItem } from './products.style';

const Products: React.FC = () => {
  return (
    <ProductsContainer>
      <h2>Nosso Catálogo</h2>
      <ProductList>
        <ProductItem>
          <img src="/piscina1.jpg" alt="Piscina Modelo 1" />
          <p>Piscina Modelo 1</p>
        </ProductItem>
        <ProductItem>
          <img src="/piscina2.jpg" alt="Piscina Modelo 2" />
          <p>Piscina Modelo 2</p>
        </ProductItem>
        <ProductItem>
          <img src="/piscina2.jpg" alt="Piscina Modelo 2" />
          <p>Piscina Modelo 2</p>
        </ProductItem>
        <ProductItem>
          <img src="/piscina2.jpg" alt="Piscina Modelo 2" />
          <p>Piscina Modelo 2</p>
        </ProductItem>
        {/* Adicione mais produtos conforme necessário */}
      </ProductList>
    </ProductsContainer>
  );
};

export default Products;
