import { Diet, Dish, MealName } from '../features/diet/Diet.types';
import supabase from './supabase';

export async function getDiet(
  userId: string,
  date: string
): Promise<{ diet: Diet; note: string | undefined | null }> {
  const { data, error } = await supabase
    .from('diets')
    .select('meals, note')
    .eq('user_id', userId)
    .eq('date', date);

  if (error) {
    console.error(error);
    throw new Error('Diet could not be loaded');
  }

  // Parse JSON
  const preparedMeals = JSON.parse(String(data.at(0)?.meals));
  const preparedNote = data.at(0)?.note;

  return { diet: preparedMeals, note: preparedNote };
}

export async function createDiet(
  userId: string,
  date: string,
  mealName: MealName,
  dish: Dish
) {
  // 1. Check if the record for that user and date exist

  const { data: userDiet, error: findRecordError } = await supabase
    .from('diets')
    .select('meals')
    .eq('user_id', userId)
    .eq('date', date);

  if (findRecordError) {
    console.error(findRecordError);
  }

  const isUserDiet = userDiet !== null && userDiet.length > 0;

  // ---------------------------------
  // 1A. if exists => UPDATE record

  if (isUserDiet) {
    const meals = JSON.parse(String(userDiet.at(0)?.meals)) as Diet;
    meals[mealName].push(dish);

    const { data, error } = await supabase
      .from('diets')
      .update({ meals: JSON.stringify(meals) })
      .eq('user_id', userId)
      .eq('date', date)
      .select();

    if (error) {
      console.error(error);
      throw new Error('Diet could not be updated');
    }

    return data;
  }

  // ---------------------------------
  // 1B. if no exists => create record for that day

  const defaultState: Diet = {
    breakfast: [],
    brunch: [],
    lunch: [],
    supper: [],
    dinner: [],
  };

  defaultState[mealName].push(dish);

  const { data, error } = await supabase
    .from('diets')
    .insert([{ user_id: userId, date, meals: JSON.stringify(defaultState) }])
    .select();

  if (error) {
    console.error(error);
    throw new Error('Diet could not be created');
  }

  return data;
}

export async function deleteDish(
  userId: string,
  date: string,
  diet: Diet,
  meal: MealName,
  dishToDelete: Dish
) {
  const copyDiet = { ...diet };
  copyDiet[meal] = copyDiet[meal].filter(
    (dish) => dish.name !== dishToDelete.name
  );

  const { data, error } = await supabase
    .from('diets')
    .update({ meals: JSON.stringify(copyDiet) })
    .eq('user_id', userId)
    .eq('date', date)
    .select();

  if (error) {
    console.error(error);
    throw new Error('Diet could not be updated');
  }

  return data;
}

export async function createUpdateDietNote(
  userId: string,
  date: string,
  note: string
) {
  const { data, error } = await supabase
    .from('diets')
    .update({ note })
    .eq('user_id', userId)
    .eq('date', date)
    .select();

  if (error) {
    console.error(error);
    throw new Error('Note could not be updated');
  }

  return data;
}
