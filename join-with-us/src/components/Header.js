// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin: 0 1rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Header = () => (
  <Nav>
    <Logo>Your Logo</Logo>
    <Menu>
      <li><a href="#work-with-us">Work With Us</a></li>
      <li><a href="#business-partnership">Partner With Us</a></li>
    </Menu>
    <button>Get Started</button>
  </Nav>
);

export default Header;
