import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IoIosSettings } from 'react-icons/io';

import MainNav from './MainNav';
import MenuButton from './Buttons/MenuButton';
import ProfileAvatarInfo from '../features/auth/ProfileAvatarInfo';
import LogoutButton from '../features/auth/LogoutButton';

import { breakpoint } from '../styles/configStyles';
import Brand from './Brand';

const StyledSidebar = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0.5rem;
  background-color: var(--color-brand-600);
  box-shadow: 0 0 0.8rem 0.3rem rgba(0, 0, 0, 0.1);

  @media screen and (min-width: ${breakpoint.laptop}) {
    min-width: 35rem;
    padding: 3rem;
  }
  @media screen and (min-width: ${breakpoint.desktop}) {
    min-width: 40rem;
    padding: 4rem;
  }
`;
const SidebarHeader = styled.header`
  display: none;
  @media screen and (min-width: ${breakpoint.laptop}) {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 2rem 0;
    font-size: 2.5rem;
    border-bottom: 1px solid var(--color-brand-400);
  }
`;

const StyledSidebarFooter = styled.div`
  display: none;
  margin-top: auto;

  @media screen and (min-width: ${breakpoint.laptop}) {
    display: grid;
  }
`;

const Menu = styled.div`
  display: flex;
  padding-top: 0.5rem;
  color: var(--color-brand-50);
  border-top: 1px solid var(--color-brand-400);
`;

function Sidebar({ ...props }) {
  return (
    <StyledSidebar {...props}>
      <SidebarHeader>
        <Brand />
      </SidebarHeader>

      <MainNav />

      <StyledSidebarFooter>
        <ProfileAvatarInfo />
        <Menu>
          <MenuButton icon={<IoIosSettings />} label="Settings" as={NavLink} to={'profile'} />
          <LogoutButton />
        </Menu>
      </StyledSidebarFooter>
    </StyledSidebar>
  );
}

export default Sidebar;
