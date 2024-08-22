// src/components/Navbar/Navbar.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavbarContainer, NavItem, NavList } from './navBar.style';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarContainer className={scrolled ? 'scrolled' : ''}>
      <NavList>
        <NavItem>
          <Link href="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link href="/catalogo">Catálogo</Link>
        </NavItem>
        <NavItem>
          <Link href="/contato">Contato</Link>
        </NavItem>
        <NavItem>
          <Link href="/sobre">Sobre</Link>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
