import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  icon?: JSX.Element;
  title: string;
};

export function Button({ title, icon, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      {icon &&
        <S.Icon>{icon}</S.Icon>
      }
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}