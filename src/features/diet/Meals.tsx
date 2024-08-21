import styled from 'styled-components';
import ComponentAppWrapper from '../../ui/ComponentAppWrapper';
import useDiet from './useDiet';
import { Dish, MealName } from './Diet.types';
import { sumDishesNutrients, sumMealsNutrients } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import MealsRow from './MealRow';
import ButtonIcon from '../../ui/Buttons/ButtonIcon';
import { FaCirclePlus } from 'react-icons/fa6';
import { breakpoint } from '../../styles/configStyles';

const StyledMeals = styled(ComponentAppWrapper)`
  padding: 2rem 0;
  @media screen and (min-width: ${breakpoint.laptop}) {
    padding: 2rem;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const MealsHeader = styled.tr`
  th {
    padding-top: 0.5em;
    color: var(--color-brand-600);
  }

  @media screen and (min-width: ${breakpoint.laptop}) {
    th {
      padding-bottom: 0.5em;
    }
  }
`;

function Meals() {
  const { diet } = useDiet();

  return (
    <StyledMeals>
      <Table role="table">
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
          <MealsRow
            label="Total"
            food={sumMealsNutrients(diet)}
            type="summary"
          />
        </tbody>
      </Table>
    </StyledMeals>
  );
}

export default Meals;

type MealProps = {
  name: MealName;
  mealFoods?: Dish[];
};

function Meal({ name, mealFoods = [] }: MealProps) {
  const sumOfNutrients = sumDishesNutrients(mealFoods);
  const isMeal = mealFoods.length > 0 && Object.keys(mealFoods[0]).length > 0;
  const navigate = useNavigate();

  return (
    <>
      <MealsRow
        onClick={() => navigate(name)}
        label={name}
        btn={
          <ButtonIcon $size={3} aria-label="Edit meal">
            <FaCirclePlus />
          </ButtonIcon>
        }
        food={isMeal ? sumOfNutrients : undefined}
      />
      {isMeal &&
        mealFoods.map((food, i) => (
          <MealsRow food={food} type="nested" key={i} />
        ))}
    </>
  );
}
