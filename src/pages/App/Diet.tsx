import styled from 'styled-components';
import Meals from '../../features/diet/Meals';
import { breakpoint } from '../../styles/configStyles';
import NutrientsDaySummary from '../../features/diet/NutrientsDaySummary';
import DietNote from '../../features/diet/DietNote';

const StyledDiet = styled.div``;

const ContentGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    align-items: start;
    border-top-left-radius: 50px;
    padding: 2rem 3rem;
  }
`;

const MealsGrid = styled(Meals)`
  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-column: 1/2;
    grid-row: 1/3;
  }
`;
const NutrientsDaySummaryGrid = styled(NutrientsDaySummary)`
  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`;
const DietNoteGrid = styled(DietNote)`
  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-column: 2/3;
    grid-row: 2/3;
    align-self: stretch;
  }
`;

function Diet() {
  return (
    <>
      <StyledDiet>
        <ContentGrid>
          <MealsGrid />
          <NutrientsDaySummaryGrid />
          <DietNoteGrid />
        </ContentGrid>
      </StyledDiet>
    </>
  );
}

export default Diet;
