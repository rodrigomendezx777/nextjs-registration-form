// src/components/Navbar/Navbar.style.ts
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease;

  &.scrolled {
    background-color: #222;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;
