import * as S from './styles';

import { useNavigation } from '@react-navigation/native';

type Props = {
  title: string;
};

export function DefaultHeader({ title }: Props) {
  const navigation = useNavigation();
  function handleBack() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <S.Content>
        <S.BackButton onPress={handleBack}>
          <S.BackIcon />
        </S.BackButton>
        <S.Wrapper>
          <S.Title>{title}</S.Title>
        </S.Wrapper>
      </S.Content>
    </S.Container>
  );
}
