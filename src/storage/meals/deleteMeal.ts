import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from '@storage/storageConfig';
import { MealStorageDTO } from './mealStorageDTO';
import { getAllMeals } from './getAllMeals';

export async function deleteMeal(mealId: string) {
  try {
    const storageMeals = await getAllMeals();
    const updatedMeals = storageMeals.map((meal) => ({
      ...meal,
      data: meal.data.filter((data) => data.id !== mealId),
    }));

    const cleanedMeals = updatedMeals.filter((meal) => meal.data.length > 0);

    const storage = JSON.stringify(cleanedMeals);
    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
