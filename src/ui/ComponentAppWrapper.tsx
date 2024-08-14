import styled from 'styled-components';
import { breakpoint } from '../styles/configStyles';

const ComponentAppWrapper = styled.div`
  @media screen and (min-width: ${breakpoint.laptop}) {
    padding: 2rem;
    background-color: var(--color-brand-50);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-sm);
  }
`;

export default ComponentAppWrapper;
