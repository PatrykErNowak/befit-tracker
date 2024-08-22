import styled from 'styled-components';
import ComponentAppWrapper from './ComponentAppWrapper';

import TextArea from './Form/TextArea';
import Text from './Text';
import { breakpoint } from '../styles/configStyles';
import { ChangeEvent, useEffect, useState } from 'react';

const StyledNote = styled(ComponentAppWrapper)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;

  @media screen and (min-width: ${breakpoint.laptop}) {
    padding: 2rem;
  }
`;

const TextAreaExt = styled(TextArea)`
  color: var(--color-grey-500);

  &:focus {
    color: inherit;
  }
`;

type NoteProps = {
  label: string;
  value: string;
  disabled?: boolean;
  onChangeNote: (newValue: string) => void;
};

function Note({
  label,
  value,
  onChangeNote,
  disabled = false,
  ...props
}: NoteProps) {
  const [note, setNote] = useState('');

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.currentTarget.value;
    setNote(value);
    onChangeNote(value);
  }

  useEffect(() => setNote(value), [value]);

  return (
    <StyledNote {...props}>
      <Text as={'label'} $grey $bold={600}>
        {label || 'Note'}
      </Text>
      <TextAreaExt onBlur={handleChange} value={note} disabled={disabled} />
    </StyledNote>
  );
}

export default Note;
