import { FoodItem, InstantSearchType } from './types';

const InstantSearchURL =
  'https://trackapi.nutritionix.com/v2/search/instant/?query=';
const FoodItemURL = 'https://trackapi.nutritionix.com/v2/search/item/?upc=';

const headers = {
  'Content-Type': 'application/json',
  'x-app-id': import.meta.env.VITE_NUTRITIONIX_APP_ID,
  'x-app-key': import.meta.env.VITE_NUTRITIONIX_API_KEY,
};

export async function getInstantFoods(
  query: string
): Promise<InstantSearchType> {
  try {
    const response = await fetch(InstantSearchURL + query, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Diet could not be updated');
  }
}

export async function getFoodItem(query: string): Promise<FoodItem> {
  try {
    const response = await fetch(FoodItemURL + query, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Diet could not be updated');
  }
}
