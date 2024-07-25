import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateCurrentUser } from '../../services/apiAuth';

export default function useUpdateUser() {
  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: updateCurrentUser,
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateUser, isPending };
}
