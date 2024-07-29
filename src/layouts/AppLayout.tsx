import styled from 'styled-components';

import { Outlet } from 'react-router-dom';
import { breakpoint } from '../styles/configStyles';
import Sidebar from '../ui/Sidebar';
import { LayoutContainerBG } from '../ui/LayoutContainerBG';

const StyledAppLayout = styled(LayoutContainerBG)`
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

const Main = styled.main`
  background-color: var(--color-brand-50);
`;

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
