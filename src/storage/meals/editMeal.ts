import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from '@storage/storageConfig';
import { MealData } from './mealStorageDTO';
import { getAllMeals } from './getAllMeals';

export async function editMeal(mealId: string, newMeal: MealData) {
  try {
    const storageMeals = await getAllMeals();

    let originalDate = '';
    storageMeals.forEach((mealSection) => {
      mealSection.data.forEach((data) => {
        if (data.id === mealId) {
          originalDate = mealSection.date;
        }
      });
    });

    if (!originalDate) {
      throw new Error('Meal not found');
    }

    let updatedMeals = storageMeals;
    if (originalDate !== newMeal.date) {
      updatedMeals = storageMeals.map((mealSection) => {
        if (mealSection.date === originalDate) {
          return {
            ...mealSection,
            data: mealSection.data.filter((data) => data.id !== mealId),
          };
        }
        return mealSection;
      });
    }

    const sectionExists = updatedMeals.some((mealSection) => mealSection.date === newMeal.date);
    if (sectionExists) {
      updatedMeals = updatedMeals.map((mealSection) => {
        if (mealSection.date === newMeal.date) {
          return {
            ...mealSection,
            data: mealSection.data.some((data) => data.id === mealId)
              ? mealSection.data.map((data) => (data.id === mealId ? newMeal : data))
              : mealSection.data.concat(newMeal),
          };
        }
        return mealSection;
      });
    } else {
      updatedMeals.push({
        date: newMeal.date,
        id: mealId,
        data: [newMeal],
      });
    }
    updatedMeals = updatedMeals.filter((mealSection) => mealSection.data.length > 0);

    const storage = JSON.stringify(updatedMeals);
    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
