import styled from 'styled-components';
import { breakpoint } from '../../styles/configStyles';
import { Link, useLocation } from 'react-router-dom';
import HeaderAppSection from '../../ui/HeaderAppSection';
import { IoArrowBackCircle } from 'react-icons/io5';
import ButtonIcon from '../../ui/Buttons/ButtonIcon';
import AddCustomMealForm from '../../features/diet/AddCustomMealForm';

const StyledMeal = styled.div`
  padding: 0 1rem;
  @media screen and (min-width: ${breakpoint.laptop}) {
    padding: 2rem 3rem;
  }
`;
const ContentGrid = styled.div`
  @media screen and (min-width: ${breakpoint.laptop}) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`;
const AddCustomMealFormExt = styled(AddCustomMealForm)`
  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-column: 1/4;
  }
`;

function ManageMeal() {
  const {
    state: { mealName },
  } = useLocation();

  return (
    <>
      <StyledMeal>
        <HeaderAppSection
          title={mealName}
          desc={`Add a dish to your meal.`}
          btn={
            <ButtonIcon as={Link} to={'../'} $size={4.5} title="Back to Diet">
              <IoArrowBackCircle />
            </ButtonIcon>
          }
        />
        <ContentGrid>
          <AddCustomMealFormExt />
        </ContentGrid>
      </StyledMeal>
    </>
  );
}

export default ManageMeal;
