import { Outlet } from 'react-router-dom';
import { LayoutContainerBG } from '../ui/LayoutContainerBG';

function AuthLayout() {
  return (
    <LayoutContainerBG>
      <Outlet />
    </LayoutContainerBG>
  );
}

export default AuthLayout;
