import styled, { css } from 'styled-components';
import { breakpoint } from '../../styles/configStyles';

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    border: 1px solid transparent;

    @media screen and (min-width: ${breakpoint.laptop}) {
      &:not(:disabled):hover,
      &:not(:disabled):focus {
        box-shadow: 0 2px 7px var(--color-brand-300);
        background-color: var(--color-brand-500);
      }
    }
  `,
  primaryActive: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    border: 1px solid transparent;
  `,

  primaryInactive: css`
    color: var(--color-brand-600);
    background-color: transparent;
    border: 2px solid var(--color-brand-600);
  `,
  secondary: css`
    color: var(--color-brand-50);
    background-color: var(--color-cta);
    border: 2px solid var(--color-cta);

    @media screen and (min-width: ${breakpoint.laptop}) {
      &:not(:disabled):hover,
      &:not(:disabled):focus {
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

const Button = styled.button<{
  $variation?: keyof typeof variations;
}>`
  display: inline-block;
  padding: 0.7em 1.2em;

  font-size: inherit;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  text-align: center;
  border-radius: var(--border-radius-lg);
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    &,
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }

  ${({ $variation = 'primary' }) => variations[$variation]}
`;

export default Button;
