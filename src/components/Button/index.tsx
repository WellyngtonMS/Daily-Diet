import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  icon?: JSX.Element;
  title: string;
  variant?: 'primary' | 'secondary';
};

export function Button({ title, icon, variant = 'primary', ...rest }: Props) {
  return (
    <S.Container variant={variant} {...rest}>
      {icon &&
        <S.Icon>{icon}</S.Icon>
      }
      <S.Title variant={variant}>{title}</S.Title>
    </S.Container>
  );
}