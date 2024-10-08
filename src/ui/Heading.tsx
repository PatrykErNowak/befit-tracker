import styled, { css } from 'styled-components';

const Heading = styled.h1<{ $inverted?: boolean; $opacity?: number }>`
  letter-spacing: 1px;
  text-transform: capitalize;
  span {
    font-weight: 600;
    color: var(--color-brand-500);
  }

  ${({ $inverted }) =>
    $inverted &&
    css`
      color: var(--color-brand-100);
      span {
        color: var(--color-brand-400);
      }
    `}
  opacity: ${({ $opacity = 1 }) => $opacity}
`;

export default Heading;
