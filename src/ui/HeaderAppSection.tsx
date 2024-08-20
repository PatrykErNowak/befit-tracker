import styled from 'styled-components';
import Heading from './Heading';
import Text from './Text';

const StyledHeaderAppSection = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  column-gap: 2rem;
  align-items: end;

  position: relative;
  padding-left: 1rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-grey-200);
  }
`;

type HeaderAppSectionProps = {
  title: string;
  desc?: string;
  btn?: React.ReactElement;
};

function HeaderAppSection({ title, desc, btn }: HeaderAppSectionProps) {
  return (
    <StyledHeaderAppSection>
      <div>
        <Heading as="h2" $opacity={1}>
          {title}
        </Heading>
        <Text $opacity={0.8}>{desc}</Text>
      </div>
      {btn}
    </StyledHeaderAppSection>
  );
}

export default HeaderAppSection;
