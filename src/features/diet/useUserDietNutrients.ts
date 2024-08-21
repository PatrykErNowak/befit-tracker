import { UserMetaData } from '../../services/types';
import {
  basalMetabolicRate,
  caloricDemandWithActivity,
  getUserAge,
  physicalActivityRate,
} from '../../utils/helpers';
import useUser from '../auth/useUser';

export default function useUserDietNutrients() {
  const { user } = useUser();

  const { birthdate, gender, height, weight, trainingLvl, movementLvl } =
    user?.user_metadata as UserMetaData;

  if (
    !birthdate ||
    !gender ||
    !height ||
    !weight ||
    !trainingLvl ||
    !movementLvl
  )
    return null;

  const bmr = basalMetabolicRate({
    age: getUserAge(birthdate),
    gender,
    height: Number(height?.value),
    weight: Number(weight?.actual),
  });
  const activityRate = physicalActivityRate(
    Number(trainingLvl),
    Number(movementLvl)
  );

  const kcalDemand = caloricDemandWithActivity(bmr, activityRate);

  const carbsTarget = Math.trunc((kcalDemand * 0.55) / 4);
  const proteinTarget = Math.trunc((kcalDemand * 0.15) / 4);
  const fatTarget = Math.trunc((kcalDemand * 0.3) / 9);

  return { kcalDemand, carbsTarget, proteinTarget, fatTarget };
}
