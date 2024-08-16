export type MealName = 'breakfast' | 'brunch' | 'lunch' | 'supper' | 'dinner';

export type Dish = {
  name: string;
  desc: string;
  kcal: number;
  weight: number;
  protein: number;
  carbs: number;
  fat: number;
};

export type Meal = Dish[];

export type Diet = {
  breakfast: Meal;
  brunch: Meal;
  lunch: Meal;
  supper: Meal;
  dinner: Meal;
};

export type AddMealObject = {
  name: MealName;
  data: Dish;
};
