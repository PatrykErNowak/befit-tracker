// export type MealName = 'breakfast' | 'brunch' | 'lunch' | 'supper' | 'dinner';
const ALL_MEALS = ['breakfast', 'brunch', 'lunch', 'supper', 'dinner'] as const;
type MealsTuple = typeof ALL_MEALS;

export type MealName = MealsTuple[number];

export type Dish = {
  name: string;
  desc?: string;
} & Nutrients;

export type Nutrients = {
  kcal: string;
  weight: string;
  protein: string;
  carbs: string;
  fat: string;
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

export function isMealName(value: string): value is MealName {
  return ALL_MEALS.includes(value as MealName);
}
