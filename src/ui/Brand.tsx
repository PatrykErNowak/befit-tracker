import styled from 'styled-components';
import Heading from './Heading';
import Logo from './Logo';
import { breakpoint } from '../styles/configStyles';

const StyledBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: ${breakpoint.laptop}) {
    gap: 2rem;
  }
`;

function Brand({ ...props }) {
  return (
    <StyledBrand {...props}>
      <Logo />
      <Heading as={'p'} $inverted>
        Be<span>Fit</span> Tracker
      </Heading>
    </StyledBrand>
  );
}

export default Brand;
