import styled from 'styled-components';
import { breakpoint } from '../../styles/configStyles';
import { Link } from 'react-router-dom';
import HeaderAppSection from '../../ui/HeaderAppSection';
import { IoArrowBackCircle } from 'react-icons/io5';
import ButtonIcon from '../../ui/Buttons/ButtonIcon';
import AddCustomMealForm from '../../features/diet/AddCustomMealForm';
import useMealName from '../../features/diet/useMealName';
import MealSummary from '../../features/diet/MealSummary';

const StyledMeal = styled.div`
  @media screen and (min-width: ${breakpoint.laptop}) {
    padding: 2rem 3rem;
  }
`;
const ContentGrid = styled.div`
  padding: 1rem 0 3rem;
  display: grid;
  gap: 2rem;

  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-template-columns: repeat(6, 1fr);
    align-items: start;
    gap: 2rem;
  }
`;
const AddCustomMealFormExt = styled(AddCustomMealForm)`
  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-column: 1/4;
    grid-row: 1/2;
  }
`;
const MealSummaryExt = styled(MealSummary)`
  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-column: 4/-1;
  }
`;

function ManageMeal() {
  const meal = useMealName();

  return (
    <>
      <StyledMeal>
        <HeaderAppSection
          title={meal || 'Sorry'}
          desc={
            meal
              ? `Add a dish or ingredient to your meal.`
              : 'No such meal exists'
          }
          btn={
            <ButtonIcon as={Link} to={'../'} $size={4.5} title="Back to Diet">
              <IoArrowBackCircle />
            </ButtonIcon>
          }
        />
        {meal && (
          <ContentGrid>
            <MealSummaryExt />
            <AddCustomMealFormExt />
          </ContentGrid>
        )}
      </StyledMeal>
    </>
  );
}

export default ManageMeal;
