import styled from 'styled-components';

const StyledBreakLine = styled.div`
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
  return (
    <StyledBreakLine>
      <Span>{text}</Span>
    </StyledBreakLine>
  );
}

export default BreakLine;
