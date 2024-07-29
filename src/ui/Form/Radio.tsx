import { forwardRef } from 'react';
import styled from 'styled-components';

type RadioProps = {
  label: string;
  labelDesc?: string;
} & React.ComponentProps<'input'>;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
`;

const Input = styled.input`
  flex-shrink: 0;

  position: relative;
  appearance: none;
  width: 2.2rem;
  height: 2.2rem;
  background-color: var(--color-brand-50);
  border-radius: 50%;
  border: 1px solid var(--color-brand-500);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 60%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    border: transparent;
  }
  &:checked&::before {
    background-color: var(--color-brand-500);
  }
`;

const Label = styled.label`
  font-weight: 500;
  width: 100%;
`;

const LabelDesc = styled.p`
  font-size: 0.8em;
  color: var(--color-grey-500);
`;

const Radio = forwardRef<HTMLInputElement, RadioProps>(function ({ label, labelDesc, id, value, ...props }: RadioProps, ref) {
  return (
    <Wrapper>
      <Input type="radio" id={id} value={value} aria-describedby={`${id}Desc`} {...props} ref={ref} />

      <Label htmlFor={id}>
        <span>{label}</span>
        {labelDesc && <LabelDesc id={`${id}Desc`}>{labelDesc}</LabelDesc>}
      </Label>
    </Wrapper>
  );
});

export default Radio;
