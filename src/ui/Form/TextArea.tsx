import styled from 'styled-components';
import { breakpoint } from '../../styles/configStyles';
import React from 'react';

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: vertical;
  padding: 1rem 1.5rem;
  font-size: inherit;
  font-weight: 500;
  color: var(--color-grey-600);
  background-color: var(--color-brand-50);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);

  &::placeholder {
    color: var(--color-grey-400);
    font-weight: 400;
    opacity: 0.8;
  }

  @media screen and (min-width: ${breakpoint.laptop}) {
    padding: 2rem;
    &:hover {
      border: 1px solid var(--color-brand-600);
    }
  }
`;

type TextAreaProps = {
  placeholder?: string;
  value?: string;
} & React.ComponentProps<'textarea'>;

function TextArea({ placeholder, value, ...props }: TextAreaProps) {
  return (
    <StyledTextArea
      {...props}
      defaultValue={value}
      placeholder={placeholder || 'Type something what you need to note...'}
    />
  );
}

export default TextArea;
