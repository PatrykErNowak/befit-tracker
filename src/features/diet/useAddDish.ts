import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createDiet } from '../../services/apiDiets';
import useUser from '../auth/useUser';
import { AddMealObject } from './Diet.types';
import toast from 'react-hot-toast';
import { useDateContext } from '../../contexts/DateContext';

export default function useAddDish() {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const userId = user!.id;
  const { selectedDate: date } = useDateContext();

  const { mutate: addMeal, isPending } = useMutation({
    mutationFn: (meal: AddMealObject) => {
      const { name, data } = meal;
      const dish = {
        ...data,
        fat: data.fat || '0',
        protein: data.protein || '0',
        carbs: data.carbs || '0',
      };

      return createDiet(userId, date, name, dish);
    },
    onSuccess: () => {
      toast.success('Meal successfuly updated!');
      queryClient.invalidateQueries({
        queryKey: ['diet', date],
        refetchType: 'all',
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { addMeal, isPending };
}
