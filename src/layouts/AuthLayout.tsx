import { Outlet } from 'react-router-dom';
import { LayoutContainerBG } from '../ui/LayoutContainerBG';
import NavPage from '../ui/Page/NavPage';

function AuthLayout() {
  return (
    <LayoutContainerBG>
      <NavPage hideLinks />
      <Outlet />
    </LayoutContainerBG>
  );
}

export default AuthLayout;
