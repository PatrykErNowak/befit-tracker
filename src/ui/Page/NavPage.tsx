import { Link } from 'react-router-dom';
import Brand from '../Brand';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import styled from 'styled-components';
import { useState } from 'react';
import { breakpoint } from '../../styles/configStyles';
import Wrapper from '../Wrapper';
import Button from '../Buttons/Button';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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
    position: fixed;
    padding: 2rem 0;
    background-color: transparent;
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

  @media screen and (min-width: ${breakpoint.laptop}) {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: -10%;
      width: 1000%;
      height: 135%;
      transform: translateY(-50%);
      background-color: var(--color-brand-600);
      z-index: -1;
      pointer-events: none;
      border-radius: 15px;
    }
  }
`;

const HamburgerButton = styled.button`
  padding: 0.5rem;
  font-size: 3rem;
  background-color: transparent;
  border: transparent;

  @media screen and (min-width: ${breakpoint.laptop}) {
    display: none;
  }
`;

// ---------------------------------------------------------------
// Custom CTA Link

const CTALink = styled(Button)`
  color: var(--color-brand-600);
  background-color: var(--color-brand-100);
  border: 2px solid transparent;

  @media screen and (min-width: ${breakpoint.laptop}) {
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    border: 2px solid var(--color-brand-600);
  }
`;

// ---------------------------------------------------------------
// COMPONENT

function NavPage({ hideLinks = false }: { hideLinks?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen((prev) => !prev);
  }

  return (
    <Nav>
      <WrappperExt>
        <Link to={'/'} aria-label="Back to home page">
          <BrandExt />
        </Link>

        {!hideLinks && (
          <>
            <NavList className={`${isOpen ? 'isOpen' : ''}`}>
              <li>
                <Button $variation="link" as={Link} to={'/app/login'}>
                  Log in
                </Button>
              </li>
              <li>
                <CTALink
                  as={Link}
                  $variation="primary"
                  to={'/app/create-account'}>
                  Sign Up
                </CTALink>
              </li>
            </NavList>

            <HamburgerButton
              onClick={toggleNav}
              aria-label="Menu"
              aria-expanded={isOpen}>
              {isOpen ? <IoMdClose /> : <IoMdMenu />}
            </HamburgerButton>
          </>
        )}
      </WrappperExt>
    </Nav>
  );
}

export default NavPage;
