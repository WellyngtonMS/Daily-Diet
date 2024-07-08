import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Props = TouchableOpacityProps & {
  type: S.ButtonIconTypeStyleProps;
  showBackButton?: S.isBackButtonProps;
  percentage: string;
};

export function Percent({ type, showBackButton = false, percentage }: Props) {
  const navigation = useNavigation();
  
  function handleOpenStatistics(percentage: string, type: S.ButtonIconTypeStyleProps) {
    navigation.navigate('statistics', { percentage, type });
  };

  function handleBack() {
    navigation.goBack();
  };

  return (
    <S.Container type={type} showBackButton={showBackButton}>
      {showBackButton &&
        <S.BackButton onPress={handleBack}>
          <S.BackIcon type={type} />
        </S.BackButton>
      }
      <S.Content>
        {!showBackButton && 
          <S.Button onPress={() => handleOpenStatistics(percentage, type)}>
            <S.Icon type={type} />
          </S.Button>
        }
        <S.Title>{percentage}</S.Title>
        <S.Subtitle>das refeiçoes dentro da dieta</S.Subtitle>
      </S.Content>
    </S.Container>
  )
}