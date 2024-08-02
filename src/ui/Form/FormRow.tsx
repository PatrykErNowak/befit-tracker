import styled, { css } from 'styled-components';
import { breakpoint } from '../../styles/configStyles';

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

const ChildrenContainer = styled.div<{ $vertical?: boolean }>`
  display: flex;
  ${({ $vertical }) =>
    $vertical
      ? css`
          flex-direction: column;
        `
      : ''}
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  & > :first-child {
    flex-grow: 1;
  }

  @media screen and (min-width: ${breakpoint.laptop}) {
    column-gap: 3rem;
    row-gap: 1rem;
  }
`;

type FormRowProps = {
  label: string;
  id?: string;
  error?: string;
  children: React.ReactElement<HTMLInputElement> | React.ReactNode[];
  vertical?: boolean;
};

function FormRow({ children, label, id, error, vertical = false }: FormRowProps) {
  // const htmlForAttribute = children.props.id;

  return (
    <StyledFormRow>
      {label && <Label htmlFor={id}>{label}</Label>}
      <ChildrenContainer $vertical={vertical}>{children}</ChildrenContainer>
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
