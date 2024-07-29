import { getAllMeals } from './getAllMeals';

export async function getMeal(id: string) {
  try {
    const storage = await getAllMeals();
    const meal = storage.find((meal) => meal.data.some((data) => data.id === id));

    if (!meal) {
      throw new Error('Meal not found');
    }

    const mealData = meal.data.find((data) => data.id === id);
    if (!mealData) {
      throw new Error('Meal data not found');
    }

    return mealData;
  } catch (error) {
    throw error;
  }
}