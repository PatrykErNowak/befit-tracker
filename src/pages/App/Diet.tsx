import styled from 'styled-components';
import Meals from '../../features/diet/Meals';
import { breakpoint } from '../../styles/configStyles';

const StyledDiet = styled.div``;

const ContentGrid = styled.div`
  @media screen and (min-width: ${breakpoint.laptop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
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
        </ContentGrid>
      </StyledDiet>
    </>
  );
}

export default Diet;
