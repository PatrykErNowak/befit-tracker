import styled from 'styled-components';

const StyledHeading = styled.h2`
  font-size: 3rem;
  span {
    color: var(--color-brand-500);
  }
`;

type HeadingProps = {
  as: React.ElementType;
  children: React.ReactNode;
};

function Heading({ as, children }: HeadingProps) {
  return <StyledHeading as={as}>{children}</StyledHeading>;
}

export default Heading;
