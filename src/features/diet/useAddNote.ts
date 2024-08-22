import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import useUser from '../auth/useUser';
import { useDateContext } from '../../contexts/DateContext';
import { createUpdateDietNote } from '../../services/apiDiets';

export default function useAddNote() {
  const { user } = useUser();
  const userId = user!.id;
  const { selectedDate: date } = useDateContext();

  const { mutate: updateNote, isPending } = useMutation({
    mutationFn: (note: string) => createUpdateDietNote(userId, date, note),
    onSuccess: () => {
      toast.success('Note successfuly updated!');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateNote, isPending };
}
