import { useQuery } from '@tanstack/react-query';
import { getTodayDate } from '../../utils/helpers';
import { getDiet } from '../../services/apiDiets';
import useUser from '../auth/useUser';

export default function useDiet() {
  const { user } = useUser();
  const date = getTodayDate();
  const userId = user!.id;

  const {
    data: diet,
    isPending,
    error,
  } = useQuery({
    queryKey: ['diet', date],
    queryFn: () => getDiet(userId, date),
    retry: false,
  });

  return { diet, isPending, error };
}
