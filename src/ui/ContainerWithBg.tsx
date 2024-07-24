import styled from 'styled-components';
import Container from './Container';
import { breakpoint } from '../styles/configStyles';

const ContainerWithBg = styled(Container)`
  gap: 1rem;
  padding: 2rem 1rem 3rem;
  height: 100%;
  background: linear-gradient(25deg, var(--color-brand-400) 0%, var(--color-brand-600) 30%, var(--color-brand-800) 100%);
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
    color: var(--color-brand-50);
    text-decoration: underline;
    font-weight: 700;

    @media screen and (min-width: ${breakpoint.laptop}) {
      &:hover {
        color: var(--color-brand-400);
      }
    }
  }

  @media screen and (min-width: ${breakpoint.laptop}) {
    padding: 3rem;
  }
`;

export default ContainerWithBg;
