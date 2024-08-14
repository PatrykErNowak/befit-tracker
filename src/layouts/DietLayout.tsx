import { Outlet } from 'react-router-dom';

import HeaderApp from '../ui/HeaderApp';

function DietLayout() {
  return (
    <>
      <HeaderApp>Diet</HeaderApp>

      <Outlet />
    </>
  );
}

export default DietLayout;
