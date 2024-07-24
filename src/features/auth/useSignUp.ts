import { useMutation } from '@tanstack/react-query';
import { signUp as signUpAPI } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignUp() {
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpAPI,
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { signUp, isPending };
}
