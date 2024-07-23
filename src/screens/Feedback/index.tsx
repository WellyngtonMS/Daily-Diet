import * as S from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from '@components/Button';

import goodImg from '@assets/Illustration.png';
import badImg from '@assets/Illustration2.png';

export function Feedback() {
  const route = useRoute();
  const navigation = useNavigation();
  const { type } = route.params as { type: 'GOOD' | 'BAD' };

  return (
    <S.Container>
      <S.Content>
        <S.Title type={type}>
          {type === 'GOOD' ? 'Continue assim!' : 'Que pena!'}
        </S.Title>

        <S.Text>
          {type === "GOOD" ? "Você continua" : "Você"}{" "}
          <S.Description>
            {type === "GOOD" ? "dentro da dieta." : "saiu da dieta"}
          </S.Description>{" "}
          {type === "GOOD"
            ? "Muito bem!"
            : "dessa vez, mas continue se esforçando e não desista!"}
        </S.Text>
      </S.Content>

      <S.ImageWrapper>
        <S.Image source={type === 'GOOD' ? goodImg : badImg} />
      </S.ImageWrapper>
      <Button title="Ir para a página principal" onPress={() => { navigation.navigate('home') }} style={{ maxWidth: '70%' }} />
    </S.Container>
  );
}