import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getDiet } from '../services/apiDiets';
import useUser from '../features/auth/useUser';

export default function usePrefetchData() {
  const [date, setDate] = useState<string>();
  const { pathname } = useLocation();
  const queryClient = useQueryClient();
  const { user } = useUser();
  const userId = user!.id;

  function FetchDataForDate(day: string) {
    setDate(day);
  }

  if (pathname.includes('/app/diet') && date) {
    queryClient.prefetchQuery({
      queryKey: ['diet', date],
      queryFn: () => getDiet(userId, date),
      staleTime: Infinity,
    });
  }

  return FetchDataForDate;
}
