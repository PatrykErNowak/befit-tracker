import styled from 'styled-components';
import Spinner from '../../ui/Spinner';

const StyledLoadingPage = styled.div`
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
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
