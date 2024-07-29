import * as S from './styles';
import { DefaultHeader } from '@components/DefaultHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

import { Form } from '@components/Form';
import { MealStorageDTO, MealData } from '@storage/meals/mealStorageDTO';
import { createMeal } from '@storage/meals/createMeal';
import { getMeal } from '@storage/meals/getMeal';
import { editMeal } from '@storage/meals/editMeal';

type RouteParams = { mealId?: string };

const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export function NewMeal() {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const { mealId } = route.params as RouteParams;

  const [meal, setMeal] = useState<MealData>({
    id: '',
    title: '',
    description: '',
    date: '',
    time: '',
    type: '' as 'GOOD' | 'BAD'
  });

  const [formData, setFormData] = useState<MealStorageDTO>({
    id: generateRandomId(),
    date: '',
    data: []
  });

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getMealData() {
      setLoading(true);
      try {
        if (mealId) {
          const data = await getMeal(mealId);
          setMeal(data);
          setFormData({
            id: generateRandomId(),
            date: data.date,
            data: [data]
          });
        }
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    }

    getMealData();
  }, [mealId]);

  async function handleSubmit(data: MealData) {
    setLoading(true);
    try {
      if (mealId) {
        await editMeal(mealId, data);
      } else {
        const newMeal = {
          ...data,
          id: meal.id || generateRandomId()
        };
        setMeal(newMeal);

        const newFormData = {
          id: generateRandomId(),
          date: newMeal.date,
          data: [newMeal]
        };

        setFormData(newFormData);
        await createMeal(newFormData);
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return (
    <S.Container style={{ paddingTop: insets.top }}>
      <DefaultHeader title={mealId ? 'Editar refeição' : 'Nova refeição'} />
      <S.Content>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Form
            title={meal.title}
            description={meal.description}
            date={meal.date}
            time={meal.time}
            type={meal.type}
            titleButton={mealId ? 'Salvar alterações' : 'Cadastrar refeição'}
            onSubmit={(data) => handleSubmit(data)}
          />
        )}
      </S.Content>
    </S.Container>
  );
}
