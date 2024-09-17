import dayjs from 'dayjs';
import { Diet, Dish, MealName, Nutrients } from '../features/diet/Diet.types';

// -----------------------------------------------------------
// Dates

export function getUserAge(birthdate: string) {
  const today = dayjs();
  return today.diff(birthdate, 'years');
}

export function getTodayDate() {
  const today = new Date();
  return (
    today.getFullYear() +
    '-' +
    ('0' + (today.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + today.getDate()).slice(-2)
  );
}

export function getCurrentYear() {
  const today = new Date();
  return today.getFullYear();
}

export const getRangeOfDays = (
  range: number,
  referenceDay: dayjs.Dayjs = dayjs()
) => {
  const modifier = Math.floor(range / 2);

  const days = [];
  for (let i = modifier; i > 0; i--) {
    days.push(referenceDay.subtract(i, 'days'));
  }

  days.push(referenceDay);

  for (let i = 1; i <= modifier; i++) {
    days.push(referenceDay.add(i, 'days'));
  }

  return days;
};

// -----------------------------------------------------------
// Suming nutrients

export function sumDishesNutrients(
  dishes: Dish[] | undefined,
  initState?: Nutrients
) {
  const init = {
    kcal: '0',
    protein: '0',
    fat: '0',
    carbs: '0',
    weight: '0',
  };

  if (dishes === undefined) return init;

  const data = dishes.reduce((prev, curr) => {
    return {
      kcal: String(Number(prev.kcal) + Number(curr.kcal)),
      carbs: String(Number(prev.carbs) + Number(curr.carbs)),
      fat: String(Number(prev.fat) + Number(curr.fat)),
      protein: String(Number(prev.protein) + Number(curr.protein)),
      weight: String(Number(prev.weight) + Number(curr.weight)),
    };
  }, initState || init);

  return data;
}

export function sumMealsNutrients(meals: Diet | undefined) {
  let meal = {
    kcal: '0',
    protein: '0',
    fat: '0',
    carbs: '0',
    weight: '0',
  };

  if (meals === undefined) return meal;

  if (meals)
    for (const key in meals) {
      if (Object.prototype.hasOwnProperty.call(meals, key)) {
        const element = meals[key as MealName];
        meal = sumDishesNutrients(element, meal);
      }
    }

  return meal;
}

// ------------------------------------------------------------------
// Diet rates and calcs

type basalMetabolicRate = {
  age: number;
  gender: 'male' | 'female';
  weight: number;
  height: number;
};

export function basalMetabolicRate({
  age,
  gender,
  weight,
  height,
}: basalMetabolicRate) {
  const rate = 10 * weight + 6.25 * height - 5 * age;

  return gender === 'male' ? rate + 5 : rate - 161;
}

export function physicalActivityRate(
  activityLevel: number,
  movementLevel: number
) {
  if (activityLevel === 0) return 1.2;
  if (activityLevel === 1 || movementLevel === 2) return 1.375;
  if (activityLevel === 2 || movementLevel === 3) return 1.55;
  if (activityLevel === 3) return 1.725;
  return 1.2;
}

export function caloricDemandWithActivity(bmr: number, activityRate: number) {
  return bmr * activityRate;
}

export function calcCaloriesByNutrients(
  protein: number,
  carbs: number,
  fat: number
) {
  return protein * 4 + carbs * 4 + fat * 9;
}

// ------------------------------------------------------------------
// Food item nutrients calcs

export function calcFoodItemNutrient(portionWeight: number, nutrient: number) {
  return (100 / portionWeight) * nutrient;
}
