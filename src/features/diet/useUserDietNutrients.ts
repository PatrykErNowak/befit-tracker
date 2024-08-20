import { UserMetaData } from '../../services/types';
import {
  basalMetabolicRate,
  getUserAge,
  physicalActivityRate,
} from '../../utils/helpers';
import useUser from '../auth/useUser';

export default function useUserDietNutrients() {
  const { user } = useUser();

  if (!user) return;

  const { birthdate, gender, height, weight, trainingLvl } =
    user.user_metadata as UserMetaData;

  if (!birthdate || !gender || !height || !weight || !trainingLvl) return;

  const bmr = basalMetabolicRate({
    age: getUserAge(birthdate),
    gender,
    height: Number(height?.value),
    weight: Number(weight?.actual),
    activityLevel: physicalActivityRate(Number(trainingLvl)),
  });

  const carbsTarget = Math.trunc((bmr! * 0.55) / 4);
  const proteinTarget = Math.trunc((bmr! * 0.15) / 4);
  const fatTarget = Math.trunc((bmr! * 0.3) / 9);

  return { bmr, carbsTarget, proteinTarget, fatTarget };
}
