import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createDiet } from '../../services/apiDiets';
import useUser from '../auth/useUser';
import { getTodayDate } from '../../utils/helpers';
import { AddMealObject } from './Diet.types';
import toast from 'react-hot-toast';

export default function useAddMeal() {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const userId = user!.id;
  const date = getTodayDate();

  const { mutate: addMeal, isPending } = useMutation({
    mutationFn: (meal: AddMealObject) => {
      const { name, data } = meal;
      return createDiet(userId, date, name, data);
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
