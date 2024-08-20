import styled from 'styled-components';
import Meals from '../../features/diet/Meals';
import { breakpoint } from '../../styles/configStyles';
import NutrientsDaySummary from '../../features/diet/NutrientsDaySummary';

const StyledDiet = styled.div``;

const ContentGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
    border-top-left-radius: 50px;
    padding: 2rem 3rem;
  }
`;

function Diet() {
  return (
    <>
      <StyledDiet>
        <ContentGrid>
          <Meals />
          <NutrientsDaySummary />
        </ContentGrid>
      </StyledDiet>
    </>
  );
}

export default Diet;
