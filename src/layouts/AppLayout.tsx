import styled from 'styled-components';

import LoginBgDesktop from '../assets/img/login-bg-desktop.jpg';
import { Outlet } from 'react-router-dom';
import { breakpoint } from '../styles/configStyles';
import Sidebar from '../ui/Sidebar';

const StyledAppLayout = styled.div`
  min-height: 100dvh;
  position: relative;

  &::before,
  &::after {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &:before {
    z-index: -9;
    opacity: 0.4;
    background-image: url(${LoginBgDesktop});
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
  }

  &::after {
    z-index: -10;
    background-color: var(--color-brand-200);
  }

  // custom styles
  display: grid;
  grid-template-rows: 1fr auto;

  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-template-rows: 1fr;
    grid-template-columns: auto 1fr;
  }
`;

const SidebarExt = styled(Sidebar)`
  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-column: 1/2;
    grid-row: 1/2;
  }
`;

const Main = styled.main``;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Main>
        <Outlet />
      </Main>
      <SidebarExt />
    </StyledAppLayout>
  );
}

export default AppLayout;
