import * as S from './styles';
import { useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { useState, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { getAllMeals } from '@storage/meals/getAllMeals';
import { MealStorageDTO } from '@storage/meals/mealStorageDTO';

import { Percent } from '@components/Percent';
import { InfoBox } from '@components/InfoBox';

type RouteParams = {
  percentage: string;
  type: 'GOOD' | 'BAD';
}

export function Statistics() {
  const route = useRoute();
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const { percentage, type } = route.params as RouteParams;
  const [meals, setMeals] = useState<MealStorageDTO[]>([]);
  const [totalMeals, setTotalMeals] = useState(0);
  const [mealsInDiet, setMealsInDiet] = useState(0);
  const [mealsOutDiet, setMealsOutDiet] = useState(0);
  const [bestSequence, setBestSequence] = useState(0);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const data = await getAllMeals();
        setMeals(data);
        calculateStatistics(data);
      } catch (error) {
        throw error;
      }
    }

    fetchMeals();
  }, []);

  const calculateStatistics = (meals: MealStorageDTO[]) => {
    let total = 0;
    let inDiet = 0;
    let outDiet = 0;
    let currentSequence = 0;
    let maxSequence = 0;

    meals.forEach(meal => {
      total += meal.data.length;
      meal.data.forEach(data => {
        if (data.type === 'GOOD') {
          inDiet++;
          currentSequence++;
          if (currentSequence > maxSequence) {
            maxSequence = currentSequence;
          }
        } else {
          outDiet++;
          currentSequence = 0;
        }
      });
    });

    setTotalMeals(total);
    setMealsInDiet(inDiet);
    setMealsOutDiet(outDiet);
    setBestSequence(maxSequence);
  };

  return (
    <S.Container style={{ backgroundColor: type === 'GOOD' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300, paddingTop: insets.top }}>
      <Percent
        type={type}
        percentage={percentage}
        showBackButton
      />

      <S.Content>
        <S.Title>Estatísticas Gerais</S.Title>

        <InfoBox title={`${bestSequence}`} subtitle="melhor sequência de pratos dentro da dieta" variant="full" />
        <InfoBox title={`${totalMeals}`} subtitle="refeições registradas" variant="full" />
        <View style={{ flexDirection: 'row', gap: 14 }}>
          <InfoBox 
            title={`${mealsInDiet}`}
            subtitle="refeições dentro da dieta"
            variant="half"
            type="GOOD"
          />
          <InfoBox 
            title={`${mealsOutDiet}`}
            subtitle="refeições fora da dieta"
            variant="half"
            type="BAD"
          />
        </View>
      </S.Content>
    </S.Container>
  );
}