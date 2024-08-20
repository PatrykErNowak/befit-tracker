import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteDish as deleteDishAPI } from '../../services/apiDiets';
import useUser from '../auth/useUser';
import useDiet from './useDiet';
import { AddMealObject } from './Diet.types';
import toast from 'react-hot-toast';
import { useDateContext } from '../../contexts/DateContext';

export default function useDeleteDish() {
  const queryClient = useQueryClient();
  const { diet } = useDiet();
  const { user } = useUser();
  const userId = user!.id;
  const { selectedDate: date } = useDateContext();

  const { mutate: deleteDish } = useMutation({
    mutationFn: (meal: AddMealObject) => {
      const { name, data } = meal;
      return deleteDishAPI(userId, date, diet!, name, data);
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

  return { deleteDish };
}
