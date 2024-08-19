import { Outlet } from 'react-router-dom';

import HeaderApp from '../ui/HeaderApp';
import HorizontalCalendar from '../ui/HorizontalCalendar';

function DietLayout() {
  return (
    <>
      <HeaderApp>Diet</HeaderApp>
      <HorizontalCalendar />

      <Outlet />
    </>
  );
}

export default DietLayout;
