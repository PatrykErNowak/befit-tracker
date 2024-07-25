import styled from 'styled-components';
import Spinner from '../ui/Spinner';

import LoginBgDesktop from '../assets/img/login-bg-desktop.jpg';

const StyledLoadingPage = styled.div`
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;

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

function LoadingPage() {
  return (
    <StyledLoadingPage>
      <Spinner />
    </StyledLoadingPage>
  );
}

export default LoadingPage;
