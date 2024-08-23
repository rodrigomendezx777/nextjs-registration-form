import React, { useState } from 'react';
import { NavContainer, Logo, NavLinks, NavLinkItem, HamburgerIcon, MobileMenu } from './navBar.style';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer>
      <Logo>MeuSite</Logo>
      <NavLinks>
        <NavLinkItem href="/">Home</NavLinkItem>
        <NavLinkItem href="/about">Sobre</NavLinkItem>
        <NavLinkItem href="/services">Serviços</NavLinkItem>
        <NavLinkItem href="/contact">Contato</NavLinkItem>
      </NavLinks>
      <HamburgerIcon onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </HamburgerIcon>
      {isOpen && (
        <MobileMenu>
          <NavLinkItem href="/">Home</NavLinkItem>
          <NavLinkItem href="/about">Sobre</NavLinkItem>
          <NavLinkItem href="/services">Serviços</NavLinkItem>
          <NavLinkItem href="/contact">Contato</NavLinkItem>
        </MobileMenu>
      )}
    </NavContainer>
  );
};

export default Navbar;





// 3. Explicação das Etapas
// NavContainer: Este é o contêiner principal da navbar, que tem uma cor de fundo e está configurado para alinhar os itens ao centro, com espaço entre o logo e os links de navegação.

// Logo: Estilização simples para o logo.

// NavLinks: Este é o contêiner dos links de navegação. Em telas menores (menores que 768px), ele é oculto.

// NavLinkItem: Cada link de navegação tem um estilo básico com cor branca e efeito de hover.

// HamburgerIcon: Este é o ícone de menu hambúrguer que aparece em telas menores. Ele consiste em três barras empilhadas verticalmente.

// MobileMenu: O menu que aparece ao clicar no ícone de hambúrguer. Ele é exibido apenas quando isOpen é verdadeiro.