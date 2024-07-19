import styled from 'styled-components';

type RadioProps = {
  label: string;
} & React.ComponentProps<'input'>;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Input = styled.input`
  position: relative;
  appearance: none;
  width: 2rem;
  height: 2rem;
  background-color: var(--color-brand-50);
  border-radius: 50%;

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

function Radio({ label, id, value, name, ...props }: RadioProps) {
  return (
    <Wrapper>
      <Input type="radio" id={id} name={name} value={value} {...props} />
      <label htmlFor={id}>{label}</label>
    </Wrapper>
  );
}

export default Radio;
