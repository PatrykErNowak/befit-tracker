import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoint } from '../styles/configStyles';

const LinkCustom = styled(LinkRouter)`
  color: var(--color-brand-50);
  text-decoration: underline;
  font-weight: 700;

  @media screen and (min-width: ${breakpoint.laptop}) {
    &:hover {
      color: var(--color-brand-400);
    }
  }
`;

export default LinkCustom;
