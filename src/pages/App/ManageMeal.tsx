import styled from 'styled-components';
import { breakpoint } from '../../styles/configStyles';
import { Link } from 'react-router-dom';
import HeaderAppSection from '../../ui/HeaderAppSection';
import { IoArrowBackCircle } from 'react-icons/io5';
import ButtonIcon from '../../ui/Buttons/ButtonIcon';
import AddCustomMealForm from '../../features/diet/AddCustomMealForm';
import useMealName from '../../features/diet/useMealName';
import MealSummary from '../../features/diet/MealSummary';
import InstantSearch from '../../features/diet/InstantSearch';
import ComponentAppWrapper from '../../ui/ComponentAppWrapper';
import Tabs from '../../ui/Tabs';

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

const AddMealExt = styled(AddMeal)`
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
            <AddMealExt />
          </ContentGrid>
        )}
      </StyledMeal>
    </>
  );
}

export default ManageMeal;

// ----------------------------------------------------------------
// Add Meal Component

const Header = styled.header`
  display: flex;
  padding: 1.5rem 1rem 0;

  @media screen and (min-width: ${breakpoint.laptop}) {
    padding: 2.5rem 5rem 0;
  }
  @media screen and (min-width: ${breakpoint.desktop}) {
    padding: 3.5rem 6rem 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

function AddMeal({ ...props }) {
  return (
    <ComponentAppWrapper {...props}>
      <Tabs defaultTabOpen="instant">
        <Header>
          <Tabs.Label opens="instant">
            <Tabs.Button>Search Dish</Tabs.Button>
          </Tabs.Label>
          <Tabs.Label opens="custom">
            <Tabs.Button>Add Custom</Tabs.Button>
          </Tabs.Label>
        </Header>
        <Content>
          <Tabs.Content name="instant">
            <InstantSearch />
          </Tabs.Content>
          <Tabs.Content name="custom">
            <AddCustomMealForm />
          </Tabs.Content>
        </Content>
      </Tabs>
    </ComponentAppWrapper>
  );
}
