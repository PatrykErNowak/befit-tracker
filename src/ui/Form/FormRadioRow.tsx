import styled, { css } from 'styled-components';

const StyledFormRow = styled.fieldset<{ $horizontal?: boolean }>`
  position: relative;
  display: grid;
  grid-auto-rows: 1fr;
  justify-items: start;
  gap: 0.4rem;
  margin-bottom: 2rem;

  border: none;
  ${({ $horizontal }) =>
    $horizontal &&
    css`
      grid-template-columns: 1fr 1fr;
    `}
`;

const Label = styled.legend`
  padding-bottom: 0.5em;
  font-size: clamp(1.2rem, 0.5rem + 0.6vw, 1.4rem);
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
  horizontal?: boolean;
};

function FormRadioRow({ label, error, horizontal = false, children }: FormRowProps) {
  return (
    <StyledFormRow $horizontal={horizontal}>
      {label && <Label>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRadioRow;
