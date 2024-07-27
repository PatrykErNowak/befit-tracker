import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logoutUser } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate('login', { replace: true });
    },
  });

  return { logout, isPending };
}
