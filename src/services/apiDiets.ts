import supabase from './supabase';

export async function createDiet(
  userId: string,
  date: string,
  meals: Array<Array<object>>
) {
  // 1. check if the day exists for that user

  // if exists => update record

  //  if no exists => create record for that day
  const { data, error } = await supabase
    .from('diets')
    .insert([{ user: userId, date, meals: JSON.stringify(meals) }])
    .select();

  if (error) {
    console.error(error);
    throw new Error('Diet could not be created');
  }

  return data;
}
