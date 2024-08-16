import styled, { css } from 'styled-components';
import { FaCirclePlus } from 'react-icons/fa6';
import ButtonIcon from '../../ui/Buttons/ButtonIcon';
import { useNavigate } from 'react-router-dom';
import ComponentAppWrapper from '../../ui/ComponentAppWrapper';
import { Dish, MealName } from './Diet.types';

const testMeal = [
  {
    name: 'Pizza',
    protein: 20,
    fat: 30,
    carbs: 100,
    kcal: 836,
  },
  {
    name: 'Hamburger',
    protein: 10,
    fat: 40,
    carbs: 70,
    kcal: 436,
  },
];

type food = {
  name: string;
  protein: number;
  fat: number;
  carbs: number;
  kcal: number;
};

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
          <Meal name="breakfast" mealFoods={testMeal} />
          <Meal name="brunch" />
          <Meal name="lunch" />
          <Meal name="supper" />
          <Meal name="dinner" />
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
  mealFoods?: food[];
};

function sumMacroNutrients(foods: food[]) {
  const init = {
    kcal: 0,
    protein: 0,
    fat: 0,
    carbs: 0,
  };

  return foods.reduce((prev, curr) => {
    return {
      kcal: prev.kcal + curr.kcal,
      carbs: prev.carbs + curr.carbs,
      fat: prev.fat + curr.fat,
      protein: prev.protein + curr.protein,
    };
  }, init);
}

function Meal({ name, mealFoods = [] }: MealProps) {
  const sumOfNutrients = sumMacroNutrients(mealFoods);
  const isMeal = mealFoods.length > 0 && Object.keys(mealFoods[0]).length > 0;
  const navigate = useNavigate();

  return (
    <>
      <MealsRow
        label={name}
        btn={
          <ButtonIcon
            $size={3}
            onClick={() => navigate('meal', { state: { mealName: name } })}>
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
