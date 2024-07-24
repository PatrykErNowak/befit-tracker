import { forwardRef } from 'react';
import styled from 'styled-components';

const StyledButtonGroup = styled.fieldset`
  display: flex;
  border: none;

  legend {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  & > div:first-of-type {
    border-bottom-left-radius: var(--border-radius-md);
    border-top-left-radius: var(--border-radius-md);
  }
  & > div:last-of-type {
    border-bottom-right-radius: var(--border-radius-md);
    border-top-right-radius: var(--border-radius-md);
  }

  & > :checked {
    background-color: var(--color-brand-600);
    color: inherit;
  }
`;

const Button = styled.div`
  display: flex;
  border-radius: 0;
  background-color: transparent;
  border: 1px solid var(--color-brand-600);
  color: var(--color-brand-600);
  overflow: hidden;

  :first {
    border-bottom-left-radius: var(--border-radius-md);
    border-top-left-radius: var(--border-radius-md);
  }

  label {
    display: flex;
    align-items: center;
    flex-grow: 1;
    padding: 0 1.5rem;
    height: 100%;
    font-weight: 500;
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
  }

  input {
    appearance: none;
  }

  &:has(input:checked) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

type ButtonGroupProps = {
  name: string;
  buttons: string[];
  defaultChecked?: number;
  legend?: string;
};

const RadioGroup = forwardRef<HTMLInputElement, ButtonGroupProps>(function ({ name, buttons, defaultChecked, legend, ...props }: ButtonGroupProps, ref) {
  return (
    <StyledButtonGroup>
      {legend && <legend>{legend}</legend>}
      {buttons.map((btn, i) => (
        <Button key={i}>
          <label htmlFor={`${name}-${i}`}>{btn}</label>
          <input defaultChecked={defaultChecked === i} value={btn} type="radio" name={name} id={`${name}-${i}`} ref={ref} {...props} />
        </Button>
      ))}
    </StyledButtonGroup>
  );
});

export default RadioGroup;
