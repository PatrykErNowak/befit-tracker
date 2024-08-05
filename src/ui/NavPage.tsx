import { Link } from 'react-router-dom';
import Brand from './Brand';
import { IoMdMenu } from 'react-icons/io';
import styled from 'styled-components';
import { useState } from 'react';
import { breakpoint } from '../styles/configStyles';
import Wrapper from './Wrapper';

const Nav = styled.nav`
  position: relative;
  z-index: 10;
  padding: 1.5rem 0;
  color: var(--color-brand-50);
  background-color: var(--color-brand-600);

  a {
    text-decoration: none;
    outline-offset: 5px;
    outline-color: var(--color-brand-200);
  }

  @media screen and (min-width: ${breakpoint.laptop}) {
    padding: 2rem 0;
  }
`;

const WrappperExt = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  display: none;
  gap: 1rem;
  font-size: 1.1em;

  &.isOpen {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    background-color: var(--color-brand-600);
    border-top: 2px solid var(--color-brand-400);
  }

  @media screen and (min-width: ${breakpoint.laptop}) {
    display: flex;
    gap: 2rem;
  }
`;

const BrandExt = styled(Brand)`
  font-size: 1.4em;
`;

const HamButton = styled.button`
  padding: 0.5rem;
  font-size: 3rem;
  background-color: transparent;
  border: transparent;

  @media screen and (min-width: ${breakpoint.laptop}) {
    display: none;
  }
`;

// ---------------------------------------------------------------
// Custom Links

const LinkExt = styled(Link)`
  font-weight: 600;
  display: inline-block;
  padding: 1rem 2rem;
  transition: transform 0.3s;
  outline: none;

  &:hover,
  &:focus {
    color: var(--color-brand-200);
    transform: rotate(-3deg);
  }
`;

const CTALink = styled(LinkExt)`
  color: var(--color-brand-600);
  background-color: var(--color-brand-50);
  border-radius: 100px;
  border: 2px solid transparent;

  &:hover,
  &:focus {
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    border: 2px solid var(--color-brand-50);
  }
`;

// ---------------------------------------------------------------
// COMPONENT

function NavPage() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen((prev) => !prev);
  }

  return (
    <Nav>
      <WrappperExt>
        <Link to={'/'}>
          <BrandExt />
        </Link>

        <NavList className={`${isOpen ? 'isOpen' : ''}`}>
          <li>
            <LinkExt to={'/app/login'}>Log in</LinkExt>
          </li>
          <li>
            <CTALink to={'/app/create-account'}>Sign Up</CTALink>
          </li>
        </NavList>

        <HamButton onClick={toggleNav}>
          <IoMdMenu />
        </HamButton>
      </WrappperExt>
    </Nav>
  );
}

export default NavPage;
