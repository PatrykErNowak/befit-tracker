import styled from 'styled-components';
import useDiet from './useDiet';
import ComponentAppWrapper from '../../ui/ComponentAppWrapper';
import useMealName from './useMealName';
import MealsRow from './MealRow';
import { sumDishesNutrients } from '../../utils/helpers';
import { breakpoint } from '../../styles/configStyles';
import Text from '../../ui/Text';
import ButtonIcon from '../../ui/Buttons/ButtonIcon';
import { MdDeleteForever } from 'react-icons/md';
import useDeleteDish from './useDeleteDish';

const StyledMealSummary = styled(ComponentAppWrapper)`
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

const TextExt = styled(Text)`
  margin: 2rem 0 0;

  text-align: center;
`;

function MealSummary({ ...props }) {
  const { diet } = useDiet();
  const mealName = useMealName();
  const { deleteDish } = useDeleteDish();

  const mealFoods = diet ? diet[mealName!] : undefined;
  const isMeal =
    mealFoods !== undefined &&
    mealFoods.length > 0 &&
    Object.keys(mealFoods[0]).length > 0;

  return (
    <StyledMealSummary {...props}>
      <Table role="table">
        <thead>
          <MealsHeader>
            <th></th>
            <th>Protein</th>
            <th>Carbs</th>
            <th>Fat</th>
            <th>Weight</th>
            <th></th>
          </MealsHeader>
        </thead>
        {isMeal && (
          <tbody>
            {mealFoods.map((food, i) => (
              <MealsRow
                food={food}
                key={i}
                addWeight
                btn={
                  <ButtonIcon
                    onClick={() => deleteDish({ name: mealName!, data: food })}>
                    <MdDeleteForever />
                  </ButtonIcon>
                }
              />
            ))}
            {
              <MealsRow
                label="Total"
                addWeight
                food={sumDishesNutrients(mealFoods)}
                type="summary"
              />
            }
          </tbody>
        )}
      </Table>
      {!isMeal && (
        <TextExt $opacity={0.8}>
          Add dish or ingredient to see the data...
        </TextExt>
      )}
    </StyledMealSummary>
  );
}

export default MealSummary;
