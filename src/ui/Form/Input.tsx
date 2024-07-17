import styled from 'styled-components';
import { breakpoint } from '../../styles/configStyles';

const Input = styled.input`
  padding: 1rem 1.5rem;

  font-size: inherit;
  font-weight: 500;
  color: var(--color-grey-600);
  background-color: var(--color-brand-50);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);

  @media screen and (min-width: ${breakpoint.laptop}) {
    padding: 1.2rem 2rem;
  }
`;

export default Input;
