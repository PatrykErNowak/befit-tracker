import { useQuery } from '@tanstack/react-query';
import { getFoodItem } from '../../services/apiNutritionix';

export default function useSearchFoodItem(query: string) {
  const { data, isPending, error } = useQuery({
    queryKey: ['foodSearchItem', query],
    queryFn: () => {
      if (!query) return null;
      return getFoodItem(query);
    },
    retry: false,
    staleTime: Infinity,
  });

  return { data: data?.foods.at(0), isPending, error };
}
