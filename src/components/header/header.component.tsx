import React from 'react';
import { HeaderContainer, Title, Subtitle, Button} from '@/components/header/header.style';


const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Piscinas de Fibra</Title>
      <Subtitle>A melhor escolha para o seu lazer.</Subtitle>
      <Button>Saiba Mais</Button>
    </HeaderContainer>
  );
};

export default Header;
