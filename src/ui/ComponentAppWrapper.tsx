import styled from 'styled-components';
import { breakpoint } from '../styles/configStyles';

const ComponentAppWrapper = styled.div`
  background-color: var(--color-brand-50);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  @media screen and (min-width: ${breakpoint.laptop}) {
    padding: 2rem;
  }
`;

export default ComponentAppWrapper;
