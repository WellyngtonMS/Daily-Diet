import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllMeals } from './getAllMeals';
import { MEALS_COLLECTION } from '@storage/storageConfig';
import { MealStorageDTO, MealData } from './mealStorageDTO';

export async function createMeal(newMeal: MealStorageDTO) {
  try {
    const storageMeals = await getAllMeals();

    const mealAlreadyExistsInSection = storageMeals.some(
      (meal) => meal.date === newMeal.date && meal.data.some((data) => data.id === newMeal.data[0].id)
    );

    if (mealAlreadyExistsInSection) {
      throw new Error('Esta refeição já existe nesta seção!');
    }

    const section = storageMeals.find((section) => section.date === newMeal.date);
    
    if (!section) {
      const storage = JSON.stringify([...storageMeals, newMeal]);
      await AsyncStorage.setItem(MEALS_COLLECTION, storage);
    } else {
      section.data.push(newMeal.data[0]);
      const updatedMeals = storageMeals.map((meal) => 
        meal.date === newMeal.date ? section : meal
      );
      const storage = JSON.stringify(updatedMeals);
      await AsyncStorage.setItem(MEALS_COLLECTION, storage);
    }
  } catch (error) {
    throw error;
  }
}
