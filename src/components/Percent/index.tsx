import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  type: S.ButtonIconTypeStyleProps;
  showBackButton?: boolean;
  percentage: string;
};

export function Percent({ type, showBackButton = false, percentage }: Props) {
  return (
    <S.Container type={type}>
      {showBackButton &&
        <S.BackButton onPress={() => {}}>
          <S.BackIcon type={type} />
        </S.BackButton>
      }
      <S.Content>
        {!showBackButton && 
          <S.Button>
            <S.Icon type={type} />
          </S.Button>
        }
        <S.Title>{percentage}</S.Title>
        <S.Subtitle>das refeiçoes dentro da dieta</S.Subtitle>
      </S.Content>
    </S.Container>
  )
}