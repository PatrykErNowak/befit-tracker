import styled, { css } from 'styled-components';
import { Dish } from './Diet.types';

const StyledMealsRow = styled.tr<{
  $type: 'main' | 'nested' | 'summary';
}>`
  td:not(:first-of-type) {
    text-align: center;
  }

  td {
    color: var(--color-grey-400);
    & > * {
      width: 100%;
    }
  }

  .meal-name {
    color: var(--color-grey-600);
    text-transform: capitalize;
  }

  ${({ $type }) =>
    $type === 'main' &&
    css`
      &:not(:first-of-type) {
        border-top: 1px solid var(--color-grey-200);
      }

      td:first-of-type {
        padding-left: 1rem;
      }

      td {
        padding: 1rem 0;
      }

      .meal-name {
        color: var(--color-brand-600);
        font-weight: 600;
        font-size: clamp(1.4rem, 0.5rem + 0.75vw, 2rem);
      }
    `}

  ${({ $type }) =>
    $type === 'nested' &&
    css`
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: 1rem;
        top: 40%;
        transform: translateY(-50%);
        height: 70%;
        width: 2px;
        background-color: var(--color-grey-400);
      }

      &:not(:first-of-type) {
        border-top: none;
      }

      td:first-of-type {
        padding-left: 2rem;
      }

      td {
        padding: 0 0 1rem;
        font-size: 0.9em;
      }

      .meal-name {
        font-size: clamp(1.3rem, 0.5rem + 0.6vw, 1.9rem);
        font-weight: 500;
      }
    `}

  ${({ $type }) =>
    $type === 'summary' &&
    css`
      border-top: 2px solid var(--color-grey-400);
      td:first-of-type {
        padding-left: 1rem;
      }
      td {
        padding: 1rem 0;
        color: var(--color-grey-500);
        font-weight: 500;
      }

      .meal-name {
        font-weight: 600;
        font-size: clamp(1.5rem, 0.5rem + 0.9vw, 2rem);
      }
    `}
`;

type MealsRowProps = {
  label?: string;
  btn?: React.ReactElement;
  food: Partial<Dish> | undefined;
  addWeight?: boolean;
  type?: 'main' | 'nested' | 'summary';
} & React.ComponentProps<'tr'>;

export default function MealsRow({
  label,
  btn,
  food,
  addWeight = false,
  type = 'main',
  ...props
}: MealsRowProps) {
  const { name, kcal = 0, fat, protein, carbs, weight } = food || {};

  return (
    <StyledMealsRow $type={type} {...props}>
      <td>
        <p className="meal-name">{label || name}</p>
        <p>
          <span>{kcal || 0} </span>
          kcal
        </p>
      </td>
      <td>{protein && protein + ' g'}</td>
      <td>{carbs && carbs + ' g'}</td>
      <td>{fat && fat + ' g'}</td>
      {addWeight && <td>{weight && weight + ' g'}</td>}

      <td>{btn}</td>
    </StyledMealsRow>
  );
}
