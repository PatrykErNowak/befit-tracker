import { CgGym } from 'react-icons/cg';
import { MdOutlineRestaurantMenu, MdPlace } from 'react-icons/md';
import { RiHomeLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoint } from '../styles/configStyles';
import NavMoreOptions from './NavMoreOptions';

const NavList = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 1fr);

  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem;
  color: var(--color-brand-100);
  font-size: 0.9em;
  text-decoration: none;
  border-radius: var(--border-radius-md);
  transition: transform 0.3s;

  svg {
    font-size: 2.2rem;
  }

  &:active,
  &.active:link,
  &.active:visited {
    font-weight: 500;
    background-color: var(--color-brand-700);
    color: #fff;
  }
  @media screen and (min-width: ${breakpoint.laptop}) {
    flex-direction: row;
    gap: 1.4rem;
    padding: 1rem;
    font-size: 1em;

    &:hover {
      transform: translateX(5px);
      color: #fff;
    }
  }
`;

const MobileNavItems = styled.li`
  @media screen and (min-width: ${breakpoint.laptop}) {
    display: none;
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to={'dashboard'}>
            <RiHomeLine />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={'diet'}>
            <MdOutlineRestaurantMenu />
            <span>Diet</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={'workout'}>
            <CgGym />
            <span>Workout</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={'places'}>
            <MdPlace />
            <span>Places</span>
          </StyledNavLink>
        </li>
        <MobileNavItems>
          <NavMoreOptions />
        </MobileNavItems>
      </NavList>
    </nav>
  );
}

export default MainNav;
