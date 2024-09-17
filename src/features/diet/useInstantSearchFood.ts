import { useQuery } from '@tanstack/react-query';
import { getInstantFoods } from '../../services/apiNutritionix';

export default function useInstantSearchFood(query: string) {
  const { data, isPending, error } = useQuery({
    queryKey: ['foodSearch', query],
    queryFn: () => {
      if (!query) return null;
      return getInstantFoods(query);
    },
    retry: false,
    staleTime: Infinity,
  });

  return { data, isPending, error };
}
