import styled from 'styled-components';
import Container from './Container';
import { breakpoint } from '../styles/configStyles';

const ContainerWithBg = styled(Container)`
  gap: 1rem;
  padding: 2rem 1rem 3rem;
  height: 100%;
  background: linear-gradient(15deg, #a8cf45 0%, rgba(6, 182, 212, 1) 30%, #0891b2 100%);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);

  :first-child {
    margin-bottom: 1rem;
  }
  :last-child {
    margin-top: 2rem;
  }

  h2,
  p {
    color: var(--color-brand-50);
  }
  a {
    color: var(--color-brand-900);
  }

  @media screen and (min-width: ${breakpoint.laptop}) {
    padding: 3rem;
  }
`;

export default ContainerWithBg;
