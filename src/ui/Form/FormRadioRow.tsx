import styled from 'styled-components';

const StyledFormRow = styled.fieldset`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  gap: 0.4rem;
  margin-bottom: 2rem;

  border: none;
`;

const Label = styled.legend`
  padding-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-grey-600);
`;

const Error = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(100%);
  font-size: 1.2rem;
  color: var(--error-color);
`;

type FormRowProps = {
  label: string;
  error?: string;
  children: React.ReactElement<HTMLDivElement>[];
};

function FormRadioRow({ label, error, children }: FormRowProps) {
  return (
    <StyledFormRow>
      {label && <Label>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRadioRow;
