import styled from 'styled-components';

export const LayoutContainerBG = styled.div`
  min-height: 100dvh;
  position: relative;

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
