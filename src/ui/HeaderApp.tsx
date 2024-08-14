import styled from 'styled-components';
import { breakpoint } from '../styles/configStyles';

const StyledHeaderApp = styled.header`
  display: inline-block;
  margin-top: 1rem;
  padding: 1rem 3rem;
  width: max-content;
  background-color: var(--color-brand-600);
  border-radius: 0 500px 500px 0;

  h1 {
    color: var(--color-brand-50);
    font-size: clamp(2.5rem, 1.5rem + 1vw, 5rem);
    font-weight: 700;
    letter-spacing: 1px;
  }

  @media screen and (min-width: ${breakpoint.laptop}) {
    padding: 1rem 5rem;
  }
`;

function HeaderApp({ children }: { children: string }) {
  return (
    <StyledHeaderApp>
      <h1 className="heading">{children}</h1>
    </StyledHeaderApp>
  );
}

export default HeaderApp;
