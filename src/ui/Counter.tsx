import { SyntheticEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from './Form/Input';
import Button from './Buttons/Button';
import Container from './Container';

const StyledCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 0.5rem 0;
`;

const ButtonExt = styled(Button)`
  padding: 0;
  height: 3rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;

const InputContainer = styled(Container)`
  position: relative;
  max-width: 10rem;
`;

const InputExt = styled(Input)`
  padding-right: 3.5rem;
  width: 100%;
  text-align: center;
`;

const Units = styled.span`
  position: absolute;

  right: 1.5rem;
`;

type CounterProps = {
  step: number;
  unit?: string;
  minCounter?: number;
  maxCounter?: number;
  reset?: boolean;
  onChangeCounter: (value: number) => void;
  disabled?: boolean;
};

function Counter({ step, unit, minCounter, maxCounter, reset, onChangeCounter, disabled = false }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    onChangeCounter(count);
  }, [count, onChangeCounter]);

  useEffect(() => {
    if (reset) setCount(0);
  }, [reset]);

  const decrement = (e: SyntheticEvent) => {
    e.preventDefault();
    if (count === minCounter) return;
    setCount((prev) => (prev -= step));
  };

  const increment = (e: SyntheticEvent) => {
    e.preventDefault();
    if (count === maxCounter) return;
    setCount((prev) => (prev += step));
  };

  return (
    <StyledCounter>
      <ButtonExt $variation="primary" onClick={decrement} disabled={disabled}>
        -
      </ButtonExt>
      <InputContainer>
        <InputExt type="text" value={count.toPrecision(3)} onChange={(e) => setCount(Math.abs(Number(e.currentTarget.value)))} disabled={disabled} />
        <Units>{unit}</Units>
      </InputContainer>
      <ButtonExt $variation="primary" onClick={increment} disabled={disabled}>
        +
      </ButtonExt>
    </StyledCounter>
  );
}

export default Counter;
