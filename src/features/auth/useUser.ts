import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../services/apiAuth';

export default function useUser() {
  const { data: user, isPending } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    retry: 1,
  });

  return { user, isPending, isAuthenticated: user?.role === 'authenticated' };
}
