import styled, { css } from 'styled-components';
import { breakpoint } from '../styles/configStyles';

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-800);
    }
  `,
  secondary: css`
    color: var(--color-grey-100);
    background: var(--color-grey-700);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-600);
    }
  `,
};

const Button = styled.button<{ $variation?: keyof typeof variations }>`
  padding: 1rem 1.5rem;

  font-size: inherit;
  font-weight: 500;
  text-decoration: none;
  color: var(--color-grey-50);
  background-color: var(--color-grey-800);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-grey-800);

  ${({ $variation = 'primary' }) => variations[$variation]}

  @media screen and (min-width: ${breakpoint.laptop}) {
    &:hover {
      color: var(--color-grey-50);
    }
  }
`;

export default Button;
