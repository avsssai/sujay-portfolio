import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import styled from 'styled-components';
import { Moon, Sun, Menu } from 'react-feather';
import Link from 'next/link';

export default function Header(): JSX.Element {
  // @ts-ignore
  const [darkMode, toggleDarkMode] = useDarkMode();
  // console.log(darkMode);
  return (
    <HeaderWrapper>
      <Logo>
        <Name>
          <Link href="/">Sujayendra</Link>
        </Name>
      </Logo>
      <HeaderRightContent>
        {/* <Item>
          <Link href="/about">about</Link>
        </Item> */}
        <HideInMobileMenu>
          <Link href="/blog">blog</Link>
        </HideInMobileMenu>
        <HideInMobileMenu>
          <Link href="/about">about</Link>
        </HideInMobileMenu>
        <HideInMobileMenu>
          <Link href="/work">work</Link>
        </HideInMobileMenu>
        <Item>
          {darkMode === 'light' ? (
            // @ts-ignore */}
            <Moon onClick={toggleDarkMode} />
          ) : (
            // @ts-ignore */}
            <Sun onClick={toggleDarkMode} />
          )}
        </Item>
        <MobileMenu>
          <Menu />
        </MobileMenu>
      </HeaderRightContent>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  margin-bottom: 2rem;
`;
const Logo = styled.span`
  font-family: var(--font-primary);
  color: var(--color-textPrimary);
  font-size: 1.25rem;
  margin-left: 24px;
  font-weight: 700;
  @media (min-width: 640px) {
    font-size: 2rem;
    display: flex;
    align-items: center;
  }
`;
const HeaderRightContent = styled.div`
  display: flex;
  gap: 3rem;
  font-size: 1.25rem;
  margin-right: 2rem;
  font-family: inherit;
  font-weight: 600;
  color: var(--color-textPrimary);
  align-items: center;
  @media (max-width: 640px) {
    gap: 32px;
    font-size: 1rem;
  }
`;

const Name = styled.div`
  & a {
    color: inherit;
    text-decoration: none;
  }
`;
const ImageContainer = styled.div`
  display: none;
  cursor: pointer;
  @media (min-width: 640px) {
    display: block;
  }
`;

const Item = styled.span`
  cursor: pointer;

  & a {
    color: inherit;
    text-decoration: none;
    position: relative;
    padding-bottom: 0.5rem;
  }
  & a:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.2rem;
    background-color: hotpink;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
    transform: scale(0);
  }

  /* &:is(a:hover, a:focus)::after {
    opacity: 1;
    transform: translate3d(0, 0rem, 0);
  } */
  & a:hover::after,
  & a:focus::after {
    opacity: 1;
    transform: scale(1);
    transform-origin: center;
  }
`;

const HideInMobileMenu = styled(Item)`
  @media (max-width: 700px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  @media (min-width: 701px) {
    display: none;
  }
`;
