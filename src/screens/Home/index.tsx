import * as S from './styles';
import { RefreshControl, SectionList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { Header } from '@components/Header';
import { Percent } from '@components/Percent';
import { Button } from '@components/Button';
import { DietItem } from '@components/DietItem';
import { ListEmpty } from '@components/ListEmpty';

import { getAllMeals } from '@storage/meals/getAllMeals';
import { MealStorageDTO } from '@storage/meals/mealStorageDTO';

export function Home() {
  const { COLORS } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeals] = useState<MealStorageDTO[]>([]);
  const [sections, setSections] = useState<MealStorageDTO[]>([]);
  const [percentage, setPercentage] = useState<string>('0%');

  const formatDate = (dateString: string) => {
    const [day, month, year] = dateString.split('/');
    return `${day}.${month}.${year}`;
  };
  
  const organizeMealsBySections = (meals: MealStorageDTO[]) => {
    const sectionsMap = meals.reduce((acc, meal) => {
      const formattedDate = formatDate(meal.date);
  
      if (!acc[formattedDate]) {
        acc[formattedDate] = {
          date: formattedDate,
          id: meal.id,
          data: [],
        };
      }
      acc[formattedDate].data = acc[formattedDate].data.concat(meal.data);
      return acc;
    }, {} as { [key: string]: MealStorageDTO });
  
    return Object.values(sectionsMap);
  };

  const navigation = useNavigation();

  async function fetchMeals() {
    try {
      setIsLoading(true);
      const data = await getAllMeals();
      setMeals(data);
      setSections(organizeMealsBySections(data));
      calculatePercentage(data);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  const calculatePercentage = (meals: MealStorageDTO[]) => {
    const totalMeals = meals.reduce((acc, meal) => acc + meal.data.length, 0);
    const goodMeals = meals.reduce((acc, meal) => {
      return acc + meal.data.filter((data) => data.type === 'GOOD').length;
    }, 0);
    const percentage = totalMeals > 0 ? ((goodMeals / totalMeals) * 100).toFixed(2) : '0';
    setPercentage(`${percentage}%`);
  };

  useFocusEffect(useCallback(() => {
    fetchMeals();
  }, []));

  return (
    <S.Container>
      <Header />

      <Percent type={parseFloat(percentage) > 50 ? 'GOOD' : 'BAD'} percentage={percentage} />

      <S.Title>Refeições</S.Title>
      <Button title="Nova refeição" icon={<S.PlusIcon />} onPress={() => { navigation.navigate('new-meal', { mealId: '' }) }} />
      
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <DietItem
            status={item.type as 'GOOD' | 'BAD'}
            time={item.time}
            title={item.title}
            onPress={() => navigation.navigate('details', { mealId: item.id })}
          />
        )}
        renderSectionHeader={({ section: { date } }) => <S.TitleSection>{date}</S.TitleSection>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={sections.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message="Não há refeições cadastradas" />}
        refreshControl={
          <RefreshControl
              colors={[COLORS.GREEN_200]}
              tintColor={COLORS.GREEN_200}
              refreshing={isLoading}
              onRefresh={fetchMeals}
          />
        }
      />
    </S.Container>
  );
}