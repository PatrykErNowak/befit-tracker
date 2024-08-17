import styled, { css } from 'styled-components';
import { FaCirclePlus } from 'react-icons/fa6';
import ButtonIcon from '../../ui/Buttons/ButtonIcon';
import { useNavigate } from 'react-router-dom';
import ComponentAppWrapper from '../../ui/ComponentAppWrapper';
import { Dish, MealName } from './Diet.types';
import useDiet from './useDiet';
import { sumMacroNutrients } from '../../utils/helpers';

const StyledMeals = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const MealsHeader = styled.tr`
  th {
    padding-top: 0.5em;
    color: var(--color-grey-600);
  }
`;

function Meals() {
  const { diet } = useDiet();

  return (
    <ComponentAppWrapper>
      <StyledMeals role="table">
        <thead>
          <MealsHeader>
            <th></th>
            <th>Protein</th>
            <th>Carbs</th>
            <th>Fat</th>
            <th></th>
          </MealsHeader>
        </thead>
        <tbody>
          <Meal name="breakfast" mealFoods={diet?.breakfast} />
          <Meal name="brunch" mealFoods={diet?.brunch} />
          <Meal name="lunch" mealFoods={diet?.lunch} />
          <Meal name="supper" mealFoods={diet?.supper} />
          <Meal name="dinner" mealFoods={diet?.dinner} />
        </tbody>
      </StyledMeals>
    </ComponentAppWrapper>
  );
}

export default Meals;

// ------------------------------------------------------------------
// Meal component

type MealProps = {
  name: MealName;
  mealFoods?: Dish[];
};

function Meal({ name, mealFoods = [] }: MealProps) {
  const sumOfNutrients = sumMacroNutrients(mealFoods);
  const isMeal = mealFoods.length > 0 && Object.keys(mealFoods[0]).length > 0;
  const navigate = useNavigate();

  return (
    <>
      <MealsRow
        label={name}
        btn={
          <ButtonIcon $size={3} onClick={() => navigate(name)}>
            <FaCirclePlus />
          </ButtonIcon>
        }
        food={isMeal ? sumOfNutrients : undefined}
      />
      {isMeal &&
        mealFoods.map((food, i) => <MealsRow food={food} nestedRow key={i} />)}
    </>
  );
}

const StyledMealsRow = styled.tr<{
  $nestedRow?: boolean;
}>`
  &:not(:first-of-type) {
    border-top: 1px solid var(--color-grey-200);
  }

  td:first-of-type {
    padding-left: 1rem;
  }

  td:not(:first-of-type) {
    text-align: center;
  }

  td {
    padding: 1rem 0;
    color: var(--color-grey-400);
    & > * {
      width: 100%;
    }
  }

  .meal-name {
    color: var(--color-grey-600);
    font-weight: 600;
    font-size: 1.3em;
    text-transform: capitalize;
  }

  ${({ $nestedRow }) =>
    $nestedRow &&
    css`
      background-color: var(--color-brand-100);

      &:not(:first-of-type) {
        border-top: none;
      }

      td:first-of-type {
        padding-left: 1.5rem;
      }

      td {
        padding: 0.3rem 0;
        font-size: 0.9em;
      }

      .meal-name {
        font-size: clamp(1.3rem, 0.5rem + 0.6vw, 1.9rem);
        font-weight: 500;
      }
    `}
`;

type MealsRowProps = {
  label?: string;
  btn?: React.ReactElement;
  food: Partial<Dish> | undefined;
  nestedRow?: boolean;
};

function MealsRow({ label, btn, food, nestedRow }: MealsRowProps) {
  const { name, kcal = 0, fat, protein, carbs } = food || {};

  return (
    <StyledMealsRow $nestedRow={nestedRow}>
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
      <td>{btn}</td>
    </StyledMealsRow>
  );
}
