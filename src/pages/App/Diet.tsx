import styled from 'styled-components';
import Meals from '../../features/diet/Meals';
import { breakpoint } from '../../styles/configStyles';

const StyledDiet = styled.div`
  @media screen and (min-width: ${breakpoint.laptop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top-left-radius: 50px;
    padding: 2rem;
  }
`;

function Diet() {
  return (
    <>
      <StyledDiet>
        <Meals />
      </StyledDiet>
    </>
  );
}

export default Diet;
