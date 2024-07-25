import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import LoginBgDesktop from '../assets/img/login-bg-desktop.jpg';

const StyledAuthLayout = styled.div`
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
`;

function AuthLayout() {
  return (
    <StyledAuthLayout>
      <Outlet />
    </StyledAuthLayout>
  );
}

export default AuthLayout;
