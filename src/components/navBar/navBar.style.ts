import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinkItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background-color: white;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #333;
  position: absolute;
  top: 60px;
  right: 20px;
  padding: 20px;
  border-radius: 8px;
  z-index: 10;

  a {
    font-size: 18px;
    text-decoration: none;
    color: white;
  }
`;
