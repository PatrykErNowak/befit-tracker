import styled from 'styled-components';

const StyledBreakLine = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  height: 2px;
  background-color: var(--color-grey-200);
`;

const StyledBreakLinewithText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

const Span = styled.span`
  padding: 0 2rem;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    height: 2px;
    width: 1000px;
    background-color: var(--color-grey-300);
  }
  &::before {
    left: 0;
    transform: translate(-100%, -50%);
  }
  &::after {
    right: 0;
    transform: translate(100%, -50%);
  }
`;

type BreakLineProps = {
  text?: string;
};

function BreakLine({ text }: BreakLineProps) {
  if (text)
    return (
      <StyledBreakLinewithText>
        <Span>{text}</Span>
      </StyledBreakLinewithText>
    );

  return <StyledBreakLine />;
}

export default BreakLine;
