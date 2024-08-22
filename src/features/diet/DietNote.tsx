import { useDateContext } from '../../contexts/DateContext';
import Note from '../../ui/Note';
import useAddNote from './useAddNote';
import useDiet from './useDiet';

function DietNote({ ...props }) {
  const { note } = useDiet();
  const { selectedDate } = useDateContext();
  const { updateNote, isPending } = useAddNote();

  function onNoteChangeHandler(newNote: string) {
    updateNote(newNote);
  }

  return (
    <Note
      key={selectedDate}
      label="Day Note"
      value={note || ''}
      onChangeNote={onNoteChangeHandler}
      disabled={isPending}
      {...props}
    />
  );
}

export default DietNote;
