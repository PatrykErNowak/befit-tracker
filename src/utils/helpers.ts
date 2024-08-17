import { Dish } from '../features/diet/Diet.types';

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

export function sumMacroNutrients(foods: Dish[]) {
  const init = {
    kcal: '0',
    protein: '0',
    fat: '0',
    carbs: '0',
    weight: '0',
  };

  const data = foods.reduce((prev, curr) => {
    return {
      kcal: String(Number(prev.kcal) + Number(curr.kcal)),
      carbs: String(Number(prev.carbs) + Number(curr.carbs)),
      fat: String(Number(prev.fat) + Number(curr.fat)),
      protein: String(Number(prev.protein) + Number(curr.protein)),
      weight: String(Number(prev.weight) + Number(curr.weight)),
    };
  }, init);

  return data;
}
