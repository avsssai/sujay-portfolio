import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Wrapper>
      <Logo>
        <Name>Sujayendra</Name>
        <Copyright>© 2022</Copyright>
      </Logo>
      <Nav>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: var(--color-accentPink);
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  font-family: var(--font-secondary);
  justify-content: space-between;
`;

const Logo = styled.div``;

const Name = styled.h1`
  font-size: 20px;
`;

const Nav = styled.div`
  display: flex;
  gap: 12px;
`;

const NavItem = styled.a`
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const Copyright = styled.p``;
