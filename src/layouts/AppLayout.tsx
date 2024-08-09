import styled from 'styled-components';

import { Outlet } from 'react-router-dom';
import { breakpoint } from '../styles/configStyles';
import Sidebar from '../ui/Sidebar';
import { LayoutContainerBG } from '../ui/LayoutContainerBG';
import { Suspense } from 'react';
import LoadingPage from '../pages/App/LoadingPage';

const StyledAppLayout = styled(LayoutContainerBG)`
  display: grid;
  grid-template-rows: 1fr auto;
  max-height: 100dvh;

  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-template-rows: 1fr;
    grid-template-columns: auto 1fr;
  }
`;

const SidebarExt = styled(Sidebar)`
  position: sticky;
  bottom: 0;
  left: 0;

  @media screen and (min-width: ${breakpoint.laptop}) {
    position: static;
    grid-column: 1/2;
    grid-row: 1/2;
  }
`;

const Main = styled.main`
  background-color: var(--color-brand-50);
  overflow-y: auto;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Main>
        <Suspense fallback={<LoadingPage />}>
          <Outlet />
        </Suspense>
      </Main>
      <SidebarExt />
    </StyledAppLayout>
  );
}

export default AppLayout;
