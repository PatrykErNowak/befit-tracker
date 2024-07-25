import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signIn as signInAPI } from '../../services/apiAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useSignIn() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signIn, isPending } = useMutation({
    mutationFn: signInAPI,
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user);
      navigate('/app', {
        replace: true,
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { signIn, isPending };
}
