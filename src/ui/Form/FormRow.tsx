import styled from 'styled-components';

const StyledFormRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 2rem;
`;

const Label = styled.label`
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
  children: React.ReactElement<HTMLInputElement>;
};

function FormRow({ children, label, error }: FormRowProps) {
  const htmlForAttribute = children.props.id;

  return (
    <StyledFormRow>
      {label && <Label htmlFor={htmlForAttribute}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
