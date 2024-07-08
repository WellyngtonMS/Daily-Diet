import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
  time: string;
  status: S.StatusTypeStyleProps;
};

export function DietItem({ title, time, status, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Item>
        <S.Wrapper>
          <S.Time>{time}</S.Time>
          <S.Divider />
          <S.Title>{title}</S.Title>
        </S.Wrapper>
        <S.Status status={status} />
      </S.Item>
    </S.Container>
  );
}