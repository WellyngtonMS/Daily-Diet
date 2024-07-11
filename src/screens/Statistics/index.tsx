import * as S from './styles';
import { useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';

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

  return (
    <S.Container style={{ backgroundColor: type === 'GOOD' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300, paddingTop: insets.top }}>
      <Percent
        type={type}
        percentage={percentage}
        showBackButton
      />

      <S.Content>
        <S.Title>Estatísticas Gerais</S.Title>

        <InfoBox title="22" subtitle="melhor sequência de pratos dentro da dieta" variant="full" />
        <InfoBox title="109" subtitle="refeições registradas" variant="full" />
        <View style={{ flexDirection: 'row', gap: 14 }}>
          <InfoBox 
            title="22"
            subtitle="refeições dentro da dieta"
            variant="half"
            type="GOOD"
          />
          <InfoBox 
            title="22"
            subtitle="refeições fora da dieta"
            variant="half"
            type="BAD"
          />
        </View>
      </S.Content>
    </S.Container>
  );
}