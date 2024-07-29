import * as S from './styles';
import { useState, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { DefaultHeader } from '@components/DefaultHeader';
import { Button } from '@components/Button';
import { DeleteModal } from '@components/DeleteModal';

import { getMeal } from '@storage/meals/getMeal';
import { deleteMeal } from '@storage/meals/deleteMeal';
import { MealData } from '@storage/meals/mealStorageDTO';

type RouteParams = { mealId: string };

export function Details() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const { mealId } = route.params as RouteParams;
  const [isShowRemoveModal, setIsShowRemoveModal] = useState(false);

  const [meal, setMeal] = useState<MealData>({
    id: '',
    title: '',
    description: '',
    date: '',
    time: '',
    type: '' as 'GOOD' | 'BAD'
  });

  const handleShowRemoveModal = () => {
    setIsShowRemoveModal(true);
  };

  const handleDeleteMeal = async () => {
    try {
      await deleteMeal(mealId);
      navigation.navigate('home');
    } catch (error) {
      throw error;
    }
  };

  async function getMealData() {
    try {
      const data = await getMeal(mealId);
      setMeal(data);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    getMealData();
  }, [mealId]);

  return (
    <S.Container style={{ backgroundColor: meal.type === 'GOOD' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300, paddingTop: insets.top }}>
      <DefaultHeader title="Refeição" />

      <S.Content>
        <S.DetailsContainer>
          <S.Title>{meal.title}</S.Title>
          <S.Description>{meal.description}</S.Description>

          <S.Subtitle>Data e hora</S.Subtitle>
          <S.Description>{meal.time}</S.Description>

          <S.WrapperTag>
            <S.Icon color={meal.type === 'GOOD' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100} />
            <S.TextTag>{meal.type === 'GOOD' ? 'dentro da dieta' : 'fora da dieta'}</S.TextTag>
          </S.WrapperTag>
        </S.DetailsContainer>

        <Button title="Editar refeição" icon={<S.EditIcon />} style={{ marginBottom: 0 }} onPress={() => navigation.navigate('new-meal', { mealId: meal.id })} />
        <Button title="Excluir refeição" icon={<S.DeleteIcon />} variant="secondary" onPress={handleShowRemoveModal} />
      </S.Content>

      {isShowRemoveModal && (
        <DeleteModal
          onClose={() => setIsShowRemoveModal(false)}
          onConfirm={() => handleDeleteMeal()}
          visible={isShowRemoveModal}
        />
      )}
    </S.Container>
  );
}