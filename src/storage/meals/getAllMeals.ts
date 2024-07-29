import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from '@storage/storageConfig';
import { MealStorageDTO } from './mealStorageDTO';

export async function getAllMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);
    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}
