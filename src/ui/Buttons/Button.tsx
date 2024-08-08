import styled, { css } from 'styled-components';
import { breakpoint } from '../../styles/configStyles';

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    border: 2px solid var(--color-brand-600);

    @media screen and (min-width: ${breakpoint.laptop}) {
      &:hover,
      &:focus {
        color: var(--color-brand-600);
        background-color: transparent;
        border: 2px solid var(--color-brand-600);
      }
    }
  `,
  secondary: css`
    color: var(--color-brand-50);
    background-color: var(--color-cta);
    border: 2px solid var(--color-cta);

    @media screen and (min-width: ${breakpoint.laptop}) {
      &:hover,
      &:focus {
        color: var(--color-cta);
        background-color: transparent;
        border: 2px solid var(--color-cta);
      }
    }
  `,
  link: css`
    outline: none;

    @media screen and (min-width: ${breakpoint.laptop}) {
      color: var(--color-brand-600);

      &:hover,
      &:focus {
        color: var(--color-brand-800);
      }
    }
  `,
};

const Button = styled.button<{ $variation?: keyof typeof variations }>`
  display: inline-block;
  padding: 1rem 2rem;

  font-size: inherit;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  text-align: center;
  border-radius: var(--border-radius-lg);
  transition: transform 0.3s, background-color 0.3s;

  &:active {
    transform: translateY(1px);
  }

  ${({ $variation = 'primary' }) => variations[$variation]}
`;

export default Button;
