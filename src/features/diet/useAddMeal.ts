import { useMutation } from '@tanstack/react-query';
import { createDiet } from '../../services/apiDiets';
import useUser from '../auth/useUser';
import { getTodayDate } from '../../utils/helpers';
import { AddMealObject } from './Diet.types';
import { User } from '@supabase/supabase-js';
import toast from 'react-hot-toast';

export default function useAddMeal() {
  const { user } = useUser();
  const userId = user?.id as User['id'];
  const date = getTodayDate();

  const { mutate: addMeal, isPending } = useMutation({
    mutationFn: (meal: AddMealObject) => {
      const { name, data } = meal;
      return createDiet(userId, date, name, data);
    },
    onSuccess: () => {
      toast.success('Dish successfuly added!');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { addMeal, isPending };
}
