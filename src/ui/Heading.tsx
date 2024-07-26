import styled, { css } from 'styled-components';

const Heading = styled.h1<{ $inverted?: boolean }>`
  letter-spacing: 1px;
  span {
    font-weight: 600;
    color: var(--color-brand-500);
  }

  ${({ $inverted }) =>
    $inverted &&
    css`
      color: var(--color-brand-100);
      span {
        color: var(--color-brand-300);
      }
    `}
`;

export default Heading;
