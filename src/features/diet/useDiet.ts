import { useQuery } from '@tanstack/react-query';
import { getDiet } from '../../services/apiDiets';
import useUser from '../auth/useUser';
import { useDateContext } from '../../contexts/DateContext';

export default function useDiet() {
  const { user } = useUser();
  const userId = user!.id;
  const { selectedDate: date } = useDateContext();

  const { data, isPending, error } = useQuery({
    queryKey: ['diet', date],
    queryFn: () => getDiet(userId, date),
    retry: false,
  });

  return { diet: data?.diet, note: data?.note, isPending, error };
}
