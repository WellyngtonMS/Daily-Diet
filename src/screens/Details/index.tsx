import * as S from './styles';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';
import { useRoute } from '@react-navigation/native';
import { DefaultHeader } from '@components/DefaultHeader';
import { Button } from '@components/Button';
import { DeleteModal } from '@components/DeleteModal';

type RouteParams = { mealId: string };

export function Details() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const route = useRoute();
  const { mealId } = route.params as RouteParams;
  const [isShowRemoveModal, setIsShowRemoveModal] = useState(false);

  const handleShowRemoveModal = () => {
    setIsShowRemoveModal(true);
  };

  return (
    <S.Container style={{ backgroundColor: theme.COLORS.GREEN_300, paddingTop: insets.top }}>
      <DefaultHeader title="Refeição" />

      <S.Content>
        <S.DetailsContainer>
          <S.Title>X-tudo</S.Title>
          <S.Description>Sanduíche de pão integral com atum e salada de alface e tomate.</S.Description>

          <S.Subtitle>Data e hora</S.Subtitle>
          <S.Description>12/08/2022 às 20:00</S.Description>

          <S.WrapperTag>
            <S.Icon color={theme.COLORS.GREEN_100} />
            <S.TextTag>dentro da dieta</S.TextTag>
          </S.WrapperTag>
        </S.DetailsContainer>

        <Button title="Editar refeição" icon={<S.EditIcon />} style={{ marginBottom: 0 }} />
        <Button title="Excluir refeição" icon={<S.DeleteIcon />} variant="secondary" onPress={handleShowRemoveModal} />
      </S.Content>

      {isShowRemoveModal && (
        <DeleteModal
          onClose={() => setIsShowRemoveModal(false)}
          onConfirm={() => setIsShowRemoveModal(false)}
          visible={isShowRemoveModal}
        />
      )}
    </S.Container>
  );
}